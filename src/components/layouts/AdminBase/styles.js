const drawerWidth = 250;
const appBarHeight = 64;
const contentPadding = 20;

const styles = theme => ({
  appBar: {
    height: `${appBarHeight}px`,
    zIndex: theme.zIndex.drawer + 1
  },
  appBarTitle: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  drawer: {
    paddingTop: `${appBarHeight}px`,
    width: `${drawerWidth}px`
  },
  content: {
    marginLeft: `${drawerWidth}px`,
    padding: `${contentPadding}px`
  },
  listItem: {
    padding: 0,
    '& a': {
      padding: '12px 24px',
      width: '100%'
    }
  },
  pullRight: {
    textAlign: 'right',
  },
});

export default styles;
