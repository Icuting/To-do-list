import React from 'react';
import '../style/style.sass';
import Header from "./Header/Header";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header/>
            <div className='content'>
                <Route path={'/registration'}/>
                <Route path={'/todo'}/>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
