import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PheeboAppsPage from './components/PheeboAppsPage';
import ContractWorkPage from './components/ContractWorkPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/pheebo-apps'>
          <PheeboAppsPage />
        </Route>
        <Route path='/contract-work'>
          <ContractWorkPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
