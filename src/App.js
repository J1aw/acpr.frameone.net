import React, {useState} from 'react';
import './App.css';
import { AppBar, MenuItem, Typography } from '@mui/material';
import { ReplayPage } from './Pages/ReplayPage/ReplayPage.tsx';
import { UploadPage } from './Pages/UploadPage/UploadPage.tsx';

const Routes = {
  REPLAY: 'REPLAY',
  UPLOAD: 'UPLOAD'
}

function App() {
  const [route, setRoute] = useState(Routes.REPLAY);

  const renderPage = () => {
    if (route === Routes.REPLAY) {
      return (
        <ReplayPage />
      );
    }

    if (route === Routes.UPLOAD) {
      return (
        <UploadPage />
      );
    }

    return null;
  }

  return (
    <div className='app-container'>
      <div className='app-header-container'>
        <AppBar className='app-header-container'>
          <div className='app-bar-content'>
            <div className='app-bar-logo'>
              <Typography>
                ACPR Replays
              </Typography>
            </div>
            <div className='app-bar-button'>
              <MenuItem style={{height: '100%'}} key={Routes.REPLAY} onClick={() => {setRoute(Routes.REPLAY)}}>
                Replay
              </MenuItem>
            </div>
            <div className='app-bar-button'>
              <MenuItem style={{height: '100%'}} key={Routes.UPLOAD} onClick={() => {setRoute(Routes.UPLOAD)}}>
                Upload
              </MenuItem>
            </div>
          </div>
        </AppBar>
      </div>
      <div className='app-page-container'>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
