import React from 'react';
import App1 from './generated/spa1/App';
import App2 from './generated/spa2/App';
import './App.css';

function App() {
  const [spa, setSpa] = React.useState(null);

  return (
    <div className="App">
      <ul>
        <li>
          <button onClick={() => setSpa('spa1')}>
            Spa1
          </button>
        </li>
        <li>
          <button onClick={() => setSpa('spa2')}>
            Spa2
          </button>
        </li>
      </ul>
      <div>
        {spa}
        {spa === 'spa1' && <App1 />}
        {spa === 'spa2' && <App2 />}
      </div>
    </div>
  );
}

export default App;
