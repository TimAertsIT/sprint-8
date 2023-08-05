import { styled } from 'styled-components';

export const StyledImg = styled.img`
  width: 200px; 
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  display: block;
  align-items: center;
`;

export const StyledBackground = styled.div`
   background-color: black; 
  padding-top: 15px;
   padding-bottom: 15px; 
`;

export const StyledCard = styled.div`
   background-color: white; 
  border-radius: 20px;
  width: 600px; 
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px; 
`;

export const StyledH1 = styled.h1`
 color: black;
 padding-top: 30px; 
 padding-left: 25px;
 padding-right: 25px; 
 text-align: left;

`;

export const StyledP = styled.p`
 color: black;
 padding-left: 40px;
 padding-right: 25px; 
 text-align: left;
 padding-top: 10px;
`;

export const StyledInput = styled.input`
color: black;
background-color: lightgrey; 
padding-left: 25px;
 padding-right: 25px; 
 margin-bottom: 25px;
 padding-top: 20px; 
 padding-bottom: 20px;
 border-radius: 5px; 
 width: 80%;
`;

export const StyledButton = styled.button`
   background-color: yellow; 
   color: black;
   text-transform: uppercase;
   border-radius: 25px; 
   border: none;
   padding-top: 15px; 
   padding-bottom: 15px; 
   padding-left: 45px;
   padding-right: 45px;
   margin-bottom: 30px;
   font-weight: bold;
   width: 90%; 
`;