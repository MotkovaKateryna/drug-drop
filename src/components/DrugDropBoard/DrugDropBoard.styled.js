import styled from 'styled-components';

export const StyledThumb = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

export const StyledBoard = styled.div`
min-width:300px;
min-height: 400px;
border: 3px solid lightgray;
padding: 20px 10px;
border-radius: 12px;
margin: 10px;
display: flex;
align-items: center;
flex-direction: column;

`;

export const StyledBoardTitle = styled.div`
font-size: 1.5rem;
font-weight: 700;
`;

export const StyledItem = styled.div`
font-size: 1rem;
font-weight: 400;
box-sizing: border-box;
width: 100%;
border: 2px solid lightblue;
padding: 10px;
border-radius: 6px;
margin: 5px 0;
cursor:grab;
background-color: lightcyan;
`;