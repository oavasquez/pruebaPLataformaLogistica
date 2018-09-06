// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import DataUsage from '@material-ui/icons/DataUsage';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import DasboardIcon from '@material-ui/icons/Dashboard';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { NavLink } from "react-router-dom";


export const mailFolderListItems = (
  <div>
     <NavLink
      to={"/dashboard"}
     >
    <ListItem button>
      <ListItemIcon>
        <DasboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </NavLink>

    <NavLink
      to={"/user"}
     >
    <ListItem button>
      <ListItemIcon>
        <SupervisedUserCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItem>
    </NavLink>


  <NavLink
      to={"/entregas"}
     >
    <ListItem button>
      <ListItemIcon>
        <MotorcycleIcon />
      </ListItemIcon>
      <ListItemText primary="Entregas" />
    </ListItem>
    </NavLink>




<NavLink
      to={"/rastreo"}
     >
    <ListItem button>
      <ListItemIcon>
        <GpsFixedIcon />
      </ListItemIcon>
      <ListItemText primary="Rastreo paquetes" />
    </ListItem>
    </NavLink>
    
    <NavLink
      to={"/notifications"}
     >
      <ListItem button>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notificaciones" />
    </ListItem>

    </NavLink>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Correos" />
    </ListItem>
  </div>
);