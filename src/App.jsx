import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Button from './ui/Button';
import Heading from './ui/Heading';
import Row from './ui/Row';
import Input from './ui/Input';

const StyledApp = styled.main`
  padding: 20px;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>

            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert('check in')}>Check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert('check out')}
              >
                Check Out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
