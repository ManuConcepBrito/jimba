import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {List} from '@mui/material';
import Header from "./Header";
import Button from "@material-ui/core/Button";
import {useNavigate, useParams} from "react-router-dom";
import {observer} from "mobx-react";
import {useState} from "react";
import NavigationButtons from "./NavigationButtons";

const InspectionPart = observer(({areaStore}) => {
    const {areaId, uid} = useParams()
    const [area] = useState(areaStore.setSelectedArea(parseInt(areaId)))
    const [progress] = useState(areaStore.getProgress)
    const {parts, header, screenTitle, screenDescription} = area
    const navigate = useNavigate();


    const handleNext = (part) => {
        navigate(`/proof/${uid}/${areaId}/${part.id}`)
    }

    return (
        <React.Fragment>
            <Box>
                <List
                    subheader={<div/>}
                >
                    <Header header={header}
                            screenTitle={screenTitle}
                            screenDescription={screenDescription}
                            progress={progress}/>
                    {
                        parts.map((part) => (
                            <ListItem key={part.id} component="div">
                                <ListItemButton onClick={(e) => (
                                    handleNext(part)
                                )} disabled={part.isChecked}>
                                    <Button style={{backgroundColor: "white", borderWidth: 2, width: "100%", height: "7.5vh", fontWeight: "bold", fontFamily: "Poppins", color: part.isChecked ? 'red' : 'green'}}
                                            variant="contained"
                                            size="large">{part.name}</Button>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
            <NavigationButtons prior={{route: `/inbound-check/${uid}`}}/>
        </React.Fragment>
    );
})
export default InspectionPart;