import './App.css';

import InputEpisode from './components/InputEpisode';
import ListEpisodes from './components/ListEpisodes';

function App() {
  return (
    <div className="flex justify-center">
      <div className="container mt-10 mb-10">
        <ListEpisodes />
        <InputEpisode />
      </div>
    </div>
  );
}

export default App;
