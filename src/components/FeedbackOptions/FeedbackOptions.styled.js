import styled from '@emotion/styled/macro';

const getBgColor = ({ option }) => {
  console.log(option);
  switch (option) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'tomato';
    case 'bad':
      return 'red';

    default:
      return 'transparent';
  }
};

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;
  margin: 0 5px;
  padding: 10px 20px;
  font-size: 16px;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  transition: transform 150ms ease-in;
  background-color: ${getBgColor};
  &:hover {
    transform: scale(1.1);
  }
`;
