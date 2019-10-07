import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${props => props.backgroundColor};
`;

export const List = styled.ul`
  padding: 10px 40px;

  li {
    margin: 3px 0;
    background-color: #fff;
    text-align: center;
    width: 100%;
    list-style-type: none;
    padding: 5px 10px;
    border-radius: 4px;
  }
`;
