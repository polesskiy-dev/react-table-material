import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableContainer from './TableContainer';

const App = () => (
    <MuiThemeProvider>
        <TableContainer />
    </MuiThemeProvider>
);

export default App

