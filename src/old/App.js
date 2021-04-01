import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';


import Navbar from './components/Navbar/Navbar.js';
import Landing from './components/Landing/Landing.js';
import Expenses from './components/Expenses/Expenses.js';
import ReportAudit from './components/ReportAudit/ReportAudit.js';
import ClientList from './components/ClientManagement/ClientList.js';
import ClientManagement from './components/ClientManagement/ClientManagement.js';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/report' component={ReportAudit} />
          <Route exact path='/expenses' component={Expenses} />
          <Route exact path='/clist' component={ClientList} />
          <Route exact path='/cmanagement' component={ClientManagement} />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;