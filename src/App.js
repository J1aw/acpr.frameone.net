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
    <div className="App">
      <div style={{height: '70px'}}>
        <AppBar>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: '30%'}}>
              <Typography>
                GG Replay App
              </Typography>
            </div>
            <div style={{width: '10%'}}>
              <MenuItem key={Routes.REPLAY} onClick={() => {setRoute(Routes.REPLAY)}}>
                Replay
              </MenuItem>
            </div>
            <div style={{width: '10%'}}>
              <MenuItem key={Routes.UPLOAD} onClick={() => {setRoute(Routes.UPLOAD)}}>
                Upload
              </MenuItem>
            </div>
          </div>
        </AppBar>
      </div>
      <div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
