import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Component extends React.Component {
  render() {
    const { classes, employee, clickAction } = this.props;

    return (
      <ListItem button className={classes.listItem} onClick={() => clickAction(employee)}>
        <ListItemText primary={`${employee.firstName} ${employee.lastName}`} />
      </ListItem>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  clickAction: PropTypes.func,
  employee: PropTypes.object,
};