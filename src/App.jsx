import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Ticket from './components/Ticket';
import TicketForm from './components/TicketForm';
import ViewTickets from './components/ViewTickets';
import Login from './components/Login';
import Signup from './components/Signup';

/**
 * @terms
 * Link: serves similar purpose as an <a> tag.
 * Route: conditionally rendering of components depending on path.
 * Switch: required in order to only render one component at a time.
 */

function App() {
  const [authorized, setAuthorization] = useState('false'); //this needs to be a boolean eventually

//function here to update state, passed down as a prop to signup
//that function called in signup will update state and itself be passed down as a prop to ticket detail

const authorizer = () => {
  setAuthorization('true');
}

//update state with authorized boolean from user body
  return (
    // React Router boilerplate code
    <div className="container-fluid">
      <Router>
        <div className="row ml-3">
          <ul className="list-inline">
              <Link className="customLink" to="/">
                  <li className="customLink list-inline-item brand mr-3">
                  HELPDESK 2.0
                  </li>
              </Link>
            <li className="list-inline-item mr-3">
              <Link className="customLink" to="/ticketForm">
                NEW TICKET
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="customLink" to="/viewtickets">
                VIEW TICKETS
              </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/"><Login authorizer={authorizer}/></Route>
            <Route path="/viewtickets"><ViewTickets authorized={authorized}/></Route> 
            <Route path="/ticketForm" component={TicketForm} /> 
            <Route path="/signup"><Signup authorizer={authorizer} /></Route> 
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
