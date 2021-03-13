export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Tổng quan",
        to: "/admin/dashboard",
        icon: "cil-speedometer"
      },
      {
        _name: "CSidebarNavItem",
        name: "Danh mục",
        to: "/admin/categories",
        icon: "cilTask"
      },
      {
        _name: "CSidebarNavItem",
        name: "Banner",
        to: "/admin/banners",
        icon: "cilGrid"
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Sản phẩm",
        icon: "cilLaptop",
        route: "/product",
        items: [
          {
            name: "PC ĐỒ HỌA - WORKSTATION",
            to: "/product/pc-do-hoa-work-station"
          },
          {
            name: "Máy tính chơi game",
            to: "/product/may-tinh-choi-game"
          },
          {
            name: "Máy tính để bàn",
            to: "/product/may-tinh-de-ban"
          },
          {
            name: "Màn hình máy tính",
            to: "/product/man-hinh-may-tinh"
          },
          {
            name: "Gaming gear",
            to: "/product/gaming-gear"
          },
          {
            name: "Linh kiện máy tính",
            to: "/product/linh-kien-may-tinh"
          },
          {
            name: "Thế giới PC Gaming 2ND",
            to: "/product/the-gioi-pc-gaming-2nd"
          },
          {
            name: "Máy tính xách tay",
            to: "/product/may-tinh-xach-tay"
          }
        ]
      },
      {
        _name: "CSidebarNavItem",
        name: "Tin tức",
        to: "/admin/news",
        icon: "cilGlobeAlt"
      },
      {
        _name: "CSidebarNavItem",
        name: "Tham số",
        to: "/admin/params",
        icon: "cilFile"
      },
      {
        _name: "CSidebarNavItem",
        name: "Video",
        to: "/admin/video",
        icon: "cilStar"
      },
      {
        _name: "CSidebarNavItem",
        name: "Cài đặt",
        to: "/admin/settings",
        icon: "cilSettings"
      }
    ]
  }
];
