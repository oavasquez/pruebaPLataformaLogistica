import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";

import AutoComplete from '../Autocomplete/Autocomplete'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {

        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: theme.spacing.unit * 60,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,

    },
});

class ModalFormulario extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, open, close } = this.props;


        return (
            <div>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={close}
                >
                    <div className={classes.paper}>

                    {this.props.children}
                       

                    </div>
                </Modal>
            </div>
        );
    }
}

ModalFormulario.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(ModalFormulario);