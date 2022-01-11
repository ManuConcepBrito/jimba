import React from 'react';
import Button from "@mui/material/Button";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import {useNavigate} from "react-router-dom";
import {Stack} from "@mui/material";

const NavigationButtons = () => {
    const navigate = useNavigate()
    return (
        <Stack m={2} direction="row" spacing={2} justifyContent="center"
               alignItems="center">
            <Button sx={{boxShadow: 10}} variant="outlined" size="large"
                    startIcon={<UndoSharpIcon/>} onClick={() => navigate(-1)}>
                Back
            </Button>
            <Button sx={{boxShadow: 10}} size="large"
                    variant="contained"
                    onClick={(e) => navigate('/chat')}>Chat</Button>
        </Stack>

    );
}

export default NavigationButtons;