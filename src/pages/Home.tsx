import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useRecoilValue } from 'recoil'
import { testState } from '@/recoil/test';

const cx = classNames.bind(styles);

const Home: React.FC = () => {
  const test = useRecoilValue(testState)

  console.log(test)

  return (
    <div className={cx('home')}>
      Home
    </div>
  )
}

export default Home;