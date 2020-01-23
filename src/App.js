import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SearchLinks from "./components/Link/SearchLinks";
import LinkList from "./components/Link/LinkList";
import firebase, {FirebaseContext} from "./firebase";

const defaultHistory = createBrowserHistory();

class App extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      lading: true,
      error: false,
    };
  }

  componentDidMount() {
   this.setState({loading: true});
  }

  render() {
    const {      
      error,
    } = this.state;

    if (error) {
      return (
        <div>
          Sorry, but the restaurant list is unavailable right now
        </div>
      );
    }

    return (
      <Router history={this.props.history || defaultHistory}>
         <FirebaseContext.Provider value={{firebase}}>
            <Switch>
              <Route exact path="/search" component={SearchLinks} />
              <Route exact path="/top" component={LinkList} />
              <Route exact path="/new/:page" component={LinkList} />
            </Switch>           
        </FirebaseContext.Provider>
      </Router>
    );
  }
}

export default App;
