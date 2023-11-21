import { ConfigProvider, Flex, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';
import type { MenuProps } from 'antd';
import s from './MovieHeader.module.sass';
import Search from '../Search/Search';

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

const items: MenuItem[] = [
  getItem('Фильмы', '1', <NavLink to={'/'} />),
  getItem('Избранное', '2', <NavLink to={'/favorites'} />),
  getItem('История', '3', <NavLink to={'/history'} />),
  getItem('Вход', '4', <NavLink to={'/authorization'} />),
];

const MovieHeader = () => {
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
          items={items}
          triggerSubMenuAction="click"
          className={s.menu}
        />
      </ConfigProvider>
    </div>
  );
};

export default MovieHeader;
