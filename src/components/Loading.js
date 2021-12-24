import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
    return (
        <Box display="flex"
             flexDirection="column"
             alignItems="center"
             justifyContent="center"
             minHeight="50vh"
        >

            <CircularProgress/>
        </Box>
    );
}