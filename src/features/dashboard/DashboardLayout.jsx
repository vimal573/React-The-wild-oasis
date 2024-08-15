/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import Spinner from '../../ui/Spinner';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBooking } = useRecentBookings();
  const { isLoading: isLoadingStay, stays, confirmedStays } = useRecentStays();

  if (isLoadingBooking || isLoadingStay) return <Spinner />;

  console.log(isLoadingStay, stays, confirmedStays);

  return (
    <StyledDashboardLayout>
      <div>Statastics</div>
      <div>Today's activity</div>
      <div>Chart stay duration</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
