import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);


const Menu: React.FC = () => {

    return (
        <div className={cx('menu')}>
            <div className={cx('logo_wrap')}>
                <div className={cx('thumb')}>
                    <img src="/static/img/logo.svg"></img>
                </div>
            </div>
            <div className={cx('menu_wrap')}>
                <ul className={cx('list_set')}>
                    <li className={cx('list')}>
                        <div className={cx('menu_title')}>
                            INTRODUCE
                        </div>
                        <div className={cx('menu_item')}>
                            <a className={cx('text')}>D'FESTA</a>
                            <a className={cx('text')}>THE MOVIE</a>
                            <a className={cx('text')}>THE EXHIBITION</a>
                            <a className={cx('text')}>THE EXPERIENCE</a>
                        </div>
                    </li>
                    <li className={cx('list')}>
                        <div className={cx('menu_title')}>
                            ARTIST
                        </div>
                        <div className={cx("menu_item")}>
                            <a className={cx('text')}>ENHYPEN</a>
                            <a className={cx('text')}>STRAY KIDS</a>
                            <a className={cx('text')}>NCT 127</a>
                            <a className={cx('text')}>SEVENTEEN</a>
                            <a className={cx('text')}>NU'EST</a>
                            <a className={cx('text')}>TXT</a>
                            <a className={cx('text')}>NCT DREAM</a>
                            <a className={cx('text')}>TWICW</a>
                            <a className={cx('text')}>BTS</a>

                        </div>
                    </li>
                    <li className={cx('list')}>
                        <div className={cx('menu_title')}>
                            SPOTLIGHT
                        </div>
                    </li>
                    <li className={cx('list')}>
                        <div className={cx('menu_title')}>
                            NOW ARRIVAL
                        </div>
                    </li>
                    <li className={cx('list')}>
                        <div className={cx('menu_title')}>
                            HISTORY
                        </div>
                        <div className={cx('menu_item')}>
                            <a className={cx('text')}>D'FESTA TOKYO I</a>
                            <a className={cx('text')}>D'FESTA SEOUL</a>
                        </div>
                    </li>
                    <li className={cx('list')}>
                        <div className={cx('menu_title')}>
                            GOODS
                        </div>
                    </li>

                </ul>
            </div>
        </div >
    )
}

export default Menu;