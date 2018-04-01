import HomePage from "views/Home/Home.jsx";
import Load from "views/Home/Load.jsx";
import DecorationStyle from "views/Decoration/Style.jsx";
import Huxingtu from "views/Decoration/Huxingtu.jsx";
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
    path: "/style",
    sidebarName: "整体风格",
    navbarName: "风格定位",
    icon: BubbleChart,
    component: DecorationStyle
  },
  {
    path: "/huxingtu",
    sidebarName: "户型图",
    navbarName: "户型图",
    icon: BubbleChart,
    component: Huxingtu
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
    sidebarName: "升级模块选择",
    navbarName: "升级模块选择",
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
    sidebarName: "确认方案",
    navbarName: "确认方案",
    icon: AccountCircle,
    component: ContactUs
  },
  { redirect: true, path: "/", to: "/load", navbarName: "Redirect" }
];

export default appRoutes;
