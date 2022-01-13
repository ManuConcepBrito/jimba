import React from 'react';
import Button from "@mui/material/Button";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import {useNavigate} from "react-router-dom";
import {Box, Stack} from "@mui/material";

const NavigationButtons = ({prior}) => {
    const navigate = useNavigate()
    return (
        <Stack m={2} direction="row" spacing={2} justifyContent="center"
               alignItems="center">
            <Button sx={{boxShadow: 2}} variant="outlined"
                    startIcon={<UndoSharpIcon/>} onClick={() => navigate(prior.route)}>
                Back
            </Button>
            <Box sx={{width: '5%'}}></Box>
            <Button sx={{boxShadow: 2, color: "white", fontWeight: "bold", fontFamily: "Poppins", backgroundColor: "primary"}}
                    variant="contained"
                    onClick={(e) => navigate('/chat')}>                                    Chat            </Button>
        </Stack>
    );
}

export default NavigationButtons;