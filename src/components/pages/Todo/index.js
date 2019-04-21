import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Todo from './component';
import * as actions from './action';
import styles from './styles';

function mapStateToProps(state) {
  const { items } = state.todo;
  return {
    items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const Styled = withStyles(styles)(Todo);
const Connected = connect(mapStateToProps, mapDispatchToProps)(Styled);

export default Connected;