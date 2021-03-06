import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import {FormControlLabel, FormGroup, Stack, Switch, TextField} from "@mui/material";
import CameraWithPreview from "./CameraWithPreview";
import Header from '../Header'
import {storage, db} from '../../firestore/firestore'
import {collection, doc, setDoc} from "firebase/firestore";
import {getDownloadURL, ref, uploadString} from 'firebase/storage'
import {v4 as uuidv4} from 'uuid';
import {useNavigate, useParams} from "react-router-dom";
import {getAPIConfig, getOrCreateChatByTitle} from "../../api/chatengine_api";
import getAssetByUID from "../../api/db_calls";
import axios from "axios";
import {observer} from "mobx-react";
import {useAuth} from "../../context/AuthContext";

const VisualProof = observer(({areaStore}) => {
    const {uid, areaId, partId} = useParams()
    const [area] = useState(areaStore.setSelectedArea(parseInt(areaId)))
    const [progress] = useState(areaStore.getProgress)
    const [part] = useState(areaStore.setSelectedPart(parseInt(areaId), parseInt(partId)))
    const {id, name} = part

    const navigate = useNavigate();

    const screenTitle = 'Inbound Check'
    const {currentUser} = useAuth()
    const [checked, setChecked] = React.useState(false);

    const [state, setState] = useState({
        picture_1: '',
        picture_2: '',
        description: ''
    });

    const {picture_1, picture_2} = state

    function handleChange(name, value) {
        setState({...state, [name]: value})
    }

    const handleSwitch = (event) => {
        setChecked(event.target.checked);
        area.parts[id].isChecked = event.target.checked;
    }

    async function uploadPhoto(photoString) {
        const uuid = uuidv4();
        const uploadRef = ref(storage, uuid)
        await uploadString(uploadRef, photoString, 'data_url', {contentType: 'image/jpg'})
        return await getDownloadURL(uploadRef)
    }

    async function handleSubmit({isDamaged}) {
        // area.parts[id].isChecked = true
        areaStore.setPartAsChecked(areaId, partId)
        setChecked(true);
        areaStore.updateProgress()
        navigate(`/detail/${uid}/${area.id}`)
        if (isDamaged) {
            console.log(isDamaged)
            let uploadPhotosPromise = []

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
                let chatAPIConfig = getAPIConfig(currentUser,
                    `https://api.chatengine.io/chats/`,
                    'get')
                let asset = await getAssetByUID(uid)
                asset = asset.data()
                const chatId = await getOrCreateChatByTitle(asset.vin, chatAPIConfig)
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
    }

        function NavigationButtons(isDamaged) {
            return (
                <Stack m={2} direction="row" spacing={2} justifyContent="center"
               alignItems="center">
                        <Button sx={{m: 3, boxShadow: 10}} variant="outlined" size="large"
                                startIcon={<UndoSharpIcon/>} onClick={() => navigate(-1)}>
                            Back
                        </Button>
                        <Button sx={{m: 3, boxShadow: 10}} size="large"
                                variant="contained" onClick={(e) => handleSubmit(isDamaged)}>Next</Button>
                    </Stack>
            )
        }

        return (
            <>
                <Header header={`${screenTitle}: ` + name}
                        screenTitle="Visual Proof of Damage"
                        screenDescription="Please describe the damage you have identified. Additionally, please take a picture of the damage"
                        progress={progress}
                />
                <Box sx={{paddingRight: 2}}
                >
                    <FormGroup sx={{alignItems: "center", justifyContent: "center", m: 3}}>
                        <FormControlLabel control={<Switch checked={checked} onChange={handleSwitch}/>}
                                          label="Damages?"/>
                    </FormGroup>

                    {!checked ? <NavigationButtons isDamaged={checked} prior={{route: `/detail/${uid}/${areaId}`}}/> : (
                        <Box>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
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

                        </Grid>
                        <NavigationButtons isDamaged={checked} prior={{route: `/detail/${uid}/${areaId}`}}/>
                        </Box>
                    )}
                </Box>
            </>

        );
    }

)

    export default VisualProof;