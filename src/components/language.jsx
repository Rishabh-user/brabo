import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../api';

function LanguageSelect() {
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_URL}/languages`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setLanguages(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  if (Object.keys(languages).length === 0) {
    return <div>Loading...</div>;
  }
  const options = Object.values(languages).map((lang) => (
    <option key={lang.code} value={lang.code}>
      {lang.native_name}
    </option>
  ));

  return (
    
    <select id="languages">{options}</select>        
     
  );
}

export default LanguageSelect;
