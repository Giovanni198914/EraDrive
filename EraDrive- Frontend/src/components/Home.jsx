import React from 'react';
import HeroSection from './HeroSection';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useState } from 'react';
import ChiSiamo from './ChiSiamo';
import Mission from './Mission';



const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (results) => {
    setSearchResults(results);
  };
  return (
    <>
      <HeroSection />
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
      <ChiSiamo />
      <Mission />
    </>
  );
};

export default Home;