import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { RouteProps } from 'react-router-dom';
import './register.component.css';

import { LOADING_TYPE } from '@stores/types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Box, Button, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, IconButton, InputAdornment, Link, TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AccountCircle, Face, Fingerprint, Visibility, VisibilityOff } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { NavigateComponent } from '../navigate/navigate.component';
import { NavBarComponent } from '../navbar/navbar.component';
import { Container } from '@material-ui/core';
import { FooterComponent } from '../footer/footer.component';

interface DefaultProps {
  changePage: (e: any) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: '10vh',
    // paddingBottom: '10vh',
    height: '80vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '60%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        VAT3 CRM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const RegisterComponent = ({ changePage }: DefaultProps) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const handleShowPassword = () => {
    setShow(!show);
  };
  return (
    <div >
      {/* <NavBarComponent />
      <NavigateComponent />
      <Container maxWidth="lg">
        <Grid container={true} component="main" className={classes.root}>
          <CssBaseline />
          <Grid item={true} xs={false} sm={4} md={7} className={classes.image} />
          <Grid item={true} xs={12} sm={8} md={5} component={Paper} elevation={6} square={true}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
          </Typography> */}
      <form className={classes.form} noValidate={true}>
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="email"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="phone"
          label="Phone Number"
          type="number"
          name="phone"
          autoComplete="phone"
          autoFocus={true}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          name="password"
          label="Password"
          type={show ? 'text' : 'password'}
          id="Password"
          autoComplete="current-password"
          autoFocus={true}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  onMouseDown={handleShowPassword}
                >
                  {show ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
        <Button
          type="submit"
          fullWidth={true}
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
            </Button>
        <Grid container={true}>
          <Grid item={true} xs={true}>
            <Link href="#" variant="body2" onClick={() => changePage('Forgot Password')}>
              Forgot password?
                </Link>
          </Grid>
          <Grid item={true}>
            <Link href="#" variant="body2" onClick={() => changePage('Sign In')}>
              {'Sign In'}
            </Link>
          </Grid>
        </Grid>
      </form>
      {/* </div>
          </Grid>
        </Grid>
      </Container>
      <FooterComponent /> */}
    </div>
  );
};