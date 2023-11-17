import { Button, ConfigProvider, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';
import { SearchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import s from './MovieHeader.module.sass';

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
  getItem(
    '',
    '1',
    <Button type="text">
      <SearchOutlined style={{ fontSize: '26px', color: '#fff' }} />
    </Button>
  ),
  getItem('Фильмы', '2', <NavLink to={'/'} />),
  getItem('Избранное', '3', <NavLink to={'/favorites'} />),
  getItem('История', '4', <NavLink to={'/history'} />),
  getItem('Вход', '5', <NavLink to={'/authorization'} />),
];

const MovieHeader = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'transparent',
        },
      }}
    >
      <div className={s.container}>
        <div>
          <NavLink to={'/'}>
            <img src={logo} alt="logo" className={s.logo} />
          </NavLink>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          triggerSubMenuAction="click"
          className={s.menu}
        />
      </div>
    </ConfigProvider>
  );
};

export default MovieHeader;
