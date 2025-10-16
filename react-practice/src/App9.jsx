import React, { useState } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const styles = {
    backgroundColor: dark ? '#222' : '#f7f7f7',
    color: dark ? '#fff' : '#000',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={styles}>
      <h1>{dark ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;