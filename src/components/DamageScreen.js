import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {List} from '@mui/material';
import Header from './Header'
import {AREAS} from "../static/Areas";
import Button from "@material-ui/core/Button";
import {useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";


export default function DamageScreen(props) {
    let location = useLocation()
    let navigate = useNavigate()
    const {areas} = location.state
    const {uid} = useParams()
    const [state, setState] = useState({
        // indicate if the check has been done already
        areas_done: {
            'exterior': false,
            'interior': false,
            'windows': false,
            'tires': false,
            'technicalDefect': false,
            'spareParts': false
        }

    })
    // Revision part is finished, set to true
    const handleChange = input => e => {
        setState({[input]: true})
    }
    const {areas_done} = state
    return (
        <React.Fragment>
            <Box sx={{width: '100%', height: '100%'}}>
                <Header header="Inbound Check"
                        screenTitle="Damage Overview"
                        screenDescription="Please click on the different inbound check steps to complete them"
                        progress={0}/>
                <List
                    sx={{height: "100vh", width: "100vw"}}
                    subheader={<div/>}
                >
                    {
                        areas.map((area) => (
                            <ListItem key={area.id} component="div">
                                <ListItemButton>
                                    <Button
                                        onClick={(e) => navigate(`/detail/${area.route}/${uid}`, {state: {area: area}})}
                                        style={{width: "60vw", height: "7.5vh"}} variant="outlined" size="large"
                                        disabled={areas_done[`${area.name}`]}>{area.name}</Button>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }


                </List>
            </Box>
        </React.Fragment>
    );
}