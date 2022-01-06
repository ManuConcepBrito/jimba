import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams} from "react-router-dom";
import {auth} from "../firestore/firestore";
import CardHeader from '@mui/material/CardHeader';
import Grid from '@material-ui/core/Grid';
import Box from "@mui/material/Box";
import UndoSharpIcon from '@mui/icons-material/UndoSharp';
import axios from "axios";
import {AREAS} from "../static/Areas";
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import Loading from './Loading';

const CarDetail = observer(({store}) => {
    let navigate = useNavigate()
    const {uid} = useParams()
    const user = auth.currentUser
    const [car, setCar] = useState(store.getAssetById(uid))

    useEffect(() => {
        setCar(store.getAssetById(uid));
    })

    const openChatOnClick = () => {
        const data = JSON.stringify({
            "title": car.vin,
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

    return (
        car === undefined ? <Loading/> :
        <React.Fragment>
            {
                    <Grid
                        container
                        justifyContent="center"
                        direction="row"
                        alignItems="center"
                    >

                        <Grid item m={5}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={car.img_url}
                                    alt="asset"
                                />
                                <CardHeader
                                    title={car.model}
                                    subheader={` VIN: ${car.vin}`}
                                />
                                <CardContent>
                                    {car.mileage && <Typography variant="p" component="div">
                                        {`Mileage: ${car.mileage} km`}
                                    </Typography>}
                                    {car.fuel && <Typography variant="p" component="div">
                                        {`Fuel: ${car.fuel} L`}
                                    </Typography>}
                                </CardContent>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Button sx={{width: "200px", my: 3, boxShadow: 10}}
                                            onClick={(e) => navigate(`/inbound-check/${uid}`, {state: {areas:AREAS}})}
                                            variant="outlined"
                                    >Inbound Check</Button>
                                    <Button sx={{width: "200px", my: 3, boxShadow: 10}} variant="outlined">Outbound
                                        Check</Button>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Button onClick={() => navigate(-1)} sx={{m: 3, boxShadow: 10}} variant="outlined" startIcon={<UndoSharpIcon/>}>
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
})

export default CarDetail;