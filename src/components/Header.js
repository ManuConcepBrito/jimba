import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@mui/material/Typography";
import LinearProgressWithLabel from './LinearProgressWithLabel'
import Box from "@mui/material/Box";

function Header(props) {
    return (
        <Box mb={5} mt={2}>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                m={2}
            >
                <Grid item>
                    <Typography variant="subtitle2"
                                sx={{fontWeight: 'bold', m: 2}}
                    >
                        {props.header}
                    </Typography>
                </Grid>
            </Grid>
            <LinearProgressWithLabel value={props.progress}/>
            <Typography variant="h5"
                        align="center"
                        sx={{fontWeight: 'bold', mt: 3, mb:1}}
            >
                {props.screenTitle}
            </Typography>
            <Typography variant="body2"
                        align="center"
                        color="grey.600"
            >
                {props.screenDescription}
            </Typography>

        </Box>
    );
}

export default Header;