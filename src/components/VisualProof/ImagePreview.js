import React from 'react';
import PropTypes from 'prop-types';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {IconButton} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";


export const ImagePreview = ({dataUri, isFullscreen}) => {

    return (
        <Card sx={{display: 'flex'}}>
            <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                {
                    (dataUri)
                        ? <IconButton aria-label="previous">
                            {<CameraAltIcon/>}
                        </IconButton>
                        : <CardMedia
                            component="img"
                            sx={{width: 151}}
                            image={dataUri}
                            alt="Live from space album cover"
                        />
                }
            </Box>
        </Card>
    );
};

ImagePreview.propTypes = {
    dataUri: PropTypes.string,
    isFullscreen: PropTypes.bool
};

export default ImagePreview;