import { useNetworkManager } from '../hooks/use-manager';
import ConnectWallet from './ConnectWallet';
import DashboardBody from './DashboardBody';

function Dashboard() {
  const { isAuthenticated } = useNetworkManager();
  return isAuthenticated ? <DashboardBody /> : <ConnectWallet />;
}

export default Dashboard;
