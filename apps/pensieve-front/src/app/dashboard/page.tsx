import DashboardLayout from '@/app/dashboard/dashboardLayout';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Dashboard' };

const Dashboard = () => {
  return <DashboardLayout />;
};

export default Dashboard;
