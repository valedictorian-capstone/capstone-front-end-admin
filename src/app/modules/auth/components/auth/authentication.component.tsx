import { IBaseProps } from '@extras/interfaces';
import { Avatar, Box, Container, CssBaseline, Grid, Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import React, { useEffect, useState } from 'react';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';
import { NavBarComponent } from '../navbar/navbar.component';
import { NavigateComponent } from '../navigate/navigate.component';
import { PasswordCodeComponent } from '../password/password-code.component';
import { PasswordRecoveryComponent } from '../password/password.component';
import './authentication.component.css';
const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: '10vh',
    // paddingBottom: '10vh',
    height: '100%',
    alignItems: 'stretch',
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

const Copyright = () => {
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
};

export interface IAuthenticationComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const AuthenticationComponent: React.FC<IAuthenticationComponentProps> = (props: IAuthenticationComponentProps) => {
  const classes = useStyles();
  useEffect(() => {
    document.body.classList.add('bg-default');
  });
  const [page, SetPage] = useState<string>('login');
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div >
      <NavBarComponent />
      <NavigateComponent />
      <Container maxWidth="lg">
        <Grid container={true} component="main" className={classes.root}>
          <CssBaseline />
          <Grid item={true} xs={12} sm={4} md={7} className={classes.image} />
          <Grid item={true} xs={12} sm={8} md={5} component={Paper} elevation={6} square={true}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                {page === 'Forgot Password' ? <LockOutlinedIcon />
                  : <VpnKeyIcon />}
              </Avatar>
              <Typography component="h1" variant="h5">
                {page === 'Forgot Password' ? 'Forgot Password'
                  : 'Sign In'}
              </Typography>
              {page === 'Forgot Password' ?
                <PasswordRecoveryComponent input={{ changePage: SetPage }} />
                : <LoginComponent input={{ changePage: SetPage }} />}
              <Box mt={5}>
                <Copyright />
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
      <FooterComponent />
    </div >
  );
};