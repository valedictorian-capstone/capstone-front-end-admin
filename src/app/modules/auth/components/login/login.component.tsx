import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { Route, RouteProps, Redirect, useHistory } from 'react-router-dom';
import './login.component.css';

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
import { useAuthenticationAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { AccountVM, AuthenticationCM, AuthenticationVM } from '@view-models';
import { CoreModule } from '@modules';

export interface DefaultProps {
  changePage: (e: any) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: '10vh',
    // paddingBottom: '10vh',
    height: '100vh',
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
const validation = ({ phone = '', password = '' }) => {
  console.log(phone + '.....' + password);
  console.log(phone && phone.length <= 15 && phone.length > 9
    && password && password.length <= 20 && password.length > 5 ? true : false);
  return (
    phone && phone.length <= 15 && phone.length > 9
      && password && password.length <= 20 && password.length > 5
      ? true : false
  );
};

export const LoginComponent = ({ changePage }: DefaultProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentState, SetCurrentState] = useState(useSelector<RootState>((state) => state.authentication.arr[0] ? state.authentication.arr[0] : {}) as AuthenticationVM);
  const checkLogin = () => {
    alert(currentState.IsLogin);
    dispatch(useAuthenticationAction().checkLogin('true'));
    alert(currentState.IsLogin);
  };
  useEffect(() => {
    document.body.classList.add('bg-default');
  });
  const [formData, setFormData] = useState({ phone: '', password: '' });
  const [enableSubmitButton, setEnableSubmitButton] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    setFormData({ ...formData, [name]: value });
    const enableSubmit = validation(formData);
    setEnableSubmitButton(enableSubmit);
  };
  const onSubmitForm = () => {
    const enableSubmit = validation(formData);
    alert(enableSubmit);
    if (enableSubmit) {
      history.push('/core');
      // const data: AuthenticationCM = {
      //   Phone: formData.phone,
      //   Password: formData.password,
      //   OldPassword: formData.password,
      //   ConfirmedCode: '',
      // };
      // dispatch(useAuthenticationAction().login(data));
    }
    // setFormData({ ...formData, submit: validation(formData) });
  };
  const [show, setShow] = useState(false);
  const handleShowPassword = () => {
    setShow(!show);
  };
  const [values, setValues] = useState({
    phone: '',
    password: '',
    password2: '',
  });
  const handleChangeForm = (name: any) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div >
      <form className={classes.form} noValidate={true}>
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
          onChange={handleChange}
          placeholder={'10-15 number'}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          name="password"
          label="password"
          type={show ? 'text' : 'password'}
          id="password"
          autoComplete="current-password"
          autoFocus={true}
          onChange={handleChange}
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
        <div style={{ visibility: 'hidden', height: '100%' }} >
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth={true}
            id="phone2"
            type="number"
            name="phone2"
            autoComplete="phone"
            autoFocus={true}
          />
        </div>
        <Button
          type="button"
          fullWidth={true}
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={!enableSubmitButton}
          onClick={onSubmitForm}
        >
          Sign In
            </Button>
        <Grid container={true}>
          <Grid item={true} xs={true}>
            <Link href="#" variant="body2" onClick={() => changePage('Forgot Password')}>
              Forgot password?
                </Link>
          </Grid>
          <Grid item={true}>
            <Link href="#" variant="body2" onClick={() => changePage('Sign Up')}>
              {'Sign Up'}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};