import React from 'react';
import Search from '../Search';
import Header from '../Shared/Header';

import { Container } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Container backgroundColor="#fff">
        <Search />
      </Container>
    </>
  );
}
