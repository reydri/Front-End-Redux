import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TodoItem from '../../elements/TodoItem';

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
  render() {
    const { classes, items } = this.props;

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
  actions: PropTypes.object
};
