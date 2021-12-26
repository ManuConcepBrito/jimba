import React from 'react';
import Grid from "@material-ui/core/Grid";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import {TextField} from "@mui/material";
import CameraWithPreview from "./CameraWithPreview";
import Header from '../Header'

function VisualProof(props) {
    return (
        <>
            <Header header="Inbound Check"
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
                    maxRows={4}
                />
                <Grid item>
                    <CameraWithPreview/>
                </Grid>
                <Grid item>
                    <CameraWithPreview/>
                </Grid>

                <Grid item xs={12} m={12}>
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Button sx={{m: 3, boxShadow: 10}} variant="outlined" size="large" startIcon={<UndoSharpIcon/>}>
                            Back
                        </Button>
                        <Button color="primary" size="large" sx={{m: 3, boxShadow: 10}}
                                variant="contained">Next</Button>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </>

    );
}

export default VisualProof;