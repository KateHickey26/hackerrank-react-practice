import React, { useState, useEffect } from 'react';

function DebouncedInput() {
  const [text, setText] = useState('');
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setDebounced(text), 500);
    return () => clearTimeout(t);
  }, [text]);

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>Debounced value: {debounced}</p>
    </>
  );
}

export default DebouncedInput; // App7