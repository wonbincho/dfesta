import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './theMovie.module.scss';
import LinkButton from '@/components/LinkButton';
import Footer from '@/components/Footer';

const cx = classNames.bind(styles);

const ImageList = [
  {
    thumb: '/static/img/img_movie_gallery00.jpg',
  },
  {
    thumb: '/static/img/img_movie_gallery01.jpg',
  },
  {
    thumb: '/static/img/img_movie_gallery02.jpg',
  },
  {
    thumb: '/static/img/img_movie_gallery03.jpg',
  },
  {
    thumb: '/static/img/img_movie_gallery04.jpg',
  },
  {
    thumb: '/static/img/img_movie_gallery05.jpg',
  },
  {
    thumb: '/static/img/img_movie_gallery06.jpg',
  },
  {
    thumb: '/static/img/img_movie_gallery07.jpg',
  },
]

const TheMovie: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? ImageList.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === ImageList.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className={cx('the_movie')}>
      <div className={cx('section_01')}>
        <div className={cx('logo_img')} />
        <div className={cx('menu_title')}>
          <strong>INTRODUCE</strong>
        </div>
        <div className={cx('sub_title')}>
          <strong>THE MOVIE</strong>
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
        <div className={cx('text_wrap')}>
          <strong className={cx('title')}>디페스타만을 위한<br /> 음악 영화</strong>
          <p className={cx('text')}>"이 무대는 꿈이지만, 이 순간은 현실이다"
            <br /><br />
            ‘THE MOVIE’는 그룹별 약 20분의 러닝타임 동안
            독특한 스토리라인과 화려한 영상,
            오직 디페스타만을 위한 아티스트의 퍼포먼스를 통해
            꿈의 무대를 현실로 만들어낸 한 편의 음악 영화입니다.
          </p>
        </div>
        <div className={cx('img_wrap')}>
          <div className={cx('thumb_1')}>
            <img className={cx('img')} src="/static/img/logo_limited_edition_white.svg" />
          </div>
          <div className={cx('thumb_2')}>
            <img className={cx('img')} src="/static/img/img_limited_emblem.svg" />
          </div>
          <p className={cx('text')}>
            한정판 블루레이 타이틀로 만나 보실 수 있습니다.<br />
            판매 일정은 추후 공지</p>
        </div>
      </div>
      <div className={cx('section_03')}>
        <div className={cx('img_wrap')}>
          <div className={cx('thumb_1')}>
            <img className={cx('img')} src="/static/img/img_themovie_01.jpg" />
          </div>
          <div className={cx('thumb_2')}>
            <img className={cx('img')} src="/static/img/img_themovie_02.jpg" />
          </div>
          <div className={cx('thumb_3')}>
            <img className={cx('img')} src="/static/img/img_themovie_03.jpg" />
          </div>
          <div className={cx('thumb_4')}>
            <img className={cx('img')} src="/static/img/img_themovie_04.jpg" />
          </div>
          <div className={cx('thumb_5')}>
            <img className={cx('img')} src="/static/img/img_themovie_05.jpg" />
          </div>
          <div className={cx('thumb_6')}>
            <img className={cx('img')} src="/static/img/img_themovie_06.jpg" />
          </div>
          <div className={cx('thumb_7')}>
            <img className={cx('img')} src="/static/img/img_themovie_07.jpg" />
          </div>
          <div className={cx('thumb_8')}>
            <img className={cx('img')} src="/static/img/img_themovie_08.jpg" />
          </div>
        </div>
      </div>
      <div className={cx('section_04')}>
        <div className={cx('text_wrap')}>
          <strong className={cx('title')}>“K-POP의 모든 것들을<br />
            모아온 아키비스트의<br />
            아카이브가 열린다”</strong>
          <p className={cx('text')}>
            디페스타만의 컨셉츄얼한 스토리가 만들어내는 긴장감은<br />
            국내 최고 수준의 기술력을 통해 더욱 고조됩니다.<br />
            <br />
            4면의 고해상도 LED 패널을 통한 리얼라이팅 효과와<br />
            세계 최고 수준의 XR 기술,<br />
            그리고 5.1 채널 사운드로 제작된 무대 음향이 더해져<br />
            각 그룹만의 의미있는 곡과 퍼포먼스를 섬세하고<br />
            현실감 있게 전달합니다.<br />
            <br />
            그리웠던 함성, 반짝이는 조명을 가로지르는 서울숲의<br />
            거대한 건축물 속에서 펼쳐지는 강렬한 무대 위,<br />
            우리가 사랑하는 K-POP 아티스트만을 특별한 퍼포먼스는<br />
            함께할 수 있는 무대만을 기다리는 팬들의<br />
            갈증을 단박에 해소합니다.<br />
            <br />
            그리고 어디에서도 볼 수 없었던 각 무대의 비하인드 씬들까지<br />
            더해진 ‘THE MOVIE’는 디페스타만을 위한 무대를 넘어<br />
            나만을 위한 무대가 되는 특별한 순간을 선사합니다.
          </p>
        </div>

      </div>
      <div className={cx('section_05')}>
        <button className={cx('prev_btn')} onClick={handlePrevClick} />
        <div className={cx('img_wrap')}>
          <div className={cx('thumb')}>
            <img className={cx('img')} src={ImageList[activeIndex].thumb} />
          </div>
        </div>
        <button className={cx('next_btn')} onClick={handleNextClick}></button>
      </div>
      <div className={cx('section_06')}>
        <div className={cx('img_wrap')}>
          <div className={cx('thumb_1')}>
            <img className={cx('img')} src="/static/img/img_themovie_09.jpg" />
          </div>
          <div className={cx('thumb_2')}>
            <img className={cx('img')} src="/static/img/img_themovie_10.jpg" />
          </div>
          <div className={cx('thumb_3')}>
            <img className={cx('img')} src="/static/img/img_themovie_11.jpg" />
          </div>
        </div>
        <div className={cx('thumb')}>
          <img className={cx('img')} src="/static/img/img_themovie_lastcover.jpg" />
        </div>
      </div>
      <div className={cx('section_07')}>
        <div className={cx('contents_wrap')}>
          <div className={cx('title_wrap')}>
            <strong className={cx('title')}>NOW ARRIVAL</strong>
            <div className={cx('thumb')}>
              <img className={cx('img')} src="/static/img/ico_plane_white.svg" />
            </div>
          </div>
          <div className={cx('img_wrap')}>
            <strong className={cx('title')}>
              <p className={cx('small_title')}>D’FESTA TOKYO II</p>
              HANEDA AIRPOR</strong>
            <div className={cx('thumb')}>
              <img className={cx('img')} src="/static/img/img_bottommeet_hanedaairport.jpg" />
            </div>
          </div>
          <div className={cx('link_wrap')}>
            <strong className={cx('title')}>보다 더욱 알찬 구성으로 약 3000평의<br />초대형 공간에서 평쳐지는 축제</strong>
            <div className={cx('btn_area')}>
              <LinkButton text="하네다 전시소개" href="https://dfesta.co.kr/spotlight/seventeen?id=00071" />
            </div>
          </div>
        </div>
        <div className={cx('contents_wrap')}>
          <div className={cx('title_wrap')}>
            <strong className={cx('title')}>NEXT</strong>
          </div>
          <div className={cx('img_wrap')}>
            <div className={cx('thumb')}>
              <img className={cx('img')} src="/static/img/img_introduce_themovie.jpg" />
            </div>
          </div>
          <div className={cx('link_wrap')}>
            <strong className={cx('title')}>10년의 기록 <br />그리고 새로운 이야기</strong>
            <div className={cx('btn_area')}>
              <LinkButton text="더 알아보기" href="https://dfesta.co.kr/spotlight/seventeen?id=00071" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default TheMovie;