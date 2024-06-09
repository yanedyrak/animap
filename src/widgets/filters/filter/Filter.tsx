import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { ConfigProvider, Dropdown, Space } from "antd";
import styles from "./Filter.module.scss";

export const Filter = ({
  children,
  items,
}: {
  children: string;
  items: MenuProps["items"];
}) => (
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
