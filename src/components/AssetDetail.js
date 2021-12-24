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
import Loading from "./Loading"
import UndoSharpIcon from '@mui/icons-material/UndoSharp';

export default function AssetDetail() {
    const [loading, setLoading] = useState(true)
    const [asset, setAsset] = useState([])
    const {uid} = useParams()
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
                <Button sx={{width: "200px", my: 3, boxShadow: 10}} variant="outlined">Inbound
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
                <Button color="primary" sx={{m: 3, boxShadow: 10}} variant="contained">Chat</Button>
                </Box>
                </Card>
                </Grid>
                </Grid>

            }

        </React.Fragment>

    )
}