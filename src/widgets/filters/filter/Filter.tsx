import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { ConfigProvider, Dropdown, Space } from "antd";
import styles from "./Filter.module.scss";
const items: MenuProps["items"] = [
  {
    label: "First",
    key: "0",
  },
  {
    label: "Second",
    key: "1",
  },
];

export const Filter = ({ children }) => (
  <ConfigProvider
    theme={{
      components: {
        Dropdown: {
          fontSize: 20,
        },
      },
    }}
  >
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <div className={styles.button}>
            <p>{children}</p>
            <DownOutlined />
          </div>
        </Space>
      </a>
    </Dropdown>
  </ConfigProvider>
);
