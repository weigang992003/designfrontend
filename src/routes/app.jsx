import HomePage from "views/Home/Home.jsx";
import DecorationStyle from "views/Decoration/Style.jsx";
import DecorationRoom from "views/Decoration/Room.jsx";
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/home",
    sidebarName: "首页",
    navbarName: "户型选择",
    icon: Dashboard,
    component: HomePage
  },
  {
    path: "/style/:houseType",
    sidebarName: "风格选择",
    navbarName: "风格选择",
    icon: BubbleChart,
    component: DecorationStyle
  },
  {
    path: "/rooms/:houseType/:houseStyle",
    sidebarName: "定制详情",
    navbarName: "房间定制",
    icon: LibraryBooks,
    component: DecorationRoom
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default appRoutes;
