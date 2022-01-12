import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {Button, Container} from '@mui/material';
import {useState} from "react";
import {Alert} from "@mui/material";


const theme = createTheme();

export default function SignIn() {

    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const {login} = useAuth();
    const location = useLocation()
    let {from} = location.state || {}

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        const email = data.get('email')
        const password = data.get('password')
        try {
            await login(email, password)
            if (!from || from === '/sign-in') {
                from = '/car-list'
            }
            navigate(from)
        } catch (e) {
            setError('Email or Password is wrong')
            console.log(e)
        }

    };

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img style={{flex: 1, width: 400, height: 400, marginBottom: 150}} alt="Alt"
                             src="https://firebasestorage.googleapis.com/v0/b/jimba-final.appspot.com/o/logov1.png?alt=media&token=d3e84f93-5449-48a7-9f90-7a6dd460fb41"/>

                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        {error && <Alert severity="error"> {error}</Alert>}
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </React.Fragment>
    );
}