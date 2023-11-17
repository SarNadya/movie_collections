import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import '../styles/index.sass';
import AppRouter from './AppRouter';
import MovieHeader from './MovieHeader/MovieHeader';

function App() {
  return (
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
  );
}

export default App;
