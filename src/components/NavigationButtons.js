import React from 'react';
import Button from "@mui/material/Button";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import {useNavigate} from "react-router-dom";
import {Stack} from "@mui/material";

const NavigationButtons = ({prior}) => {
    const navigate = useNavigate()
    return (
        <Stack m={2} direction="row" spacing={2} justifyContent="center"
               alignItems="center">
            <Button sx={{boxShadow: 10}} variant="outlined" size="large"
                    startIcon={<UndoSharpIcon/>} onClick={() => navigate(prior.route)}>
                Back
            </Button>
            <Button sx={{boxShadow: 10, color: "white", fontWeight: "bold", fontFamily: "Poppins", backgroundColor: "primary"}} size="large"
                    variant="contained"
                    onClick={(e) => navigate('/chat')}>Chat</Button>
        </Stack>
    );
}

export default NavigationButtons;