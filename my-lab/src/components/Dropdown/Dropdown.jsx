import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function LanguageSwitcher() {
  const [language, setLanguage] = useState('English');

  const handleSelect = (lang) => {
    setLanguage(lang); 
    console.log(`Language changed to: ${lang}`);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="black" id="dropdown-basic">
        {language}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSelect('English')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect('Русский')}>Русский</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSwitcher;
