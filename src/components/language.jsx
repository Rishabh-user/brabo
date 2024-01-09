import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../api';
import { useLanguage } from './LanguageContext';
import Loader from './Loader';
import { LoadingProvider, useLoading } from './LoadingContext';

function LanguageSelect() {

  const { selectedLanguage, changeLanguage } = useLanguage();
  const { isLoading, startLoading, stopLoading } = useLoading();


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
    setTimeout(() => {
      stopLoading();
    }, 1000);
  }, [stopLoading]);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    startLoading();
    changeLanguage(newLanguage);
    setTimeout(() => {
      stopLoading();
    }, 1000);
  };

  if (Object.keys(languages).length === 0) {
    return <div>Loading...</div>;
  }
  const options = Object.values(languages).map((lang) => (
    <option key={lang.code} value={lang.code}>
      {lang.native_name}
    </option>
  ));

  return (
    <LoadingProvider>
      {isLoading && <Loader />}
      <select id="languages" value={selectedLanguage} onChange={handleLanguageChange}>{options}</select>
    </LoadingProvider>

  );
}

export default LanguageSelect;
