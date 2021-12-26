import React, {useState} from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Box from "@mui/material/Box";
import {CardActions} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

function CameraWithPreview() {
    const [dataUri, setDataUri] = useState('');
    const [clicked, setClicked] = useState(false)

    function handleTakePhotoAnimationDone(dataUri) {
        console.log('takePhoto');
        setDataUri(dataUri);
    }

    const isFullscreen = false;
    return (
        <div>
            {
                (!clicked)
                    ? (<Card sx={{width: "20vh", height: "20vh"}}>
                        <CardActions>
                            <CardMedia
                                component="img"
                                image="https://media.istockphoto.com/vectors/title-camera-icon-vector-flat-style-isolated-on-grey-background-for-vector-id1127941045?k=20&m=1127941045&s=170667a&w=0&h=aHd3SSYJiPhnuSchMoVF-ygkkQfjC7DmQVwUi1r1Llk="
                                onClick={() => setClicked(true)}
                            />
                        </CardActions>
                    </Card>)
                    : <>
                        {
                            (dataUri)
                                ? (<Card sx={{width: "20vh"}}>
                                    <Box>
                                        <CardMedia
                                            component="img"
                                            image={dataUri}
                                            alt="Live from space album cover"
                                            onClick={() => setDataUri('')}
                                        />
                                    </Box>
                                </Card>)
                                : <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                                          isFullscreen={isFullscreen}
                                          isSilentMode={true}
                                          imageCompression={0}
                                          isMaxResolution={true}
                                />
                        }

                    </>
            }
        </div>
    );
}

export default CameraWithPreview;