import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TodoItem from '../../elements/TodoItem';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import { IconButton } from '@material-ui/core';

export default class Component extends React.Component {
  state = {
    text: ''
  }

  addTodos = e => {
    e.preventDefault();

    this.props.actions.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  removeTodo = todo => {
    this.props.actions.removeTodo(todo);
  }

  undoAction = () => {
    this.props.actions.undo();
  }

  redoAction = () => {
    this.props.actions.redo();
  }

  render() {
    const { classes, items, canUndo, canRedo } = this.props;
    
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.myGrid}
      >
        <Card className={classes.container}>
          <form onSubmit={this.addTodos} className={classes.form}>
            <div>
              <TextField
                id="input"
                label="What must be done?"
                className={classes.textField}
                value={this.state.text}
                onInput={e => this.setState({ text: e.target.value })}
                margin="normal"
              />
              <IconButton type="button" onClick={() => this.undoAction()} disabled={!canUndo}>
                <UndoIcon />
              </IconButton>
              <IconButton type="button" onClick={() => this.redoAction()} disabled={!canRedo}>
                <RedoIcon />
              </IconButton>
            </div>
          </form>
          <List>
            {items.map((todo, i) => (
              <TodoItem key={i} todo={todo} remove={this.removeTodo} />
            ))}
          </List>
        </Card>
      </Grid>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  items: PropTypes.array,
  actions: PropTypes.object,
  canRedo: PropTypes.bool,
  canUndo: PropTypes.bool
};
