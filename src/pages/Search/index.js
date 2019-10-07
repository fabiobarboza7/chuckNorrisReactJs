import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Container, List } from './styles';

export default function Search() {
  const [datas, setDatas] = useState([]);
  const [query, setQuery] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  async function handleJokes() {
    try {
      const response = await api.get(`/search?query=${query}`);
      const { data } = response;
      if (!data.result.length) {
        toast.error('Wow, some errros, take a look!');
      } else {
        toast.success(`Well done, we found ${data.result.length} records`);
        setIsHidden(false);
      }

      setDatas([data.result]);
    } catch (err) {
      toast.error('Wow, some errros, take a look!');
    }
  }

  return (
    <>
      <Container backgroundColor="#fff">
        <input
          type="text"
          onChange={e => setQuery(e.target.value)}
          placeholder="Search some chucknorris joke"
        />
        <button type="button" onClick={handleJokes}>
          Search
        </button>
      </Container>
      <Container hidden={isHidden}>
        <List>
          {datas.map(data => data.map(d => <li key={d.id}>{d.value}</li>))}
        </List>
      </Container>
    </>
  );
}
