import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Switch>

          <Route path="/*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
