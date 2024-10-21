/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { connect } from 'react-redux';

import AppMenuItem from './AppMenuItem';
import { MenuProvider } from './context/MenuContext';

const AppMenu = props => {
  const getDanhMuc = () => {
    const items = [
      {
        label: 'Hành động thu hồi nợ',
        icon: 'pi pi-fw pi-box',
        to: '/danh-muc-hanh-dong-thu-hoi-no',
      },
      // {
      //   label: 'Kết quả thu hồi nợ',
      //   icon: 'pi pi-fw pi-inbox',
      // },
      // {
      //   label: 'Biểu mẫu',
      //   icon: 'pi pi-fw pi-file-import',
      // },
      // {
      //   label: 'Các bước khởi kiện',
      //   icon: 'pi pi-fw pi-list',
      // },
    ];
    if (props.user.role === 'NDH') {
      items.push({
        label: 'Nhân viên',
        icon: 'pi pi-fw pi-users',
        to: '/nhan-vien',
      });
    }

    return items;
  };

  const model = [
    {
      label: 'Trang chủ',
      items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' }],
    },
    {
      label: 'Quản lí danh mục',
      items: getDanhMuc(),
    },
    {
      label: 'Quản lí khách hàng nợ xấu',
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
        { label: 'Tờ trình đánh giá hởi kiện', icon: 'pi pi-fw pi-file-export', to: '/to-trinh-khoi-kien' },
        { label: 'Tờ trình giảm lãi', icon: 'pi pi-fw pi-file-export', to: '/to-trinh-mien-giam' },
      ],
    },
    {
      label: 'Quản lí quá trình khởi kiện - thi hành án',
      items: [
        {
          label: 'Quản lý khởi kiện',
          icon: 'pi pi-fw pi-users',
          to: '/khoi-kien',
        },
        {
          label: 'Quản lý lịch hẹn',
          icon: 'pi pi-fw pi-calendar',
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
    {
      label: 'Xuất thông báo phí',
      items: [
        {
          label: 'Gửi email',
          icon: 'pi pi-fw pi-envelope',
        },
      ],
    },
    {
      label: 'Quản lí tài sản sau thu hồi',
      items: [
        {
          label: 'Quản lý bất động sản',
          icon: 'pi pi-fw pi-building',
          to: '/quan-ly-bat-dong-san',
        },
      ],
    },
  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) =>
          !item?.seperator ? (
            <AppMenuItem item={item} root index={i} key={item.label} />
          ) : (
            <li className="menu-separator"></li>
          )
        )}
      </ul>
    </MenuProvider>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(AppMenu);
