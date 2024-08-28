import './App.css';

import Header from './components/Header/Header';
import PersonalBanner from './components/PersonalBanner/PersonalBanner';

function App() {
  return (
    <div className="App">

        <Header nome="seu nome aqui"/>

        <PersonalBanner />

    </div>
  );
}

export default App;
