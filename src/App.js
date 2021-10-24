import { useState } from 'react';
import Header from './components/Header';
import ListDogs from './components/ListDogs';
import Search from './components/Search';

import dogData from './data/dogdata.json';

import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dogs, setDog] = useState(dogData);

  const toggleFlipped = (id) => {
    console.log(id);
    setDog((dogs) =>
      dogs.map((item) =>
        item.id === id ? { ...item, flipped: !item.flipped } : item
      )
    );
    lockDogs(id);
    setTimeout(() => flipBack(id), 3000);
  };
  const lockDogs = (id) => {
    setDog((dogs) =>
      dogs.map((item) => (item.id !== id ? { ...item, locked: true } : item))
    );
  };
  const flipBack = (id) => {
    setDog((dogs) =>
      dogs.map((item) => (item.id === id ? { ...item, flipped: false } : item))
    );
    openDogs();
  };
  const openDogs = (id) => {
    setDog((dogs) =>
      dogs.map((item) => (item.id !== id ? { ...item, locked: false } : item))
    );
  };

  const filteredDogs = dogs.filter((item) => {
    if (searchTerm === '') {
      return item;
    } else if (item.breed.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
    return null;
  });

  return (
    <div className="container">
      <Header />
      <Search setSearchTerm={setSearchTerm}/>
      <ListDogs toggle={toggleFlipped} dogs={filteredDogs} />
    </div>
  );
}
export default App;
