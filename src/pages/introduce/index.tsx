import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import LinkButton from '@/components/LinkButton';
import Footer from '@/components/Footer';

const cx = classNames.bind(styles);

const Introduce: React.FC = () => {
  return (
    <div className={cx('introduce')}>
      <button className={cx('btn_top')} />
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
        <div className={cx('main_video')}>
          <div className={cx('thumb')}>
            <video className={cx('video')} muted autoPlay loop>
              <source src="/static/video/main.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
      <div className={cx('section_02')}>
        <div className={cx('title')}>
          <strong>
            K-POP의 세계화를 이끈 아티스트들과<br />
            한국 최고의 크리에이터들이 함께 참여해<br />
            완성된 최초의 글로벌 K-POP 페스티벌
          </strong>
        </div>
        <div className={cx('dfesta_img')}>
          <img className={cx('img')} src="/static/img/img_dfesta.png" />
        </div>
        <div className={cx('description')}>
          <p>현재 가장 주목할 만한 K-POP 아티스트 9 그룹, 총 69명의 아티스트들이
            참여한 D’FESTA.공연은 영화로, 사진은 전시로, 그리고 장르를 넘어선 미디
            어 아트까지.상상 속의 콘서트가 현실로 구현된 D’FESTA는 K-POP의 내일
            을 증명하는 모두의 축제로 거듭납니다.</p>
        </div>
        <div className={cx('img_wrap')}>
          <div className={cx('thumb_1')}>
            <img className={cx('img')} src="/static/img/img_introduce_main_01.jpg" />
          </div>
          <div className={cx('thumb_2')}>
            <img className={cx('img')} src="/static/img/img_introduce_main_02.jpg" />
          </div>
          <div className={cx('thumb_3')}>
            <img className={cx('img')} src="/static/img/img_introduce_main_03.jpg" />
          </div>
          <div className={cx('thumb_4')}>
            <img className={cx('img')} src="/static/img/img_introduce_main_04.jpg" />
          </div>
        </div>
      </div>
      <div className={cx('section_03')}>
        <div className={cx('sub_title')}>
          <strong>상상이 현실이 되는 순간,<br />
            세 가지의 테마로 완성되는<br />
            모두의 축제</strong>
        </div>
        <div className={cx('introduce_wrap')}>
          <div className={cx('info_1')}>
            <div className={cx('thumb')}>
              <img className={cx('img')} src="/static/img/img_introduce_main_themovie_mo.jpg" />
            </div>
            <strong className={cx('title')}>디스패치의 아카이브</strong>
            <p className={cx('contents')}>
              오리지널 스토리, 오리지널 뮤직, 오리지널 퍼포먼스로 완성된 한 편의 음악 영화
              를 다양한 방식으로 선보입니다. 세계 최고 수준의 XR 기술과 LED 기술로 구현
              된 화려한 무대 영상과 5.1 채널 사운드로 제작된 무대 음향은 상상 속의 무대를
              현실로 옮길 것 같은 특별한 몰입감을 선사합니다.</p>
            <div className={cx('img_wrap')}>
              <div className={cx('thumb_1')}>
                <img className={cx('img')} src="/static/img/logo_limited_edition.svg" />
              </div>
              <div className={cx('thumb_2')}>
                <img className={cx('img')} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iNSIgZmlsbD0iIzAwNDRDOCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxNi43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNC43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KPC9zdmc+Cg==" />
              </div>
            </div>
            <div className={cx('more_btn_area')}>
              <LinkButton text="더 알아보기" href="https://dfesta.co.kr/spotlight/seventeen?id=00071" />
            </div>
          </div>
          <div className={cx('info_2')}>
            <div className={cx('thumb')}>
              <img className={cx('img')} src="/static/img/img_introduce_main_theexhibition_mo.jpg" />
            </div>
            <strong className={cx('title')}>“10년의 기록, 그리고 새로운 이야기”</strong>
            <p className={cx('contents')}>
              피, 땀, 눈물이 담긴 사진은 기억의 상징이며 성장의 증거입니다. 또한 그 자체로
              예술 작품이 됩니다. 디페스타 ‘THE EXHIBITION’은 K-POP을 상징하는 아티
              스트 9팀(69명)의 모습을 다양한 형태로 전시합니다. 디스패치가 지난 10년간 기록한 아티스트들의 기
              록 사진과 290여점의 초대형 최신 화보, 69명의 아티스트
              가 직접 그린 대형 캔버스 작품 9점 등을 감상할 수 있습니다.</p>
            <div className={cx('more_btn_area')}>
              <LinkButton text="더 알아보기" href="https://dfesta.co.kr/spotlight/seventeen?id=00071" />
            </div>
          </div>
          <div className={cx('info_3')}>
            <div className={cx('thumb')}>
              <img className={cx('img')} src="/static/img/img_introduce_main_theexperience_mo.jpg" />
            </div>
            <strong className={cx('title')}>모두가 함께 즐길 수 있는 축제의 장</strong>
            <p className={cx('contents')}>
              첨단 몰입형 미디어아트를 통해 아티스트가 올랐던 무대를 체험할 수 있습니다.
              푸른 바다와 신비로운 사막, 광활한 우주 등 디페스타 ‘THE MOVIE’에서 바라본
              가상의 공간을 간접적으로 체험할 수 있는 ‘THE EXPERIENCE’는 아티스트 69
              명의 친필 사인으로 완성된 대형 ‘SIGN WALL’과 함께 모두가 함께 즐길 수 있는
              축제의 경험을 선사합니다.</p>
            <div className={cx('more_btn_area')}>
              <LinkButton text="더 알아보기" href="https://dfesta.co.kr/spotlight/seventeen?id=00071" />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={cx('section_04')}>
        <div className={cx('contents_wrap')}>
          <div className={cx('title_wrap')}>
            <strong className={cx('title')}>NOW ARRIVAL</strong>
            <div className={cx('thumb')}>
              <img className={cx('img')} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuOTkyMTg4IDEzLjk5MjJIMjEuMDA3OFYxNi4wMDc4SDAuOTkyMTg4VjEzLjk5MjJaTTE3IDExLjkwNjJDMTcuMzkwNiAxMi4wNDY5IDE3Ljc3MzQgMTIuMDIzNCAxOC4xNDg0IDExLjgzNTlDMTguNTIzNCAxMS42NDg0IDE4Ljc4MTIgMTEuMzU5NCAxOC45MjE5IDEwLjk2ODhDMTkuMDYyNSAxMC41NzgxIDE5LjAzOTEgMTAuMTk1MyAxOC44NTE2IDkuODIwMzFDMTguNjY0MSA5LjQ0NTMxIDE4LjM3NSA5LjE4NzUgMTcuOTg0NCA5LjA0Njg4TDEzLjM5MDYgNy40Mjk2OUwxMC43MTg4IDAuNDQ1MzEyTDguNTYyNSAwTDkuMDc4MTIgNS44ODI4MUw2LjAzMTI1IDQuODA0NjlMNS40OTIxOSAxLjI4OTA2TDMuOTkyMTkgMS4wMDc4MUwzLjAwNzgxIDcuMDA3ODFMMTcgMTEuOTA2MloiIGZpbGw9IiMxNTE1MTUiLz4KPC9zdmc+Cg==" />
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
            <strong className={cx('title')}>HISTORY</strong>
          </div>
          <div className={cx('img_wrap')}>
            <strong className={cx('title')}>
              <p className={cx('small_title')}>D’FESTA TOKYO I</p>
              SKY TREE
            </strong>
            <div className={cx('thumb')}>
              <img className={cx('img')} src="/static/img/img_bottommeet_tokyo.jpg" />
            </div>
          </div>
          <div className={cx('link_wrap')}>
            <strong className={cx('title')}>도쿄의 랜드마크, <br />스카이트리에서 펼쳐진 디페스타</strong>
            <div className={cx('btn_area')}>
              <LinkButton text="더 알아보기" href="https://dfesta.co.kr/spotlight/seventeen?id=00071" />
            </div>
          </div>
        </div>
        <div className={cx('contents_wrap')}>
          <div className={cx('img_wrap')}>
            <div className={cx('title')}>SEOUL</div>
            <div className={cx('thumb')}>
              <img className={cx('img')} src="/static/img/img_bottommeet_seoul.jpg" />
            </div>
          </div>
          <div className={cx('link_wrap')}>
            <strong className={cx('title')}>K-POP의 현재, 그리고 축제 … <br /> 대한민국 서울에서 시작된<br />‘디페스타’, 60일의 기록들</strong>
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

export default Introduce;