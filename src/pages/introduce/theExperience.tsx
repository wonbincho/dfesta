import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import LinkButton from '@/components/LinkButton';
import Footer from '@/components/Footer';

const cx = classNames.bind(styles);

const TheExperience: React.FC = () => {
  return (
    <div className={cx('the_eperience')}>

      <Footer />
    </div >
  )
}

export default TheExperience;