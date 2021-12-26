import React from 'react';
import Grid from "@material-ui/core/Grid";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import {TextField} from "@mui/material";
import CameraWithPreview from "./CameraWithPreview";

function VisualProof(props) {
    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={5}
        >
            <Grid item xs={12} m={12}>
                <CardHeader
                    title="Visual Proof of Damage"
                    subheader="Please describe the damage you have identified. Additionally, please take a picture of the damage."
                />
            </Grid>

            <Grid item xs={10} m={10}>
                <TextField
                    id="outlined-required"
                    label="Description"
                    multiline
                    rows={2}
                    maxRows={4}
                />

            </Grid>
            <Grid container direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={1} p={1}>
                <Grid item>
                    <CameraWithPreview/>
                </Grid>
                <Grid item>
                    <CameraWithPreview/>
                </Grid>
            </Grid>

            <Grid item xs={12} m={12}>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Button sx={{m: 3, boxShadow: 10}} variant="outlined" startIcon={<UndoSharpIcon/>}>
                        Back
                    </Button>
                    <Button color="primary" sx={{m: 3, boxShadow: 10}}
                            variant="contained">Next</Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default VisualProof;