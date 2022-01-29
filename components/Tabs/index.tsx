import { Tabs as AntdTabs } from 'antd';
import { TabsProps as AntdTabsProps } from 'antd/lib/tabs';
import './index.less';
import React from 'react';
import classNames from 'classnames';

export interface TabsProps extends AntdTabsProps {
  hiddenTabButton?: boolean;
}
const Tabs = (props: TabsProps) => {
  const { children, hiddenTabButton, className, ...option } = props;
  const hiddenClass = hiddenTabButton ? 'lidig-tab-hiddenTabsBtn' : '';
  return (
    <AntdTabs className={classNames(hiddenClass, 'lidig-tab-tabs', className)} {...option}>
      {children}
    </AntdTabs>
  );
};
Tabs.TabPane = AntdTabs.TabPane;

export default Tabs;
