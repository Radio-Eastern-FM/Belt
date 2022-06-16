import { Button, IconButton, List, ListItem, ListItemText, ListSubheader, TextField, Typography } from "@mui/material";
import { useNavigate} from "react-router-dom";
import { ArrowBack } from '@mui/icons-material';
import { useFlags } from "../settings/flags-provider";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SettingsList = styled(List)`
  min-width: 50vw;
  margin: auto!important;
`;

const Settings = (props: { children: React.ReactElement }) => {
  let navigate = useNavigate();
  let { getFlags, setFlags } = useFlags();
  const [menuItems, setMenuItems] = useState(getFlags().menu.items);
  const [pendingChanges, setPendingChanges] = useState(false);
  
  useEffect(() => {
    setPendingChanges(JSON.stringify(menuItems) === JSON.stringify(getFlags().menu.items));
  }, [getFlags, menuItems]);
  return (
    <div>
      <br />
      <Typography
        variant="h1"
        component="div"
        align="center"
      >
        Settings
      </Typography>
      <SettingsList sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <IconButton
          onClick={() => navigate(-1)}
          color="primary"
          aria-label="Back to previous page"
        >
          <ArrowBack />
        </IconButton>
        <ListSubheader>URL's</ListSubheader>
        {menuItems.map((item, key) =>
          <ListItem key={key}>
            <TextField
              fullWidth
              label={menuItems[key].title}
              variant="standard"
              value={menuItems[key].url}
              onChange={(e) => {
                let newMenuItems = [...menuItems];
                newMenuItems[key].url = e.target.value;
                setMenuItems(newMenuItems);
              }}
            />
          </ListItem>
        )}
        <ListItem>
          <ListItemText primary="Save setttings to this computer" />
          <Button
            variant="contained"
            onClick={() => {
              let flags = getFlags();
              flags.menu.items = menuItems;
              setFlags(flags);
            }}
            disabled={pendingChanges}
          >Save</Button>
        </ListItem>
        {/* <Switch
          edge="end"
          checked={true}
          inputProps={{
            "aria-labelledby": "switch-list-label-bluetooth",
          }}
        /> */}
      </SettingsList>
    </div>
  );
};

export default Settings;
