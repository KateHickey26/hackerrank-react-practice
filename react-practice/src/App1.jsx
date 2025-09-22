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

import { useState } from 'react'

const people = [
  { name: "Zoe", age: 34 },
  { name: "Anna", age: 29 },
  { name: "Mike", age: 22 },
];

function App1() {
  const [list, setList] = useState(people)

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

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={sortByName}>
          Sort by name
        </button>
        <button onClick={sortByAge}>
          Sort by age
        </button>
        </div>

        <ul>
          {list.map((person, index) => (
            // using index for small exercise, real app should use unique id (more stable)
            <li key={index}>{person.name} - {person.age}</li>
          ))} 
        </ul>
      </div>
  );
}

export default App1
