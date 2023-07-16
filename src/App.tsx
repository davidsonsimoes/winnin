import React from 'react';
import { RedditProvider } from '@context/RedditContext';

const App: React.FC = () => {
  return (
    <RedditProvider>
      <div className="App">
          <p>
            home
          </p>
      </div>
    </RedditProvider>
  );
};

export default App;
