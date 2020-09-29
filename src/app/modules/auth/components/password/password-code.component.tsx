import { IBaseProps } from '@extras/interfaces';
import { Button, TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useEffect, useState } from 'react';
import './password.component.css';

export interface IPasswordCodeComponentProps extends IBaseProps {
    input?: {
        openModal: boolean,
    };
    output?: {};
}

export const PasswordCodeComponent: React.FC<IPasswordCodeComponentProps> = (props: IPasswordCodeComponentProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        return setOpen(props.input?.openModal ?? false);
    }, []);

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{'Recover Pasword'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {'Please enter your email to receive the token used for changing password'}
                    </DialogContentText>
                    <TextField
                        autoFocus={true}
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth={true}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Get Token
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};