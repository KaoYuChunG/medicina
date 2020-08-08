
import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
    root: {
      maxWidth: '240px',
      border: '10px solid green',
    },
});
  
  
class Sidebar extends Component  {

  render(){
    const { classes, items } = this.props;
    return (
      <div className={ classes.root }>
        <List disablePadding dense>
          {items.map(({ label, name, ...rest }) => (
            <ListItem key={name} button {...rest}>
              <ListItemText>{label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}
  
export default withStyles(styles)(Sidebar)