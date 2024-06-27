export const MenuItems = [
  {
    title: "Home",
    url: "/Home",
    cName: "nav-links",
    icon: "fa-solid fa-house",
  },
  {
    title: "Map",
    url: "#",
    cName: "nav-links dropdown-toggle",
    icon: "fa-solid fa-map",
    submenu: [
      {
        title: "3D Map",
        url: "/Map",
        cName: "dropdown-item",
      },
      {
        title: "Clustering Map",
        url: "/Clustering",
        cName: "dropdown-item-custom",
      },
    ],
  },
  {
    title: "Dashboard",
    url: "/Dashboard",
    cName: "nav-links",
    icon: "fa-solid fa-chart-simple",
  },
  {
    title: "About",
    url: "/About",
    cName: "nav-links",
    icon: "fa-solid fa-circle-info",
  },
];
