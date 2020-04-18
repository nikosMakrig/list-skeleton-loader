import React from 'react';

import styled, { keyframes} from 'styled-components'

const loading = keyframes`
  0% {
    background-position: 0 0; 
  }
  100% {
    background-position: 300px 0; 
  }
`;

const PlaceholderContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const PlaceholderDetailsWrapper = styled.div`
  display: flex;
 flex-direction: column;
 margin-left: 30px;
`;

const PlaceholderSubmitter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlaceholderStyle = styled.small`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${loading};
  animation-timing-function: linear;
  background: linear-gradient(
      to right,
     #f2f2f4 10%,
      #f9f9f9 25%,
      #f2f2f4 33%
    );
  --width-size: 300px;
  background-size: var(--width-size) 100%;
  border-radius: ${({ radius }) => radius}px;
  height: ${({ height }) => height}px;
  width:  ${({ width }) => width}px;
  margin-bottom:  ${({ margin }) => margin}px;
`;

const Placeholder = () => (
  <PlaceholderContainer>
    <PlaceholderStyle width={130} height={100} radius={0} margin={0} />
    <PlaceholderDetailsWrapper>
    {Array.from({ length: 1 }).map((_, i) => (
      <React.Fragment key={`id_${i}`}>
        <PlaceholderStyle width={50} height={16} radius={0} margin={14} />
        <PlaceholderStyle width={120} height={16} radius={0} margin={10} />
        <PlaceholderStyle width={160} height={16} radius={0} margin={20} />
        <PlaceholderSubmitter>
        <PlaceholderStyle width={120} height={16} radius={0} margin={10} />
        <PlaceholderStyle width={30} height={30} radius={50} margin={10} />
        </PlaceholderSubmitter>
      </React.Fragment>
    ))}
    </PlaceholderDetailsWrapper>
  </PlaceholderContainer>
);
export default Placeholder;
