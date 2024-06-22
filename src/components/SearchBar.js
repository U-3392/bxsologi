import React, { useState, useEffect } from 'react';

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [sortType, setSortType] = useState('relevance');

  // Replace this with the URL of your JSON database
  const databaseUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';

  useEffect(() => {
    fetch(databaseUrl)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const filteredItems = items
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === 'price') {
        return a.price - b.price;
      } else if (sortType === 'relevance') {
        // Implement your own relevance sorting logic here
        // This is a placeholder that sorts by the length of the title
        return a.title.length - b.title.length;
      } else {
        return 0;
      }
    });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={sortType} onChange={handleSortChange}>
        <option value="relevance">Relevance</option>
        <option value="price">Price</option>
      </select>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.title} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
