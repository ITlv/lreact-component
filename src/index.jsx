import React, {Component, useState, memo} from 'react';
import styles from './index.less';
function Index() {
    return <div className={styles.color}>
        组件包测试
    </div>
}

export default memo(Index);