// Sort a table of products
//
// const products = [
//     { name: "Hammer", price: 25 },
//     { name: "Drill", price: 100 },
//     { name: "Screwdriver", price: 10 },
//     { name: "Saw", price: 50 }
//   ];

//   Build a React table that 
//   - shows all products
//   - has a button to toggle sort order by price (ascending/descending)

import React, { useState } from 'react';

const products = [
    { name: "Hammer", price: 25 },
    { name: "Drill", price: 100 },
    { name: "Screwdriver", price: 10 },
    { name: "Saw", price: 50 }
  ];

function App2() {
    const [list, setList] = useState(products);
    const [asc, setAsc] = useState(true);

    const sortByPrice = () => {
        const sortedList = [...list].sort((a, b) => asc ? a.price - b.price : b.price - a.price);
        setList(sortedList);
        setAsc(!asc);
    }

    return (
        <div style={{ padding: 16 }}>
            <button onClick={sortByPrice}>
                Sort by price ({asc ? 'ascending' : 'descending'})
            </button>
            <table border="1" cellPadding="8" style={{ marginTop: 16, borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App2;