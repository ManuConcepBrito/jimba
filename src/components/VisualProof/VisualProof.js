import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import {TextField} from "@mui/material";
import CameraWithPreview from "./CameraWithPreview";
import Header from '../Header'


function VisualProof(props) {
    const search = window.location.search; // returns the URL query String
    const params = new URLSearchParams(search);
    const partName = params.get('part');
    const partId = params.get('id');
    const screenTitle = props.screenTitle || 'Inbound Check'

    const [state, setState] = useState({
        picture_1: '',
        picture_2: '',
        description: ''
    });

    const {picture_1, picture_2} = state

    function handleChange(name, value) {
        setState({...state, [name]: value})
    }
    function handleSubmit() {

    }

    return (
        <>
            <Header header={`${screenTitle}: ` + partName}
                    screenTitle="Visual Proof of Damage"
                    screenDescription="Please describe the damage you have identified. Additionally, please take a picture of the damage"
                    progress={50}
            />
            <Box
                py={5}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={5}
                >
                    <TextField
                        id="outlined-required"
                        label="Description"
                        multiline
                        rows={2}
                        onChange={(e) => handleChange('description', e.target.value)}
                    />
                    <Grid item>
                        <CameraWithPreview name="picture_1" dataUri={picture_1} handleChange={handleChange}/>
                    </Grid>
                    <Grid item>
                        <CameraWithPreview name="picture_2" dataUri={picture_2} handleChange={handleChange}/>
                    </Grid>

                    <Grid item xs={12} m={12}>
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Button sx={{m: 3, boxShadow: 10}} variant="outlined" size="large"
                                    startIcon={<UndoSharpIcon/>}>
                                Back
                            </Button>
                            <Button sx={{m: 3, boxShadow: 10}} size="large"
                                    variant="contained" onClick={handleSubmit}>Next</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>

    );
}

export default VisualProof;