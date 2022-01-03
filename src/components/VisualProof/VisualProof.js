import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import {TextField} from "@mui/material";
import CameraWithPreview from "./CameraWithPreview";
import Header from '../Header'
import {storage, db, auth} from '../../firestore/firestore'
import {collection, doc, setDoc} from "firebase/firestore";
import {getDownloadURL, ref, uploadString} from 'firebase/storage'
import {v4 as uuidv4} from 'uuid';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getChatByTitle, getAPIConfig} from "../../api/chatengine_api";
import getAssetByUID from "../../api/db_calls";
import axios from "axios";


function VisualProof(props) {
    let location = useLocation()
    let {part, assetLocation, area} = location.state
    const {id, name} = part
    const navigate = useNavigate();
    const {uid} = useParams()
    const screenTitle = props.screenTitle || 'Inbound Check'
    const user = auth.currentUser

    const [state, setState] = useState({
        picture_1: '',
        picture_2: '',
        description: ''
    });

    const {picture_1, picture_2} = state

    function handleChange(name, value) {
        setState({...state, [name]: value})
    }

    async function uploadPhoto(photoString) {
        const uuid = uuidv4();
        const uploadRef = ref(storage, uuid)
        await uploadString(uploadRef, photoString, 'data_url')
        return await getDownloadURL(uploadRef)
    }

    async function handleSubmit() {
        let uploadPhotosPromise = []
        area.parts[id].isChecked = true
        navigate(`/detail/${assetLocation}/${uid}`, {state: {area: area}})
        try {
            for (let pic of [picture_1, picture_2]) {
                let promise = uploadPhoto(pic)
                uploadPhotosPromise.push(promise)
            }
            const url_photos = await Promise.all(uploadPhotosPromise)

            const docData = {
                img_1: url_photos[0],
                img_2: url_photos[1],
                description: state.description,
                isChecked: true

            }
            // Create form with images about Car Problem
            const formRef = doc(collection(doc(db, "forms", uid), area.route), name)
            await setDoc(formRef, docData)
            // Send message in the chat about this problem
            let chatAPIConfig = getAPIConfig(user,
                `https://api.chatengine.io/chats/`,
                'get')
            let asset = await getAssetByUID(uid)
            asset = asset.data()
            console.log(asset)
            const chatId = await getChatByTitle(asset.vin, chatAPIConfig)
            console.log(chatId)
            chatAPIConfig = {
                ...chatAPIConfig,
                url: `https://api.chatengine.io/chats/${chatId}/messages/`,
                method: 'post',
                data: {
                    text: `There is a problem in ${area.name}: ${part.name}. Here's a description by the operator: "${state.description}". Above are the pictures about this issue`,
                    attachment_urls: url_photos
                }
            }
            await axios(chatAPIConfig)
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <>
            <Header header={`${screenTitle}: ` + name}
                    screenTitle="Visual Proof of Damage"
                    screenDescription="Please describe the damage you have identified. Additionally, please take a picture of the damage"
                    progress={50}
            />
            <Box
                py={5}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={5}
                >
                    <TextField
                        id="outlined-required"
                        label="Description"
                        multiline
                        rows={2}
                        onChange={(e) => handleChange('description', e.target.value)}
                    />
                    <Grid item>
                        <CameraWithPreview name="picture_1" dataUri={picture_1} handleChange={handleChange}/>
                    </Grid>
                    <Grid item>
                        <CameraWithPreview name="picture_2" dataUri={picture_2} handleChange={handleChange}/>
                    </Grid>

                    <Grid item xs={12} m={12}>
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Button sx={{m: 3, boxShadow: 10}} variant="outlined" size="large"
                                    startIcon={<UndoSharpIcon/>}>
                                Back
                            </Button>
                            <Button sx={{m: 3, boxShadow: 10}} size="large"
                                    variant="contained" onClick={handleSubmit}>Next</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>

    );
}

export default VisualProof;