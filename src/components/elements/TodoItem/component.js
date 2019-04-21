import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

export default class Component extends React.Component {
  render() {
    const { classes, todo, remove } = this.props;

    return (
      <ListItem dense className={classes.listItem}>
        <ListItemText primary={todo.text} />
        <ListItemSecondaryAction>
          <IconButton onClick={() => remove(todo)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  todo: PropTypes.object,
  remove: PropTypes.func
};