import { useNavigate} from "react-router-dom";
import { useFlags } from "../settings/flags-provider";
import React from "react";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";

const Welcome = (props: { children: React.ReactElement }) => {
  let navigate = useNavigate();
  let { getFlags } = useFlags();
  return (
    <div>
      <Typography
        variant="h1"
        component="div"
        align="center"
      >
        Welcome
      </Typography>
      <List>
        <ListItem>
          Welcome Menu
        </ListItem>
        {getFlags().menu.items.map((item, index) => (
          <ListItemButton
            onClick={() => navigate(item.route ?? "/")}
          >
            <Typography
              variant="h5"
              component="div"
              align="center"
            >
              {item.title}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              align="center"
            >
              {item.description}
            </Typography>            
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default Welcome;
