import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Introduce: React.FC = () => {
  return (
    <div className={cx('introduce')}>
      Introduce
    </div>
  )
}

export default Introduce;