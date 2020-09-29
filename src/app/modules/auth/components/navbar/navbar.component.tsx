import { IBaseProps } from '@extras/interfaces';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import './navbar.component.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            background: 'transparent',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: '10%',
            padding: '0 30px',
            // padding: '0px 0px 0px 0px',
            opacity: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            align: 'right',
        },
        toolBar: {
            margin: 'auto',
            maxWidth: 800,
            width: '100%',
        },
        grow: {
            flexGrow: 1,
        },
    }),
);

export interface INavBarComponentProps extends IBaseProps {
    input?: {};
    output?: {};
}

export const NavBarComponent: React.FC<INavBarComponentProps> = (props: INavBarComponentProps) => {
    const classes = useStyles();
    const [value, setValue] = React.useState<string>('recents');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <header style={{ backgroundColor: 'transparent' }}>
            <AppBar position="static" color="transparent" className={classes.root}>
                <Toolbar>
                    <Link href="#">
                        <img style={{ width: '20%', height: '20%' }} alt="..." src={require('./../../../../../assets/img/brand/argon-react-white.png')} />
                    </Link>
                    <div className={classes.grow} />
                    {/* <Button startIcon={<PeopleIcon htmlColor="white" />} href="/login" color="default">Sign In</Button>
                    <Button startIcon={<VpnKeyIcon htmlColor="white" />} href="/register" color="default">Sign Up</Button> */}
                </Toolbar>
            </AppBar>
        </header>
    );
};