import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { List, Typography, CardContent, CardHeader } from '@material-ui/core';
import EmployeeItem from '../../elements/EmployeeItem';

export default class Component extends React.Component {
  state = {
    employee: null
  }

  componentWillMount() {
    this.props.actions.fetchEmployee();
  }

  _handleClickEmployee = employee => {
    this.setState({
      employee
    });
  };

  _renderProfileEmployee() {
    const { classes } = this.props;
    const { employee } = this.state;

    return (
      <div className={classes.profile}>
        {employee ?
          (<div>
            <Typography className={classes.title} gutterBottom>
              {`${employee.firstName} ${employee.lastName}`}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {employee.jobTitleName}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {employee.emailAddress}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {employee.phoneNumber}
            </Typography>
          </div>) :
          (<Typography className={classes.title} color="textSecondary" gutterBottom>Select employee</Typography>)}
      </div>
    );
  }

  render() {
    const { classes, employees } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.myGrid}
      >
        <Card className={classes.container}>
          <CardHeader title="Employee" />
          <CardContent>
            <Grid container spacing={16}>
              <Grid item>
                <List className={classes.listEmployee}>
                  {employees.map((employee, i) => (
                    <EmployeeItem
                      key={i}
                      employee={employee}
                      clickAction={this._handleClickEmployee}
                    />
                  ))}
                </List>
              </Grid>
              <Grid item>
                {this._renderProfileEmployee()}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  employees: PropTypes.array,
  actions: PropTypes.object
};
