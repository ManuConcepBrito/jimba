import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {List} from '@mui/material';
import Header from "./Header";
import Button from "@material-ui/core/Button";
import {useNavigate, useParams, useLocation} from "react-router-dom";
import {observer} from "mobx-react";
import {useState} from "react";

const InspectionPart = observer(({areaStore}) => {
    let location = useLocation()
    const {areaId} = location.state
    const [area, setArea] = useState(areaStore.setSelectedArea(areaId))
    const {parts, route, header, screenTitle, screenDescription} = area
    const navigate = useNavigate();
    const {uid} = useParams()

    const handleNext = (part) => {
        const selectedPart = areaStore.setSelectedPart(part.id)
        console.log(selectedPart)
        navigate(`/proof/${uid}`, {state: {areaId: area.id, partId: part.id}})
    }

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
                                <ListItemButton onClick={(e) => (
                                    handleNext(part)
                                )} disabled={part.isChecked}>
                                    <Button style={{width: "60vw", height: "7.5vh"}}
                                            variant="outlined"
                                            size="large">{part.name}</Button>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </React.Fragment>
    );
})
export default InspectionPart;