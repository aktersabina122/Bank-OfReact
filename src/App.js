import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import UserProfile from './components/user-profile';
import LogIn from './components/login'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 12568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  mocLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser});
  }
  render() {
      const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
      const LogInComponent = () => (<LogIn
                                        user={this.state.currentUser}
                                        mockLogIn={this.mockLogIn}
                                        {...this.props} />);
      const UserProfileComponent = () => (<UserProfile
            userName={this.state.currentUser.userName}
            memberSince={this.state.currentUser.memberSince}
        />);

      return (
            <Router>
                <Switch>
                  <Route exact path="/" render={HomeComponent} />
                  <Route exact path='/userProfile' render={UserProfileComponent} />
                </Switch>
            </Router>
      );
    }
}

export default App;
