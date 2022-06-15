import React from 'react';
import './app.css';
import { Header } from './components/header'
import { Page } from './components/page'
import { DrawerPanel } from './components/drawer-panel'
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { flags } from './settings/flags';
import { menuItems } from './settings/menu-items';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Iframe = styled.iframe`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  border: none;
`;

const App = (props: {children: React.ReactElement}) => {
  // createUser = (e) => {
  //   createUser(this.state.user)
  //   .then(response => {
  //     console.log(response);
  //     this.setState({numberOfUsers: this.state.numberOfUsers + 1})
  //   });
  // }
  const [drawOpen, setDrawOpen] = React.useState(false);
  const [selectedIFrame, setSelectedIFrame] = React.useState(menuItems[0]);
  const [iFrameLoaded, setIFrameLoaded] = React.useState(false);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Header />
      <DrawerPanel
        open={drawOpen}
        onClose={() => setDrawOpen(false)}
        onSelected={(item) =>{
          navigate("/");
          setIFrameLoaded(false);
          setSelectedIFrame(item);
          setDrawOpen(false);
        }}
        menuItems={menuItems}
      />
      {flags.menu.variant === "temporary" && <IconButton color="primary" onClick={() => setDrawOpen(true)}>
        <MenuIcon />
      </IconButton>}
      <Page>
        <div>
          {props.children ?
              props.children : 
              (
                <Iframe
                  src={selectedIFrame.url}
                  onLoad={() => setIFrameLoaded(true)}/>
              )
          }
        </div>
      </Page>
    </div>
  );
}

export default App;
