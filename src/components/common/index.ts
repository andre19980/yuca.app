import styled from 'styled-components';

interface Theme {
  primary?: boolean;
  secundary?: boolean;
  noMargin?: boolean;
}

export const Divider = styled.div<{ color: string }>`
  background-color: ${ props => props.color };
  width: 50px;
  height: 4px;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Button = styled.div<{theme: Theme}>`
  display: flex;
  align-items: center;
  padding: 0px 16px;
  margin-left: ${props => props.noMargin ? 0 : '20px'};
  height: 3em;
  background: ${props => props.primary ? '#13C081' : '#FFFFFF'};
  width: fit-content;

  color: ${props => props.primary ? '#FFFFFF' : '#13C081'};;
  font-weight: bold;
  font-size: 0.9em;

  border: 1px solid #F2F2F2;
  box-sizing: border-box;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 36px;

  :hover {
    cursor: pointer;
    background: ${props => props.primary ? 'rgba(19, 192, 129, 0.7)' : 'rgba(0, 0, 0, 0.1)' };
    border: 0;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  }
`;
