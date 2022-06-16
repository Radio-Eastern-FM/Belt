import React from 'react';
import './app.css';
import { Header } from './components/header'
import { Page } from './components/page'
import { DrawerPanel } from './components/drawer-panel'
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useFlags } from './settings/flags-provider';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';;

const Root = styled.div`
  display: flex;
  width: 100vw;
  & > *{
    flex: 1;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100vh;
  z-index: -10;
  border: none;
`;

const PageWrapper = styled(Page)`
  height: 100vh;
`;

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = (props: { children: React.ReactElement }) => {
  let { getFlags } = useFlags();
  let navigate = useNavigate();
  
  const [drawOpen, setDrawOpen] = React.useState(false);
  const [selectedIFrame, setSelectedIFrame] = React.useState(getFlags().menu.items[0]);
  return (
    <ThemeProvider theme={getFlags().theme === "dark" ? darkTheme :  lightTheme}>
      <Root className="App">
        <CssBaseline />
        <Header />
        <DrawerPanel
          open={drawOpen}
          selected={selectedIFrame}
          onClose={() => setDrawOpen(false)}
          onSelected={(item) =>{
            navigate("/");
            setSelectedIFrame(item);
            setDrawOpen(false);
          }}
        />
        <PageWrapper>
          <div>
            {props.children ? props.children : <Iframe src={selectedIFrame.url} />}
          </div>
        </PageWrapper>
      </Root>
    </ThemeProvider>
  );
}

export default App;
