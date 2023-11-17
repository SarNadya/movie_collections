import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import '../styles/index.sass';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="app">
      <Layout>
        <Header>
          <NavLink to={'/'}>Главная</NavLink>
          <NavLink to={'/favorites'}>Избранное</NavLink>
          <NavLink to={'/history'}>История</NavLink>
          <NavLink to={'/authorization'}>Вход</NavLink>
        </Header>
        <Content>
          <AppRouter />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
