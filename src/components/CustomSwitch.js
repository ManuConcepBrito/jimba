import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {styled} from "@mui/material/styles";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Switch} from "@material-ui/core";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 40,
    width: 270,
    lineHeight: '40px',
    padding: 8,
}));

function CustomSwitch(props) {
    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
        >
            <Box
                m={2}
            >
                <Item
                    elevation={3}
                >

                    <FormGroup>
                        <FormControlLabel control={<Switch/>} labelPlacement="start"
                                          label={props.title}/>

                    </FormGroup>


                </Item>
            </Box>


        </Grid>

    );
}

export default CustomSwitch;