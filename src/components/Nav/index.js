import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav aria-label="Primary">
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected ? 'navActive' : ''}`}>
            <button
              type="button"
              className="nav-link"
              onClick={() => setContactSelected(true)}
              aria-pressed={contactSelected}
            >
              Contact
            </button>
          </li>
          {categories.map((category) => {
            const isActive =
              currentCategory.name === category.name && !contactSelected;
            return (
              <li className={`mx-1 ${isActive ? 'navActive' : ''}`} key={category.name}>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                  }}
                  aria-pressed={isActive}
                >
                  {capitalizeFirstLetter(category.name)}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
