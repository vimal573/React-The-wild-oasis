import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Button from './ui/Button';

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Button onClick={() => alert('check in')}>Check In</Button>
        <Button onClick={() => alert('check out')}>Check Out</Button>
      </StyledApp>
    </>
  );
}

export default App;
