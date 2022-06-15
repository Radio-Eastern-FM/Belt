import { IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Switch } from "@mui/material";
import { useNavigate} from "react-router-dom";
import { ArrowBack } from '@mui/icons-material';
import React from "react";

const Settings = (props: { children: React.ReactElement }) => {
  let navigate = useNavigate();
  return (
    <div>
      <IconButton
        onClick={() => navigate(-1)}
        color="primary"
        aria-label="Back to previous page"
      >
        <ArrowBack />
      </IconButton>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        subheader={<ListSubheader>Settings</ListSubheader>}
      >
        <ListItem>
          <ListItemIcon>
            <i>i</i>
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
          <Switch
            edge="end"
            checked={false}
            inputProps={{
              "aria-labelledby": "switch-list-label-wifi",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <i>i</i>
          </ListItemIcon>
          <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
          <Switch
            edge="end"
            checked={true}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Settings;
