import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Card
        title="Title"
        image="path_to_image.jpg"
        optionalText="Optional Text"
        optionalComponent={<button>Click me</button>}
      />
    </div>
  );
};

export default App;
