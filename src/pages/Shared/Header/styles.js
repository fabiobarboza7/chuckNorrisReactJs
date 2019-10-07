import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
  background: linear-gradient(55deg, black, purple);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url('https://images-na.ssl-images-amazon.com/images/I/51IY4ohvfUL.jpg');
  /* background-position: center center;
  background-repeat: no-repeat; */
`;

export const Name = styled.h1`
  font-family: monospace;
  color: #fff;
`;
