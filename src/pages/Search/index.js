import React, { useState } from 'react';
import api from '../../services/api';

import { List } from './styles';

export default function Search() {
  const [datas, setDatas] = useState([]);
  const [query, setQuery] = useState('');

  async function queryJokes() {
    const response = await api.get(`/search?query=${query}`);
    const { data } = response;

    setDatas([...datas, data.result]);
  }

  return (
    <>
      <input
        type="text"
        onChange={e => setQuery(e.target.value)}
        placeholder="Search some chucknorris joke"
      />
      <button type="button" onClick={queryJokes}>
        Search
      </button>
      <List>
        {datas.map(data => data.map(d => <li key={d.id}>{d.value}</li>))}
      </List>
    </>
  );
}
