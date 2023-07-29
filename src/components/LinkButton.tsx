import React from 'react';
import classNames from 'classnames/bind';
import styles from './LinkButton.module.scss';

const cx = classNames.bind(styles);

type TOwnProps = {
  text: string
  href: string
}

const LinkButton: React.FC<TOwnProps> = ({ text, href }) => {
  return (
    <a className={cx('link_btn')} href={href}>
      <span className={cx('text')}>{text}</span>
      <span className={cx('ico')}>
        <img src="/static/img/ico_arrow_basic.svg" alt="" className={cx('arrow_img')} />
      </span>
    </a>
  )
}

export default LinkButton;