import {
  CrownOutlined,
  ScheduleOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { iconStyle } from "./userStyle";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const adminItems = [
  getItem("角色管理", "角色管理", <CrownOutlined style={iconStyle} />, [
    getItem("员工基本信息", "员工基本信息"),
    getItem("员工福利", "员工福利"),
  ]),
  getItem("所有订单", "所有订单", <ScheduleOutlined style={iconStyle} />),
  getItem("照片秀", "照片秀", <CameraOutlined style={iconStyle} />),
];
export default adminItems;
