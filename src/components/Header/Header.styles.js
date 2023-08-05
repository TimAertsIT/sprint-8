import { styled } from 'styled-components';

export const Invisible = styled.div`
visibility: hidden;
width: 320px;
`;

export const StyledBackground = styled.div`
   background-color: black; 
  padding-top: 15px;
   padding-bottom: 15px; 
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const StyledUl = styled.ul`
    color: white;
    text-transform: uppercase;
    list-style-type: none; 
    margin-block-start: 0; 
    margin-block-end: 0; 
    margin-inline-start: 0px; 
    margin-inline-end: 0px; 
    margin-right: 25px;
    padding-inline-start: 40px;
    a {
        text-decoration: none; important!
        color: white; important!
      }
`;

export const StyledList = styled.ul`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
`;

export const StyledImg = styled.img`
  width: 200px; 
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  display: block;
  align-items: center;
`;