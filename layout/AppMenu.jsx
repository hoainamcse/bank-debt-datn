/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react'
import AppMenuItem from './AppMenuItem'
import { LayoutContext } from './context/LayoutContext'
import { MenuProvider } from './context/MenuContext'
import Link from 'next/link'
import { connect } from 'react-redux'

const AppMenu = (props) => {
  const { layoutConfig } = useContext(LayoutContext)
  const getDanhMuc = () => {
    if (props.user.role === 'NDH') {
      return [
        {
          label: 'Hành động thu hồi nợ',
          icon: 'pi pi-fw pi-box',
          to: '/danh-muc-hanh-dong-thu-hoi-no',
        },
        // {
        //   label: 'Kết quả thu hồi',
        //   icon: 'pi pi-fw pi-inbox',
        // },
        // {
        //   label: 'Biểu mẫu',
        //   icon: 'pi pi-fw pi-paperclip',
        // },
        {
          label: 'Nhân viên',
          icon: 'pi pi-fw pi-users',
          to: '/nhan-vien',
        },
      ]
    } else {
      return [
        {
          label: 'Hành động thu hồi nợ',
          icon: 'pi pi-fw pi-box',
          to: '/danh-muc-hanh-dong-thu-hoi-no',
        },
        // {
        //   label: 'Kết quả thu hồi',
        //   icon: 'pi pi-fw pi-inbox',
        // },
        // {
        //   label: 'Biểu mẫu',
        //   icon: 'pi pi-fw pi-paperclip',
        // },
      ]
    }
  }

  const model = [
    {
      label: 'Trang chủ',
      items: [
        // { label: 'Dashboard mẫu', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' },
      ],
    },
    {
      label: 'Danh mục',
      items: getDanhMuc(),
    },
    {
      label: 'Danh sách',
      items: [
        {
          label: 'Khách hàng',
          icon: 'pi pi-fw pi-users',
          to: '/khach-hang',
        },
        {
          label: 'Hành động thu hồi nợ',
          icon: 'pi pi-fw pi-list',
          to: '/hanh-dong-thu-hoi-no',
        },
        {
          label: 'Tờ trình',
          icon: 'pi pi-fw pi-file-edit',
          items: [
            { label: 'Khởi kiện', icon: 'pi pi-fw pi-file', to: '/to-trinh-khoi-kien' },
            { label: 'Miễn giảm', icon: 'pi pi-fw pi-file', to: '/to-trinh-mien-giam' },
          ],
        },
      ],
    },
    {
      label: 'Khởi kiện và thi hành án',
      items: [
        {
          label: 'Quản lý khởi kiện',
          icon: 'pi pi-fw pi-users',
          to: '/khoi-kien',
        },
        {
          label: 'Quản lý lịch hẹn',
          icon: 'pi pi-fw pi-list',
          to: '/lich-hen',
        },
        {
          label: 'Quản lý tạm ứng án phí',
          icon: 'pi pi-fw pi-file-edit',
          to: '/tam-ung-an-phi',
        },
        {
          label: 'Quản lý thi hành án',
          icon: 'pi pi-fw pi-file-edit',
          to: '/thi-hanh-an',
        },
      ],
    },
  ]

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item?.seperator ? (
            <AppMenuItem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className="menu-separator"></li>
          )
        })}
      </ul>
    </MenuProvider>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AppMenu)
