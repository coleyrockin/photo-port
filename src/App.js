import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

const CATEGORIES = [
  {
    name: 'commercial',
    description: 'Photos of grocery stores, food trucks, and other commercial projects',
  },
  { name: 'portraits', description: 'Portraits of people in my life' },
  { name: 'food', description: 'Delicious delicacies' },
  { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
];

function App() {
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={CATEGORIES}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory} />
            <About />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
    </div>
  );
}

export default App;
