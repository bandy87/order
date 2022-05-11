import React, { FC } from 'react'
import { Layout, Button, Dropdown, Menu, Space, Badge } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import styles from './AppHeader.module.css'
import { UserOutlined, ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons'
import { Dispatch, RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'

const { Header } = Layout

const AppHeader: FC = () => {
  const location = useLocation()
  // TODO: Menu
  const activeKey = location.pathname
  const isLoggedIn = useSelector((state: RootState) => state.auth?.isLoggedIn)
  const user = useSelector((state: RootState) => state.auth.userData)

  const dispatch = useDispatch<Dispatch>()

  const dropdownItems = (
    <Menu
      items={[
        {
          label: 'Profile',
          key: 'profile',
          onClick: () => {}
        },
        {
          label: 'Logout',
          key: 'logout',
          onClick: () => { dispatch.auth.resetUser() }
        }
      ]}
    />
  )

  return (
    <Header className={`${styles.container} d-flex`}>
      <div className={styles.logo}>
        <Link to={'/'}>FOODER</Link>
      </div>
      <div className={`${styles.navbar} flex-grow-1 pl-5`}>
        <nav>
          <Link to={'/menu'}>Menu</Link>
        </nav>
      </div>
      <div className={`${styles.userMenu}`}>
        <nav>
          <Space size={20}>
            <Badge count={2}>
              <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} onClick={() => { dispatch.app.toggleCart(true) }} />
            </Badge>
            {
              isLoggedIn ? (
              <div>
                <Space size={10}>
                  {user?.name}
                  <Dropdown overlay={dropdownItems} trigger={['click']} align={{offset: [-30, 3]}}>
                    <Button type="primary" shape="circle" icon={<UserOutlined />} />
                  </Dropdown>
                </Space>
              </div>
              ) :
              <div>
                <Space size={10}>
                Login: <Button type="primary" shape="circle" icon={<LoginOutlined />} onClick={() => { dispatch.auth.toggleModal(true) }} />
                </Space>
              </div>
            }
          </Space>
        </nav>
      </div>
    </Header>
  )
}

export default AppHeader
