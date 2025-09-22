// PART 1
// Given this data:
//    const people = [
//      { name: "Zoe", age: 34 },
//      { name: "Anna", age: 20 },
//      { name: "Mike", age: 22 },
//    ];
// Build a React component that:
// 	•	Displays the list.
// 	•	Has two buttons: “Sort by Name” and “Sort by Age.”
// 	•	Clicking a button sorts the list accordingly.
//
// PART 2
// Extend this to add a search box that filters peoples names as you type

import { useState } from 'react'

const people = [
  { name: "Zoe", age: 34 },
  { name: "Anna", age: 29 },
  { name: "Mike", age: 22 },
];

function App1() {
  const [list, setList] = useState(people)
  const [query, setQuery] = useState('')

  const sortByName = () => {
    // 1. never mutate state directly, copy first
    // 2. using localeCompare for proper alphabetical sorting
    const sortedList = [...list].sort((a, b) => a.name.localeCompare(b.name))
    setList(sortedList)
  }

  const sortByAge = () => {
    const sortedList = [...list].sort((a, b) => a.age - b.age)
    setList(sortedList)
  }

  const visible = list.filter(person =>
    person.name.toLowerCase().includes(query.toLowerCase().trim())
  );

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Search by name"
          value={query}
          onChange={e => {
            const value = e.target.value
            setQuery(value)
            // setList(visible)
          }}
        />
        <button onClick={sortByName}>
          Sort by name
        </button>
        <button onClick={sortByAge}>
          Sort by age
        </button>
        </div>

        <ul>
          {visible.map((person, index) => (
            // using index for small exercise, real app should use unique id (more stable)
            <li key={index}>{person.name} - {person.age}</li>
          ))} 
        </ul>
      </div>
  );
}

export default App1
