import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import { useState } from "react";
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControl, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { CheckBox, Copyright, LockOutlined } from "@mui/icons-material";
import Paper from '@mui/material/Paper';


function LoginForm() {
    const [profile, setProfile] = useState(null);
    const [user, setUser] = useState(null);

    const theme = createTheme();

    return (
        <div>
            <div id="Sign">
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(https://source.unsplash.com/random)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                        </Grid>
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlined />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <Box component="form" sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password" />

                                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />

                                    <Button type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}>Sign In</Button>
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
                                    {/* <Copyright sx={{ mt: 5 }} /> */}
                                    <div id="signInGoogle">

                                        {!user ? (
                                            <LoginSocialGoogle
                                                client_id={
                                                    "612184895032-e81nv6p9e7iqsa75hq6671bc5rqvvbhs.apps.googleusercontent.com"
                                                }
                                                scope="openid profile email"
                                                discoveryDocs="claims_supported"
                                                access_type="offline"
                                                onResolve={({ provider, data }) => {
                                                    console.log(provider, data);
                                                    setUser(data);
                                                }}
                                                onReject={(err => {
                                                    console.log(err);
                                                })}
                                            >
                                                <GoogleLoginButton />
                                            </LoginSocialGoogle>
                                        ) : ''}
                                        {user ? (
                                            <div>
                                                <h1>{user.name}</h1>
                                                <img src={user.picture} />
                                            </div>
                                        ) : ''}
                                    </div>

                                    <div id="signInFacebook">
                                        {!profile ? (
                                            <LoginSocialFacebook
                                                appId="136669836038584"
                                                onResolve={(response) => {
                                                    console.log(response);
                                                    setProfile(response.data);
                                                }}
                                                onReject={(error) => {
                                                    console.log(error);
                                                }}
                                            >
                                                <FacebookLoginButton />
                                            </LoginSocialFacebook>
                                        ) : ''}
                                        {profile ? (
                                            <div>
                                                <h1>{profile.name}</h1>
                                                <img src={profile.picture.data.url} />
                                            </div>
                                        ) : ''}

                                    </div>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>

        </div >
    );
}

export default LoginForm;
