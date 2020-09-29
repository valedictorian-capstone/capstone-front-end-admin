import { IBaseProps } from '@extras/interfaces';
import { Button, Grid, IconButton, InputAdornment, Link, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './login.component.css';

export interface ILoginComponentProps extends IBaseProps {
  input?: {
    changePage: (e: any) => void,
  };
  output?: {};
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

const validation = ({ phone = '', password = '' }) => {
  return (
    phone && phone.length <= 15 && phone.length >= 9
      && password && password.length <= 20 && password.length > 5
      ? true : false
  );
};

export const LoginComponent: React.FC<ILoginComponentProps> = (props: ILoginComponentProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // const [currentState, SetCurrentState] = useState(useSelector<RootState>((state) => state.authentication.item ? state.authentication.item : {}) as AuthenticationVM);
  // const checkLogin = () => {
  //   alert(currentState.IsLogin);
  //   dispatch(useAuthenticationAction().checkLogin('true'));
  //   alert(currentState.IsLogin);
  // };
  useEffect(() => {
    document.body.classList.add('bg-default');
  });
  const [formData, setFormData] = useState<{}>({ phone: '', password: '' });
  const [enableSubmitButton, setEnableSubmitButton] = useState<boolean>(false);
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
    if (enableSubmit) {
      history.push('core');
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
  const [show, setShow] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShow(!show);
  };
  const [values, setValues] = useState<{}>({
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
            <Link href="#" variant="body2" onClick={() => props.input?.changePage('Forgot Password')}>
              Forgot password?
                </Link>
          </Grid>
          <Grid item={true}>
            <Link href="#" variant="body2" onClick={() => props.input?.changePage('Sign Up')}>
              {'Sign Up'}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};