import React from 'react';
import Badge from '@material-ui/core/Badge';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PropTypes from 'prop-types';
import Link from 'next/link';
import DrawerList from './index';

export default class Component extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    return () => {
      this.setState({ open: !this.state.open });
    };
  }

  _renderNavItem(isChild = false) {
    const { isMiniDrawer, item } = this.props;
    let onClick = () => { };
    let expand = null;

    if (isChild) {
      onClick = this._handleClick;
      expand = this.state.open ? <ExpandLess /> : <ExpandMore />;
    }

    return (
      <ListItem button onClick={onClick()}>
        <ListItemIcon>
          {(item.badge) ? <Badge color={item.badge.color ? item.badge.color : 'default'}
            badgeContent={item.badge.content ? item.badge.content : ''}><Icon>{item.icon}</Icon>
          </Badge> : <Icon>{item.icon}</Icon>
          }
        </ListItemIcon>
        {(!isMiniDrawer) && <ListItemText inset primary={item.name} />}
        {expand}
      </ListItem>
    );
  }

  _renderTitle() {
    const { item } = this.props;

    return (<ListSubheader>{item.title}</ListSubheader>);
  }

  _renderDivider() {
    return (<Divider />);
  }

  _renderChild() {
    const { isMiniDrawer, item } = this.props;
    const isChild = true;

    return (
      <div>
        {this._renderNavItem(isChild)}
        <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
          <List style={{ paddingLeft: '10px' }}>
            {
              item.children.map((childItem, idx) => (
                <DrawerList item={childItem} isMiniDrawer={isMiniDrawer} key={idx} />
              ))
            }
          </List>
        </Collapse>
      </div>
    );
  }

  _renderNavLink() {
    const { item } = this.props;

    return (
      <Link href={item.url} >
        {this._renderNavItem()}
      </Link>
    );
  }

  render() {
    const { item } = this.props;

    if (item.title) {
      return this._renderTitle();
    } else if (item.divider) {
      return this._renderDivider();
    } else if (item.children) {
      return this._renderChild();
    } else {
      return this._renderNavLink();
    }
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  isMiniDrawer: PropTypes.bool,
  item: PropTypes.object,
};
