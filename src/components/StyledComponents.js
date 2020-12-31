import styled from 'styled-components';

export const StyledH1 = styled.h1.attrs({
  className: `mt2 mb0 baskerville i fw1 f1`,
})``;

export const StyledH2 = styled.h1.attrs({
  className: `mt2 mb0 f6 fw4 ttu tracked`,
})`
  color: ${(props) => (props.primary ? 'blue' : 'black')};
`;

export const StyledLoginBtn = styled.button.attrs({
  className: `f6 f5-l bg-white pointer hover-bg-lightest-blue dib pa3 ph4-l`,
})`
  border: none;
  outline: none;
`;
