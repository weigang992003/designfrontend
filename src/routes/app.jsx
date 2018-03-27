import HomePage from "views/Home/Home.jsx";
import Load from "views/Home/Load.jsx";
import DecorationStyle from "views/Decoration/Style.jsx";
import DecorationRoom from "views/Decoration/Room.jsx";
import ZuiZhong from "views/Decoration/ZuiZhong.jsx";
import Zhucai from "views/Decoration/Zhucai.jsx";
import ContactUs from "views/UserProfile/UserProfile.jsx";

import {
  Dashboard,
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
    navbarName: "",
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
    path: "/zhucai",
    sidebarName: "主材选择",
    navbarName: "主材选择",
    icon: ContentPaste,
    component: Zhucai
  },
  {
    path: "/case",
    sidebarName: "最终方案",
    navbarName: "最终方案",
    icon: ContentPaste,
    component: ZuiZhong
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
