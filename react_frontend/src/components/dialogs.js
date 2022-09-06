import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {DialogContent} from "@mui/material";
import Typography from "@mui/material/Typography";


function ServizioDialog(props) {
    const { onClose, open, service } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open} maxWidth='xs'>
            <DialogTitle textAlign='center'>{service.title}</DialogTitle>
            <DialogContent sx={{
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <img src={service.image} alt='Immagine' style={{ maxWidth: '100%'}}/>
                <Typography variant="subtitle2" mt={2}>
                    {service.description}
                </Typography>
            </DialogContent>
        </Dialog>
    );
}

ServizioDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export {ServizioDialog};
