import React from 'react';
import HeroSection from './HeroSection';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useState } from 'react';


const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (results) => {
      setSearchResults(results);
    };
  return (
    <>
      <HeroSection/>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults}/>
    </>
  );
};

export default Home;