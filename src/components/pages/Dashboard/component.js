import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import AdminBase from '../../layouts/AdminBase';

export default class Component extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <AdminBase>
        <div className={classes.root}>
          <Dialog open=
            {open} onClose={this.handleClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Typography type="display1" gutterBottom>
            Codebase Frontend SSR
          </Typography>
          <Typography type="subheading" gutterBottom>
            Hello World!
          </Typography>
          <Button variant="raised" color="primary" onClick={this.handleClick}>
            Super Secret Password
          </Button>
        </div>
      </AdminBase>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
};
