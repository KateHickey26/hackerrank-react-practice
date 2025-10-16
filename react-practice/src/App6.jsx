// pagination

import React, { useState } from 'react';

// would have { items, perPage = 5 } inside () in a real app
function PaginatedList() {
  const [page, setPage] = useState(0);
  const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const perPage = 3;
  const start = page * perPage;
  const visible = items.slice(start, start + perPage);

  return (
    <>
      <ul>{visible.map(i => <li key={i}>{i}</li>)}</ul>
      <button disabled={page === 0} onClick={() => setPage(p => p - 1)}>Prev</button>
      <button disabled={start + perPage >= items.length} onClick={() => setPage(p => p + 1)}>Next</button>
    </>
  );
}

export default PaginatedList; // App6