import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { List } from './styles';

export default function Search() {
  const [datas, setDatas] = useState([]);
  const [query, setQuery] = useState('');

  async function queryJokes() {
    try {
      const response = await api.get(`/search?query=${query}`);
      const { data } = response;
      if (!data.result.length) {
        toast.error('Wow, some errros, take a look!');
      } else {
        toast.success(`Well done, we found ${data.result.length} records`);
      }

      setDatas([data.result]);
    } catch (err) {
      toast.error('Wow, some errros, take a look!');
    }
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
