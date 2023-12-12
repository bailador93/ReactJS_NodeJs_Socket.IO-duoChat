import { Layout } from './CORE/Components/Layout';
import { Header } from './CORE/Components/UI/Header';
import { ConnectSocketIOProvider } from './CORE/Hooks/useConnectSocketIOContext';


function App() {

  return (
    <ConnectSocketIOProvider>
      <Header />
      <Layout />
    </ConnectSocketIOProvider>
  );
}

export default App;
