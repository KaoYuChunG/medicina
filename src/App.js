import React from 'react';
import Aba from './forms/aba';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
   backgroundColor: "rgba(0, 0, 0, 0.12)",
   padding:"1%",
   height:"100%"
  },
});


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
        <Aba />
     
    </div>
  );
}

export default App;
