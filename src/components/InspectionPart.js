import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {List} from '@mui/material';
import Header from "./Header";
import Button from "@material-ui/core/Button";
import {useNavigate, useParams, useLocation} from "react-router-dom";
import {AREAS} from "../static/Areas";

export default function InspectionPart(props) {
    let location = useLocation()
    const {area} = location.state
    const {parts, route, header, screenTitle, screenDescription} = area
    const navigate = useNavigate();
    const {uid} = useParams()

    return (
        <React.Fragment>
            <Box sx={{width: '100%', height: '100%'}}>
                <List
                    sx={{height: "100vh", width: "100vw"}}
                    subheader={<div/>}
                >
                    <Header header={header}
                            screenTitle={screenTitle}
                            screenDescription={screenDescription}
                            progress={0}/>
                    {
                        parts.map((part) => (
                            <ListItem key={part.id} component="div">
                                {/* Styling not rendering correctly, that's why use window.location.href */}
                                <ListItemButton onClick={(e) => (
                                    navigate(`/proof/${uid}?part=${part.name}&id=${part.id}`)
                                )}>
                                    <Button style={{width: "60vw", height: "7.5vh"}} variant="outlined"
                                            size="large">{part.name}</Button>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </React.Fragment>
    );
}