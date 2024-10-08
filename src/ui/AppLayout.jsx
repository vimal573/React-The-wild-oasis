import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const Contianer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />

      <Main>
        <Contianer>
          <Outlet />
        </Contianer>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
