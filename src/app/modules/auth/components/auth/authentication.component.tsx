import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { RouteProps } from 'react-router-dom';
import './authentication.component.css';

import { LOADING_TYPE } from '@stores/types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Box, Button, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, Tab, Tabs, TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AccountCircle, Face, Fingerprint, Visibility, VisibilityOff } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import PeopleIcon from '@material-ui/icons/People';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { NavigateComponent } from '../navigate/navigate.component';
import { NavBarComponent } from '../navbar/navbar.component';
import { Container } from '@material-ui/core';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';
import { PasswordRecoveryComponent } from '../password/password.component';
import { RegisterComponent } from '../register/register.component';
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
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

export const AuthenticationComponent = (props: Readonly<RouteProps>) => {
  const classes = useStyles();
  useEffect(() => {
    document.body.classList.add('bg-default');
  });
  const [page, SetPage] = useState('login');
  const [value, setValue] = React.useState(0);
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
                  : page === 'Sign Up' ? <PeopleIcon />
                    : <VpnKeyIcon />}
              </Avatar>
              <Typography component="h1" variant="h5">
                {page === 'Forgot Password' ? 'Change Password'
                  : page === 'Sign Up' ? 'Sign Up'
                    : 'Sign In'}
              </Typography>
              {page === 'Forgot Password' ? <PasswordRecoveryComponent changePage={SetPage} />
                : page === 'Sign Up' ? <RegisterComponent changePage={SetPage} />
                  : <LoginComponent changePage={SetPage} />}
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