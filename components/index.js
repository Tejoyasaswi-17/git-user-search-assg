'use client';

import {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import UsersTable from './UsersTable';
import { searchUsers } from '@/services/user_search';
import styles from './styles.module.css'
import Pagination from './Pagination'

const Index = () => {
    const [searchResults, setSearchResults] = useState({});
    const [page, setPage] = useState(1);

    const handleSearch = async (query) => {
        if (query?.trim() !== '') {
            try {
                const data = await searchUsers(query, page);
                setSearchResults(data?.data);
            } catch (error) {
                console.log('error', error);
            }
        } else {
            setSearchResults({});
        }
    };

    useEffect(() => {
        const fetchData = async () => {
          if (Object.keys(searchResults).length !== 0) {
            try {
              const data = await searchUsers(searchResults?.items?.login, page);
              setSearchResults(data?.data);
            } catch (error) {
              console.log('error', error);
            }
          }
        };
    
        fetchData();
      }, [page]); 

    return (
        <div className={styles.main_container}>
            <SearchBar onSearch={handleSearch} />
            {(Object.keys(searchResults).length !== 0 && searchResults?.total_count !== 0) ? <Pagination page={page} itemCount={searchResults?.total_count} setPage={setPage}/> : null}
            {Object.keys(searchResults).length !== 0 ? <UsersTable data={searchResults} /> : null}
        </div>
    )
}

export default Index;