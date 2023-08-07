import React from 'react';
import classNames from 'classnames/bind';
import styles from './theMovie.module.scss';
// import LinkButton from '@/components/LinkButton';
import Footer from '@/components/Footer';

const cx = classNames.bind(styles);

const TheMovie: React.FC = () => {
  return (
    <div className={cx('the_movie')}>
      <div className={cx('section_01')}>
        <div className={cx('arrow_icon')} />
        <div className={cx('logo_img')} />
        <div className={cx('menu_title')}>
          <strong>INTRODUC</strong>
        </div>
        <button className={cx('menu_btn')}>
          <span className={cx('line')} />
          <span className={cx('line')} />
          <span className={cx('line')} />
          <span className={cx('blind')}>메뉴</span>
        </button>
        <div className={cx('main_img')}>
          <div className={cx('thumb')}>
            <img className={cx('img')} src="/static/img/img_introduce_main_themovie_mo.jpg" />
          </div>
        </div>
      </div>
      <div className={cx('section_02')}>
        <strong className={cx('title')}>디페스타만을 위한 음악 영화</strong>
        <p className={cx('text')}>"이 무대는 꿈이지만, 이 순간은 현실이다"
          <br /><br />
          ‘THE MOVIE’는 그룹별 약 20분의 러닝타임 동안
          독특한 스토리라인과 화려한 영상,
          오직 디페스타만을 위한 아티스트의 퍼포먼스를 통해
          꿈의 무대를 현실로 만들어낸 한 편의 음악 영화입니다.
        </p>
        <div className={cx('img_wrap')}>
          <div className={cx('thumb_1')}>
            <img className={cx('img')} src="/static/img/logo_limited_edition.svg" />
          </div>
          <div className={cx('thumb_2')}>
            <img className={cx('img')} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iNSIgZmlsbD0iIzAwNDRDOCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxNi43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNC43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KPC9zdmc+Cg==" />
          </div>
          <p className={cx('text')}>
            한정판 블루레이 타이틀로 만나 보실 수 있습니다.<br />
            판매 일정은 추후 공지</p>
        </div>
      </div>
      <div className={cx('section_03')}>
        <div className={cx('img_wrap')}>
          <div className={cx('thumb_1')}>
            <img className={cx('img')} />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default TheMovie;