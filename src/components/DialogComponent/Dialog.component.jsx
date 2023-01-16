import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import './Dialog.styles.css';

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6" style={{fontWeight: 'bold'}}>{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);


export const CustomDialog = ({
    isopen,
    handleClose,
    title,
    children,
}) => {
    return (
        <>
            <Dialog onClose={handleClose}  
                open={isopen}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                fullWidth={true}
                className='dialog'
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>{title}</DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} style={{backgroundColor: '#2c2d2e',
        color: 'white'}}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}