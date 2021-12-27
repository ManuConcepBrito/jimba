import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDoc, doc} from "firebase/firestore";
import {auth, db} from "../firestore/firestore";
import CardHeader from '@mui/material/CardHeader';
import Grid from '@material-ui/core/Grid';
import Box from "@mui/material/Box";
import Loading from "./Loading"
import UndoSharpIcon from '@mui/icons-material/UndoSharp';
import axios from "axios";

export default function AssetDetail() {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const [asset, setAsset] = useState([])
    const {uid} = useParams()
    const user = auth.currentUser

    const openChatOnClick = () => {
        const data = JSON.stringify({
            "title": asset.vin,
            "is_direct_chat": false
        });
        const config = {
            method: 'post',
            url: 'https://api.chatengine.io/chats/',
            headers: {
                'project-id': process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
                'user-name': user.email,
                'user-secret': user.uid,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                navigate('/chat');
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        const assetRef = doc(db, "cars", uid)
        const getAsset = async () => {
            try {
                const data = await getDoc(assetRef)
                setAsset(data.data())
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getAsset()
    }, [asset])
    return (
        <React.Fragment>
            {
                loading ? <Loading/> :
                    <Grid
                        container
                        justify="center"
                        direction="row"
                        alignItems="center"
                    >

                        <Grid item m={5}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={asset.img_url}
                                    alt="asset"
                                />
                                <CardHeader
                                    title={asset.model}
                                    subheader={` VIN: ${asset.vin}`}
                                />
                                <CardContent>
                                    {asset.mileage && <Typography variant="p" component="div">
                                        {`Mileage: ${asset.mileage} km`}
                                    </Typography>}
                                    {asset.fuel && <Typography variant="p" component="div">
                                        {`Fuel: ${asset.fuel} L`}
                                    </Typography>}
                                </CardContent>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Button sx={{width: "200px", my: 3, boxShadow: 10}} variant="outlined" onClick={navigate('/')}>Inbound
                                        Check</Button>
                                    <Button sx={{width: "200px", my: 3, boxShadow: 10}} variant="outlined">Outbound
                                        Check</Button>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Button sx={{m: 3, boxShadow: 10}} variant="outlined" startIcon={<UndoSharpIcon/>}>
                                        Back
                                    </Button>
                                    <Button onClick={openChatOnClick} color="primary" sx={{m: 3, boxShadow: 10}}
                                            variant="contained">Chat</Button>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>

            }

        </React.Fragment>

    )
}