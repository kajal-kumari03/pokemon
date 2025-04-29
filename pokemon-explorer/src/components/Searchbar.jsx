// src/components/SearchBar.jsx

import "./Searchbar.css"

const Searchbar = ({ searchTerm, setSearchTerm, selectedType, setSelectedType, types }) => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
       className="input"
      />
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
       className="select"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};



export default Searchbar;








