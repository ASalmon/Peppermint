import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Store from '@material-ui/icons/Store';
import Layers from '@material-ui/icons/Layers';

export default (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Company" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Store />
      </ListItemIcon>
      <ListItemText primary="Stores" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Layers />
      </ListItemIcon>
      <ListItemText primary="Departments" />
    </ListItem>
  </div>
);
