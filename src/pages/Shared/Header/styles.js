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
  background-image: url('https://images02.military.com/sites/default/files/styles/full/public/media/veteran-jobs/content-images/2016/03/chucknorris.jpg?itok=_J3M4O-S');
  background-size: cover;
  background-position: center;
`;

export const Name = styled.h1`
  font-family: monospace;
  color: #fff;
`;
