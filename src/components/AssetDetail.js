import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {collection, onSnapshot, where, query, getDoc, doc} from "firebase/firestore";
import {db} from "../firestore/firestore";
import CardHeader from '@mui/material/CardHeader';
import Grid from '@material-ui/core/Grid';
import Box from "@mui/material/Box";
import {ButtonGroup} from "@mui/material";

export default function AssetDetail() {
    const [asset, setAsset] = useState([])
    const {uid} = useParams()
    useEffect(() => {
        const assetRef = doc(db, "cars", uid)
        // const q = query(collection(db, 'cars'), where('license_plate', '==', "DSF6758"))
        const getAsset = async () => {
            try {
                const data = await getDoc(assetRef)
                setAsset(data.data())
            } catch (error) {
                console.log(error)
            }
        }
        getAsset()
    }, [asset])
    return (

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
                        <ButtonGroup
                        orientation="vertical"
                        color="success"
                        aria-label="vertical contained button group"
                        sx={{width: '80%'}}
                    >
                        <Button sx={{my: 3, boxShadow:10}} variant="contained">Inbound Check</Button>
                        <Button sx={{my: 3, boxShadow:10}} variant="contained">Outbound Check</Button>
                    </ButtonGroup>
                    </Box>
                </Card>
            </Grid>
        </Grid>


    )
}