import { useState, useRef } from 'react';
import styles from './styles.module.css'
import { debounce } from 'lodash';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  
  const debouncedSearchRef = useRef(debounce((value) => onSearch(value), 300));

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    debouncedSearchRef.current(value);
  };

  return (
    <div className={styles.container}>
        <div className={styles.user_search}>
            <input 
                type="search"
                placeholder="Search a Github User" 
                value={query} 
                onChange={handleChange}
            />
        </div>
  </div>
  );
};

export default SearchBar;
