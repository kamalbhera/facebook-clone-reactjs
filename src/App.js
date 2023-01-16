import './App.css';

import Header from './Header/header';
import Login from './Login/Login';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useStateValue } from './StateProvider/StateProvider';
import HomePage from './Pages/HomePage/HomePage';
import Profile from './Pages/Profile/Profile';
import SignUp from './Pages/SignUp/SignUp.component';
import UserProvider from './StateProvider/UserProvider';
import PasswordReset from './components/PasswordReset.component';
import ImageUpload from './components/ImageUpload/Image_upload.component';

function App() {
  
  const [{ user }, dispatch] = useStateValue();



  return (
    // BEM naming convention
    <UserProvider>
    <Router>
      <div className="App">
        { 
          /* Header component */
          /* App body */
            /* 
              Sidebar : Left
              Feed    : Center
              Widgets : Right
            */
        }
        {
          !user ? <></> : <Header/>
        }
        <Switch>
          <Route exact path='/' component={ !user ? Login : HomePage} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/profile/:name' component={Profile} />
          <Route exact path='/passwordReset' component={PasswordReset}/>
          <Route exact path='/upload' component={ImageUpload}/>
        </Switch>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;
