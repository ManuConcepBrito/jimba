import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {List} from '@mui/material';
import Header from './Header'
import Button from "@material-ui/core/Button";
import {useLocation, useNavigate, useParams} from "react-router-dom";

export default function DamageScreen(props) {
    let location = useLocation()
    let navigate = useNavigate()
    const {areas} = location.state
    const {uid} = useParams()
    // // Revision part is finished, set to true
    // const handleChange = input => e => {
    //     setState({[input]: true})
    // }
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
                                        >{area.name}</Button>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }


                </List>
            </Box>
        </React.Fragment>
    );
}