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
  {
    path: "",
    title: "Govt Jobs",
    icon: "ft-edit",
    class: "has-sub",
    badge: "New",
    badgeClass: "badge badge-pill badge-primary float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "/govt-jobs/create",
        title: "NGX Wizard",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      }
    ]
  }
];
