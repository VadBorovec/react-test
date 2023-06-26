import React, { useState } from 'react';
import { Button } from 'styles/ui';

export default function NewsSearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <Button type="submit">Search</Button>
    </form>
  );
}
