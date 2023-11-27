import { useContext } from 'react';
import { ConfigProvider, Flex, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';
import type { MenuProps } from 'antd';
import s from './MovieHeader.module.sass';
import Search from '../Search/Search';
import { AuthContext } from '../../context/AuthContext';
import ButtonLogout from '../UI/ButtonLogout/ButtonLogout';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items1: MenuItem[] = [
  getItem('Фильмы', '1', <NavLink to={'/'} />),
  getItem('Избранное', '2', <NavLink to={'/favorites'} />),
  getItem('История', '3', <NavLink to={'/history'} />),
  getItem('Вход', '4', <NavLink to={'/login'} />),
];

const items2: MenuItem[] = [
  getItem('Фильмы', '1', <NavLink to={'/'} />),
  getItem('Избранное', '2', <NavLink to={'/favorites'} />),
  getItem('История', '3', <NavLink to={'/history'} />),
  getItem('', '4', <ButtonLogout />),
];

const MovieHeader = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className={s.container}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#001529',
          },
        }}
      >
        <Flex
          align="center"
          gap="large"
          justify="space-between"
          style={{ width: '100%' }}
        >
          <NavLink to={'/'}>
            <img src={logo} alt="logo" className={s.logo} />
          </NavLink>
          <Search />
        </Flex>
        <Menu
          theme="dark"
          mode="horizontal"
          items={isAuth ? items2 : items1}
          triggerSubMenuAction="click"
          className={s.menu}
        />
      </ConfigProvider>
    </div>
  );
};

export default MovieHeader;
