import React from 'react'
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import styled from 'styled-components';
import { flags } from '../settings/flags';
import { IMenuItem } from '../settings/menu-items';
import { useNavigate} from "react-router-dom";

const Panel = styled(Drawer)`
  & .MuiDrawer-paper{
    width: 15vw;
  }
`;

export const DrawerPanel = (props:{
  open:boolean,
  onClose: () => void,
  onSelected: (item: IMenuItem) => void,
  menuItems: IMenuItem[]
}) => {
  let navigate = useNavigate();
  return (
    <Panel
      anchor="left"
      variant={flags.menu.variant}
      onClose={props.onClose}
      open={props.open}
    >
      <Toolbar />
        <Divider />
        <List>
          {props.menuItems.map((item, index) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                onClick={() => props.onSelected(item)}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItemButton
            onClick={() => {
              props.onClose();
              navigate('/settings');
            }}
          >
            <ListItemText primary="Open Settings" />
          </ListItemButton>
        </List>
        
      </Panel>
  )
}
