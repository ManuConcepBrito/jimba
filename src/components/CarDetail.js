import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate, useParams} from "react-router-dom";
import CardHeader from '@mui/material/CardHeader';
import Grid from '@material-ui/core/Grid';
import {AREAS} from "../static/Areas";
import {observer} from 'mobx-react';
import {useEffect} from 'react';
import Loading from './Loading';
import NavigationButtons from "./NavigationButtons";
import {useAuth} from "../context/AuthContext";
import {getAPIConfig, getOrCreateChatByTitle} from "../api/chatengine_api";
import {Stack} from "@mui/material";

const CarDetail = observer(({store}) => {
    let navigate = useNavigate()
    const {uid} = useParams()
    const {currentUser} = useAuth()
    // const [car, setCar] = useState(store.getAssetById(uid))
    const car = store.getAssetById(uid)

    useEffect(() => {
        // car is at first undefined
        if (car !== undefined) {
            // // create chat automatically first time you visit an asset
            let chatAPIConfig = getAPIConfig(currentUser,
                `https://api.chatengine.io/chats/`,
                'get')
            getOrCreateChatByTitle(car.vin, chatAPIConfig)
        }


    }, [car])

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
                            <Card sx={{borderRadius: 0, boxShadow: 0}}>
                                <CardMedia
                                    component="img"
                                    image={car.img_url}
                                    alt="asset"
                                />
                                <CardHeader
                                    title={car.model}
                                    subheader={` VIN: ${car.vin}`}
                                />
                                <CardContent sx={{fontWeight: "bold"}}>
                                    {car.mileage && <Typography variant="p" component="div">
                                        {`Mileage: ${car.mileage} km`}
                                    </Typography>}
                                    {car.fuel && <Typography variant="p" component="div">
                                        {`Fuel: ${car.fuel} L`}
                                    </Typography>}
                                </CardContent>

                                <Stack paddingBottom={10} paddingTop={10} mb={8} mt={2} spacing={4} justifyContent="center"
                                       alignItems="center">
                                    <Button sx={{width: "200px", backgroundColor: "white"}}
                                            onClick={(e) => navigate(`/inbound-check/${uid}`, {state: {areas: AREAS}})}
                                            variant="contained"
                                    >Inbound Check</Button>
                                    <Button sx={{width: "200px", boxShadow: 2}} variant="outlined">Maintenance</Button>
                                    <Button sx={{width: "200px", boxShadow: 2}} variant="outlined">Outbound
                                        Check</Button>
                                </Stack>
                                <NavigationButtons prior={{route: `/car-list`}}/>
                            </Card>
                        </Grid>
                    </Grid>

                }

            </React.Fragment>
    )
})

export default CarDetail;