import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {List} from '@mui/material';
import Header from './Header'
import Button from "@material-ui/core/Button";
import {observer} from 'mobx-react';
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import NavigationButtons from "./NavigationButtons";

const DamageScreen = observer(({areaStore}) => {
    let navigate = useNavigate()
    const [areas] = useState(areaStore.areasList)
    const [progress] = useState(areaStore.getProgress)
    const {uid} = useParams()
    const handleSelectArea = (e, area) => {
        navigate(`/detail/${uid}/${area.id}`)
    }
    return (
        <React.Fragment>
            <Box>
                <Header header="Inbound Check"
                        screenTitle="Damage Overview"
                        screenDescription="Please click on the different inbound check steps to complete them"
                        progress={progress}/>
                <List
                    subheader={<div/>}
                >
                    {
                        areas.map((area) => (
                            <ListItem key={area.id} component="div">
                                <ListItemButton>
                                    <Button
                                        onClick={(e) => handleSelectArea(e, area)}
                                        style={{width: "60vw", height: "7.5vh"}} variant="outlined" size="large"
                                        id={area.id}
                                    >{area.name}</Button>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }


                </List>
            </Box>
            <NavigationButtons/>
        </React.Fragment>
    );
})

export default DamageScreen;