import HomePage from "views/Home/Home.jsx";
import Load from "views/Home/Load.jsx";
import DecorationStyle from "views/Decoration/Style.jsx";
import DecorationRoom from "views/Decoration/Room.jsx";
import DecorationCase from "views/Decoration/Case.jsx";
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import ContactUs from "views/UserProfile/UserProfile.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  AccountBalance,
  AccountCircle,
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/load",
    sidebarName: "首页",
    navbarName: "首页",
    icon: AccountBalance,
    component: Load
  },
  {
    path: "/home",
    sidebarName: "户型选择",
    navbarName: "户型选择",
    icon: Dashboard,
    component: HomePage
  },
  {
    path: "/style/:houseType",
    sidebarName: "整体风格",
    navbarName: "风格定位",
    icon: BubbleChart,
    component: DecorationStyle
  },
  {
    path: "/rooms/:houseType/:houseStyle",
    sidebarName: "房间选项",
    navbarName: "房间定制",
    icon: LibraryBooks,
    component: DecorationRoom
  },
  {
    path: "/case",
    sidebarName: "最终方案",
    navbarName: "最终方案",
    icon: ContentPaste,
    component: DecorationCase
  },
  {
    path: "/contactus",
    sidebarName: "联系我们",
    navbarName: "联系我们",
    icon: AccountCircle,
    component: ContactUs
  },
  { redirect: true, path: "/", to: "/load", navbarName: "Redirect" }
];

export default appRoutes;
