import styled from "styled-components";

export const NewsH1 = styled.h1`
font-family: 'Manrope';
font-size: ${props => props.theme.fontSizes.fs48};
margin-top: 69px;
margin-bottom: 40px;
text-align: center;
`;

export const NewsForm = styled.form`
margin-bottom: 60px;
text-align: center;
`;
export const NewsInput = styled.input`
width: 608px;
height: 44px;
left: 336px;
top: 232px;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 20px;

`;

export const NewsListBox = styled.ul`
  margin-top: 20px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const NewsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc((100% - 60px) / 4);
`;

export const NewsH2 = styled.h2`
font-family: 'Manrope';
font-size: ${props => props.theme.fontSizes.fs24};
margin-top: 4px;
margin-bottom: 16px;
`;

export const NewsListText = styled.p`
font-family: 'Manrope';
font-size: ${props => props.theme.fontSizes.fs16};
  margin-bottom: 40px;
`;

export const Div = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
