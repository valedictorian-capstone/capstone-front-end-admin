import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { RouteProps } from 'react-router-dom';
import './password.component.css';

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

export interface DefaultProps {
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

export const PasswordRecoveryComponent = ({ changePage }: DefaultProps) => {
  const classes = useStyles();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const [showOld, setShowOld] = useState(false);
  const handleShowOldPassword = () => {
    setShowOld(!showOld);
  };
  const [showNew, setShowNew] = useState(false);
  const handleShowNewPassword = () => {
    setShowNew(!showNew);
  };
  return (
    <>
      <form className={classes.form} noValidate={true}>
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          name="oldPassword"
          label="Old Password"
          type={showOld ? 'text' : 'password'}
          id="oldPassword"
          autoComplete="current-password"
          autoFocus={true}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowOldPassword}
                  onMouseDown={handleShowOldPassword}
                >
                  {showOld ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          name="newPassword"
          label="New Password"
          type={showOld ? 'text' : 'password'}
          id="newPassword"
          autoComplete="new-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowNewPassword}
                  onMouseDown={handleShowNewPassword}
                >
                  {showNew ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          name="newPasswordAgain"
          label="New Password Again"
          type={showOld ? 'text' : 'password'}
          id="newPasswordAgain"
          autoComplete="new-password-again"
        // InputProps={{
        //   endAdornment: (
        //     <InputAdornment position="end" >
        //       <IconButton
        //         aria-label="toggle password visibility"
        //         onClick={handleShowNewPassword}
        //         onMouseDown={handleShowNewPassword}
        //       >
        //         {showNew ? <Visibility /> : <VisibilityOff />}
        //       </IconButton>
        //     </InputAdornment>
        //   ),
        // }}
        />
        <Button
          type="submit"
          fullWidth={true}
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Change Password
            </Button>
        <Grid container={true}>
          <Grid item={true} xs={true}>
            <Link href="#" variant="body2" onClick={() => changePage('Sign In')}>
              {'Sign In'}
            </Link>
          </Grid>
          <Grid item={true}>
            <Link href="#" variant="body2" onClick={() => changePage('Sign Up')}>
              {'Sign Up'}
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};