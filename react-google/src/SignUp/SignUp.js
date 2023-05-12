import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import { CheckBox, LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";



function SignUp() {
    const [profile, setProfile] = useState(null);
    const [user, setUser] = useState(null);

    const theme = createTheme();

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="user-name"
                                        name="userName"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="UserName"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="cfpassword"
                                        label="ConFirm Password"
                                        type="password"
                                        id="cfpassword"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}>Sign Up
                            </Button>
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
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default SignUp;