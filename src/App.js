import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HpContent from './components/HpContent';
import CandidateDashboard from './components/CandidateDashboard';
import RecruiterDashboard from './components/RecruiterDashboard';
import MainDash from './components/MainDash';

function App() {
  return (
    <Router>
      <>
        <div className="container-fluid main">

          <Switch>
            <Route exact={true} path='/' >
              <Homepage />
              <HpContent />
            </Route>
            <Route exact={true} path='/signup' >
              <Homepage />
              <SignUp />
            </Route>
            <Route exact={true} path='/signin' >
              <Homepage />
              <SignIn />
            </Route>

            <Route exact={true} path='/recruiter-dashboard' >
              <MainDash />
              <RecruiterDashboard />
            </Route>

            <Route exact={true} path='/candidate-dashboard' >
              <MainDash />
              <CandidateDashboard />
            </Route>


          </Switch>
        </div>
      </>
    </Router>

  );
}

export default App;



