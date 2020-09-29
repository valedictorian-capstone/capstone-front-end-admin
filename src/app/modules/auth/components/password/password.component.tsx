import { IBaseProps } from '@extras/interfaces';
import { Button, Grid, IconButton, InputAdornment, Link, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import { PasswordCodeComponent } from './password-code.component';
import './password.component.css';

export interface IPasswordRecoveryComponentProps extends IBaseProps {
  input?: {
    changePage: (e: any) => void,
  };
  output?: {};
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

export const PasswordRecoveryComponent: React.FC<IPasswordRecoveryComponentProps> = ( props: IPasswordRecoveryComponentProps) => {
  const classes = useStyles();
  const changePage = props.input?.changePage;
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const [showCode, setShowCode] = useState<boolean>(false);
  const handleShowCode = () => {
    setShowCode(!showCode);
  };
  const [showNew, setShowNew] = useState<boolean>(false);
  const handleShowNewPassword = () => {
    setShowNew(!showNew);
  };
  return (
    <>
    <PasswordCodeComponent input={{ openModal: true }} />
      <form className={classes.form} noValidate={true}>
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          name="code"
          label="Your Code"
          type={showCode ? 'text' : 'password'}
          id="code"
          autoComplete="current-code"
          autoFocus={true}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle code visibility"
                  onClick={handleShowCode}
                  onMouseDown={handleShowCode}
                >
                  {showCode ? <Visibility /> : <VisibilityOff />}
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
          type={showCode ? 'text' : 'password'}
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
          type={showCode ? 'text' : 'password'}
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
            <Link href="#" variant="body2" onClick={() => props.input?.changePage('Sign In')}>
              {'Sign In'}
            </Link>
          </Grid>
          {/* <Grid item={true}>
            <Link href="#" variant="body2" onClick={() => props.input?.changePage('Sign Up')}>
              {'Sign Up'}
            </Link>
          </Grid> */}
        </Grid>
      </form>
    </>
  );
};