import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import LinkButton from '@/components/LinkButton';
import Footer from '@/components/Footer';

const cx = classNames.bind(styles);

const ArtistLineup = [
  {
    thumb: '/static/img/thumb_artistlineup_enhypen.jpg',
    name: 'enhypen',
    link: '/artist/enhypen',
    logo: '/static/img/logo_artistlineup_enhypen.svg',
  },
  {
    thumb: '/static/img/thumb_artistlineup_txt.jpg',
    name: 'txt',
    link: '/artist/txt',
    logo: '/static/img/logo_artistlineup_txt.svg',
  },
  {
    thumb: '/static/img/thumb_artistlineup_straykids.jpg',
    name: 'stray kids',
    link: '/artist/straykids',
    logo: '/static/img/logo_artistlineup_straykids.svg',
  },
  {
    thumb: '/static/img/thumb_artistlineup_nctdream.jpg',
    name: 'nct dream',
    link: '/artist/nctdream',
    logo: '/static/img/logo_artistlineup_nctdream.svg',
  },
  {
    thumb: '/static/img/thumb_artistlineup_nct127.jpg',
    name: 'nct 127',
    link: '/artist/nct127',
    logo: '/static/img/logo_artistlineup_nct127.svg',
  },
  {
    thumb: '/static/img/thumb_artistlineup_twice.jpg',
    name: 'twice',
    link: '/artist/twice',
    logo: '/static/img/logo_artistlineup_twice.svg',
  },
  {
    thumb: '/static/img/thumb_artistlineup_seventeen.jpg',
    name: 'seventeen',
    link: '/artist/seventeen',
    logo: '/static/img/logo_artistlineup_seventeen.svg',
  },
  {
    thumb: '/static/img/thumb_artistlineup_bts.jpg',
    name: 'bts',
    link: '/artist/bts',
    logo: '/static/img/logo_artistlineup_bts.svg',
  },
  {
    thumb: '/static/img/thumb_artistlineup_nuest.jpg',
    name: 'nu’est',
    link: '/artist/nuest',
    logo: '/static/img/logo_artistlineup_nuest.svg',
  },
]

const Home: React.FC = () => {
  return (
    <div className={cx('home')}>
      <div className={cx('section_01')}>
        {/* <div className={cx('screen')} /> */}
        <strong className={cx('top_title')} data-font-en>THE FIRST GLOBAL K-POP FESTIVALS</strong>
        <p className={cx('side_title')} data-font-en>TOKYO SKY-TREE</p>
        <iframe
          className={cx('video')}
          src="https://player.vimeo.com/video/706887976?h=29f969bb12&title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&transparent=0&background=1"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <img src="/static/img/logo.svg" alt="" className={cx('logo')} />
        <button className={cx('menu_btn')}>
          <span className={cx('line')} />
          <span className={cx('line')} />
          <span className={cx('line')} />
          <span className={cx('blind')}>메뉴</span>
        </button>
        <img src="/static/img/ico_arrow.svg" alt="" className={cx('arrow_down_img')} />
      </div>
      <div className={cx('section_02')}>
        <div className={cx('layout_inner')}>
          <div className={cx('figure')}>
            <div className={cx('figure_img')}>
              <img src="/static/img/data/spot_thumbnail_a_svt_71.jpg" alt="" />
            </div>
            <div className={cx('figure_desc')}>
              <div className={cx('flag')} data-font-en>
                <p className={cx('normal')}>SPORTLIGHT</p>
                <p>D'FESTA</p>
              </div>
              <div className={cx('hgroup')}>
                <h3 className={cx('hgroup_title')}>
                  13+3+1=17<br /> 같이 가요 ‘세븐틴’
                </h3>
                <div className={cx('hgroup_text')}>
                  지난 4월 26일 오후, 글로벌 K-POP 페스티벌 ‘디페스타(D’FESTA)’의 뜨거운 현장을 느끼러 세븐틴의 민규, 우지, 에스쿱스, 정한, 디에잇, 도겸이 방문하였다.
                </div>
              </div>
              <div className={cx('more_btn_area')}>
                <LinkButton text="더 알아보기" href="https://dfesta.co.kr/spotlight/seventeen?id=00071" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('section_03')}>
        <div className={cx('layout_inner')}>
          <div className={cx('title_group')}>
            <h2 className={cx('title')} data-font-en>
              <span className={cx('normal')}>D'FESTA</span>
              <p className={cx('bold')}>artist line-up</p>
            </h2>
          </div>
        </div>
        <div className={cx('artist_lineup')}>
          <ul>
            {ArtistLineup.map((item, index) => (
              <li
                key={`artistLineup-${index}`}
                className={cx('artist_lineup_item', `artist_lineup_item-0${index + 1}`)}
              >
                <a href={item.link}>
                  <div className={cx('thumb')}>
                    <img src={item.thumb} alt="" />
                  </div>
                  <span className={cx('name')} data-font-en>{item.name}</span>
                  <span className={cx('artist_logo')}>
                    <img src={item.logo} alt="" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cx('section_04')}>
        <div className={cx('layout_inner')}>
          <div className={cx('title_group')}>
            <h2 className={cx('title')} data-font-en>
              <span className={cx('normal')}>D'FESTA</span> <em>GOODS</em>
            </h2>
            <div className={cx('more')}>
              <LinkButton text="MORE" href="https://dfesta.co.kr/introduce/goods" />
            </div>
          </div>
          <div className={cx('goods_item')}>
            <img src="/static/img/data/00025_still_01.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className={cx('section_05')}>
        <div className={cx('layout_inner')}>
          <div className={cx('hgroup')}>
            <h3 className={cx('sub-title')}>
              세 가지의 테마로 <br />
              완성되는 모두의 축제
            </h3>
          </div>
          <div className={cx('figure-group')}>
            <div className={cx('figure-group__item', 'is-big')}>
              <a href="/introduce/the-movie">
                <div className={cx('figure')}>
                  <img src="/static/img/img_main_figure01.jpg"
                  />
                </div>
                <span className={cx('btn', 'btn__link')}>
                  <span data-font-en>the movie</span>
                  <span className={cx('is-mobile')}>디스패치의 아카이브</span>
                  <span className={cx('ico-wrap')}>
                    <img src="/static/img/ico_link_arrow.svg" alt="" />
                  </span>
                </span>
              </a>
            </div>
            <div className={cx('figure-group__item')}>
              <a href="/introduce/the-exhibition">
                <div className={cx('figure')}>
                  <img src="/static/img/img_main_figure02.jpg" />
                </div>
                <span className={cx('btn', 'btn__link')}>
                  <span data-font-en>the exhibition</span>
                  <span className={cx('ico-wrap')}>
                    <img src="/static/img/ico_link_arrow.svg" alt="" />
                  </span>
                </span>
              </a>
            </div>
            <div className={cx('figure-group__item')}>
              <a href="/introduce/the-experience">
                <div className={cx('figure')}>
                  <img src="/static/img/img_main_figure03.jpg" />
                </div>
                <span className={cx('btn', 'btn__link')}>
                  <span data-font-en>the experience</span>
                  <span className={cx('ico-wrap')}>
                    <img src="/static/img/ico_link_arrow.svg" alt="" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('section_06')}>
        <div className={cx('layout_inner')}>
          <div className={cx('bottom_meet')}>
            <div className={cx('inner')}>
              <h2 className={cx('title')} data-font-en>NOW ARRIVAL</h2>
              <span className={cx('deco')}></span>
              <div className={cx('figure')}>
                <div className={cx('figure_img')}>
                  <img src="/static/img/img_bottommeet_hanedaairport.jpg" alt="" />
                </div>
                <div className={cx('figure_animate')} data-font-en>
                  <strong className={cx('subject')}>
                    <span className={cx('small')}>D’FESTA TOKYO II</span>
                    HANEDA AIRPORT
                  </strong>
                </div>
              </div>
            </div>
            <div className={cx('anchor_group')}>
              <a href="https://dfesta.co.kr/introduce/now-arrival" className={cx('anchor')}>
                <div className={cx('animate')}>
                  <em className={cx('text')}>보다 더욱 알찬 구성으로  약 3000평의 <br /> 초대형 공간에서 펼쳐지는 축제</em>
                </div>
                <div className={cx('more_area')}>
                  <LinkButton text="하네다 전시소개" href="https://dfesta.co.kr/introduce/now-arrival" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;