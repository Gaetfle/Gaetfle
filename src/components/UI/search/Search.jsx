import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import "../../../styles/search.css";
import SearchCard from '../search-card/SearchCard';
import {Link} from 'react-router-dom';

const Search = ({placeholder, data}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const searchedProduct = (event) => {
    const searchWord = event.target.value;
    setSearchTerm(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setSearchTerm("");
  };

    return (    
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={searchedProduct}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
    </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 10).map((item, index) => {
            return (
                <Link to={`/products/${item.id}`} onClick={clearInput}>
                    <SearchCard item={item} key={index}/>
                </Link>
            );
          })}
        </div>
      )}
    </div>
    );
}

export default Search;