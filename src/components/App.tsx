import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import '../styles/index.sass';
import AppRouter from './AppRouter';
import MovieHeader from './MovieHeader/MovieHeader';
import { AuthContextProvider } from '../context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <div className="app">
        <Layout>
          <Header>
            <MovieHeader />
          </Header>
          <Content>
            <AppRouter />
          </Content>
        </Layout>
      </div>
    </AuthContextProvider>
  );
}

export default App;
