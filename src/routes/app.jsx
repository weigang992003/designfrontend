import HomePage from "views/Home/Home.jsx";
import Load from "views/Home/Load.jsx";
import Jichu from "views/Home/Jichu.jsx";
import DecorationStyle from "views/Decoration/Style.jsx";
import DecorationStyleChoose from "views/Decoration/StyleChoose.jsx";
import Biaozhun from "views/Decoration/Biaozhun.jsx";
import Huxingtu from "views/Decoration/Huxingtu.jsx";
import HuxingtuChoose from "views/Decoration/HuxingtuChoose.jsx";
import DecorationRoom from "views/Decoration/Room.jsx";
import ZuiZhong from "views/Decoration/ZuiZhong.jsx";
import Sheng from "views/Decoration/Sheng.jsx";
import Shengji from "views/Decoration/Shengji.jsx";
import ContactUs from "views/UserProfile/UserProfile.jsx";
import Siren from "views/Decoration/Siren.jsx";
import Gexing from "views/SiRen/Gexing.jsx";

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
    path: "/jichu",
    sidebarName: "基础",
    navbarName: "",
    icon: AccountBalance,
    component: Jichu
  },
  {
    path: "/siren",
    sidebarName: "个性化定制",
    navbarName: "",
    icon: AccountBalance,
    component: Siren
  },
  {
    path: "/gexinghua/:module",
    sidebarName: "个性化定制",
    navbarName: "",
    icon: AccountBalance,
    component: Gexing
  },
  {
    path: "/home",
    sidebarName: "户型选择",
    navbarName: "户型选择",
    icon: Dashboard,
    component: HomePage
  },
  {
    path: "/stylechoose",
    sidebarName: "整体风格",
    navbarName: "风格定位",
    icon: BubbleChart,
    component: DecorationStyleChoose
  },
  {
    path: "/biaozhun",
    sidebarName: "整体风格",
    navbarName: "风格定位",
    icon: BubbleChart,
    component: Biaozhun
  },
  {
    path: "/style",
    sidebarName: "整体风格",
    navbarName: "档次定位",
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
    path: "/huxingtuchoose",
    sidebarName: "户型图",
    navbarName: "户型图选择",
    icon: BubbleChart,
    component: HuxingtuChoose
  },
  {
    path: "/rooms/:houseType/:houseStyle",
    sidebarName: "房间选项",
    navbarName: "房间定制",
    icon: LibraryBooks,
    component: DecorationRoom
  },
  {
    path: "/shengji/:module",
    sidebarName: "升级模块选择",
    navbarName: "升级模块选择",
    icon: ContentPaste,
    component: Shengji
  },
  {
    path: "/shengji",
    sidebarName: "升级模块选择",
    navbarName: "升级模块选择",
    icon: ContentPaste,
    component: Sheng
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
