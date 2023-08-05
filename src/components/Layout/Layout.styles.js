import { styled } from 'styled-components';

export const StyledBackground = styled.div`
   background-color: black; 
  padding-top: 15px;
   padding-bottom: 15px; 
   text-align: center;
   display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledUl = styled.li`
   color: grey;
   text-transform: uppercase;
   list-style: none;
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;

  &:hover {
    color: white;
    border-bottom: 1px solid blue;
  }
`;