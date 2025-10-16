import React, { useState } from 'react';

function FilteredList() {
  const [query, setQuery] = useState('');
  const items = ['Banana', 'Apple', 'Orange', 'Grapes', 'Mango', 'Strawberry'];

  const filtered = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <label>
        Search:
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type to filter..."
        />
      </label>

      <ul>
        {filtered.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {filtered.length === 0 && <p>No matches found.</p>}
    </div>
  );
}

export default FilteredList;