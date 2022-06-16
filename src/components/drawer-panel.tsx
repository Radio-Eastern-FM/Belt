import React from 'react'
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import styled from 'styled-components';
import { useFlags } from '../settings/flags-provider';
import { IMenuItem } from '../settings/flags';
import { useNavigate} from "react-router-dom";
import { Settings } from '@mui/icons-material';

const Panel = styled(Drawer)`
  & .MuiDrawer-paper{
    position: unset;
  }
  .ListItemIcon{
    min-width: ${(props) => props.open !== true && 'unset'};
  }
`;

export const DrawerPanel = (props: {
  open:boolean,
  onClose: () => void,
  onSelected: (item: IMenuItem) => void,
  selected: IMenuItem
}) => {
  let { getFlags } = useFlags();
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(props.open);
  
  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);
  
  return (
    <Panel
      anchor="left"
      // variant={flags.menu.variant}
      variant={"permanent"}
      onClose={props.onClose}
      open={open}
    >
      <Toolbar />
        <List>
          <ListItemButton onClick={() => setOpen(!open)}>
            {open ? <Icon>chevron_left</Icon> : <Icon>menu</Icon>}
          </ListItemButton>
          <Divider />
          {getFlags().menu.items.map((item, index) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                onClick={() => props.onSelected(item)}
              >
                <Typography>
                  <ListItemIcon className="ListItemIcon">
                    <Icon color={item === props.selected ? "primary" : undefined}>{item.icon}</Icon>
                  </ListItemIcon>
                </Typography>
                {getFlags().menu.variant === 'temporary' && open &&
                  <ListItemText primary={item.title} />
                }
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
          <ListItemButton
            onClick={() => {
              props.onClose();
              navigate('/settings');
            }}
          >
            <Typography>
              <ListItemIcon className="ListItemIcon">
                <Settings />
              </ListItemIcon>
            </Typography>
            {getFlags().menu.variant === 'temporary' && open &&
              <ListItemText primary="Open Settings" />
            }
          </ListItemButton>
        </List>
        
      </Panel>
  )
}
