import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SearchLinks from "./components/Link/SearchLinks";
import firebase, {FirebaseContext} from "./firebase";

const defaultHistory = createBrowserHistory();

class App extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
          <div>
            <SearchLinks />         
          </div>
        </FirebaseContext.Provider>
      </Router>
    );
  }
}

export default App;
