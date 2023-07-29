import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      <div className={cx('layout_inner')}>
        <div className={cx('introduce')}>
          <ul>
            <li><a href="/introduce/the-movie">the movie</a></li>
            <li><a href="/introduce/the-exhibition">the exhibition</a></li>
            <li><a href="/introduce/the-experience">the EXPERIENCE</a></li>
          </ul>
        </div>
        <p className={cx('copy')}>&copy; dispatch news group. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;