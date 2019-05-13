import { RouteInfo } from "./sidebar.metadata";

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Tables",
    icon: "ft-grid",
    class: "has-sub",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: [
      {
        path: "/tables/smart",
        title: "Smart Tables",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      }
    ]
  },
];
