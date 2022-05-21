import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Box, Button, Card, CardActions, CardContent, Container, Divider, FormControl, FormGroup, FormHelperText, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


function Signup() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // References for Login Form
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const passwordConfirmationRef = useRef<HTMLInputElement>();

    // Array of Rails error messages
    let errorMessages: string[] = [];

    // Adding errors to state
    const [errors, setErrors] = useState<string[]>([]);

    // Toggle to show / hide Password
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // Boolean representing loading status
    const loading = false;



    // Handles Errors
    useEffect(() => {
        emailRef?.current?.focus();

        // Check for errors
        if (errorMessages.length > 0) {
            // Store errors in state
            setErrors(errorMessages);
            // Reset Error State
            errorMessages = [];
            // dispatch(resetErrorState);
        }
    });



    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Reset Errors
        setErrors([]);

        // Check all fields have been filled out correctly
        if (emailRef?.current === undefined
            || emailRef.current.value === ""
            || passwordRef?.current === undefined
            || passwordRef.current.value === ""
            || passwordConfirmationRef?.current === undefined
            || passwordConfirmationRef.current.value === "") {
                return setErrors(["Please fill out all fields"])
        }

        // Check password and password confirmation input matches
        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setErrors(["Passwords do not match"]);
        }

        // Get Payload ready
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        // Dispatch Login Payload
        // const response = await dispatch(loginUser(payload)) as any;
        const response = ["Oops, something went wrong"];
        console.log(response);

        // Check for errors - Route to Login Page if none
        if (errorMessages.length === 0) {
            navigate("/");
        } else {
            return setErrors(errorMessages);
        }
    }




    // Password Input Component
    const passwordInput = (
        <OutlinedInput id="password" type={showPassword ? 'text' : 'password'} inputRef={passwordRef} endAdornment={
            <InputAdornment position="end">
                <IconButton
                    aria-label="Toggle password visiibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => setShowPassword(!showPassword)}
                    edge="end"
                >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            </InputAdornment>
        } />
    );



    // Password Confirmation Input Component
    const passwordConfirmationInput = (
        <OutlinedInput id="password-confirmation" type={showPassword ? 'text' : 'password'} inputRef={passwordConfirmationRef} endAdornment={
            <InputAdornment position="end">
                <IconButton
                    aria-label="Toggle password visiibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => setShowPassword(!showPassword)}
                    edge="end"
                >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            </InputAdornment>
        } />
    );




    return (
        <section style={{ marginTop: "2em" }}>
            <Container maxWidth="md">
                <Card sx={{ boxShadow: 1, maxWidth: 'md' }}>
                    <CardContent>
                        <Container maxWidth="sm">
                            {/** Errors */}
                            <Typography variant="h2" color="text.primary" gutterBottom>
                                Sign Up
                            </Typography>

                            {/** Errors */}
                            {errors.length > 0 ?
                                <Alert severity="error" aria-live="assertive">
                                    {errors.map((error, index) => {
                                        return <p key={`alert-${index}`}>
                                            {error}
                                        </p>
                                    })}
                                </Alert>
                                : <></>}

                            <form onSubmit={handleSubmit}>
                                {/** Email Input */}
                                <FormGroup row={true} id="email-group" sx={{ marginTop: "1em" }}>
                                    <FormControl fullWidth>
                                        <InputLabel required htmlFor="email" id="email-label">Email Address</InputLabel>
                                        <Input id="email" type="email" inputRef={emailRef} />
                                        <FormHelperText id='email-helper-text'>
                                            We&apos;ll never share your email.
                                        </FormHelperText>
                                    </FormControl>
                                </FormGroup>

                                {/** Password Input */}
                                <FormGroup row={true} id="password-group" sx={{ marginTop: "1em" }}>
                                    <FormControl fullWidth>
                                        <InputLabel required htmlFor="password" id="password-label">Password</InputLabel>
                                        {passwordInput}
                                    </FormControl>
                                </FormGroup>

                                {/** Password Confirmation Input */}
                                <FormGroup row={true} id="password-confirmation-group" sx={{ marginTop: "1em" }}>
                                    <FormControl fullWidth>
                                        <InputLabel required htmlFor="password-confirmation" id="password-confirmation-label">
                                            Password Confirmation
                                        </InputLabel>
                                        {passwordConfirmationInput}
                                    </FormControl>
                                </FormGroup>

                                {/** Register Account Button */}
                                <FormGroup row={true} id="submit-group" sx={{ marginTop: "1em" }}>
                                    <FormControl fullWidth>
                                        <Button
                                            disabled={loading}
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            id="submit-button">Create an Account</Button>
                                    </FormControl>
                                </FormGroup>
                            </form>
                        </Container>
                    </CardContent>

                    <Divider light={false} />
                    <CardActions sx={{ marginTop: "1em", justifyContent: "center" }} disableSpacing>
                        {/** Link to Login Page */}
                        <Box>
                            Already have an account? <Link to='/login'>Login!</Link>
                        </Box>
                    </CardActions>
                </Card>
            </Container>
        </section>
    );
}


export default Signup;