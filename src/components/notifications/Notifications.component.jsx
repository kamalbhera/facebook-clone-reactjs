import React from 'react';

import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const Notifications = (props) => {
    const { notify, setNotify } = props;

    return (
        <Snackbar
            open={notify.isOpen}
            autoHideDuration={10}
            anchorOrigin={{vertical: 'top' , horizontal: 'center'}}
        >
            <Alert severity={notify.type}>
                {notify.message}
            </Alert>
        </Snackbar>
    );
}

export default Notifications;