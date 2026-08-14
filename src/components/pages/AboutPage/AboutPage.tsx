import React, { useState } from 'react';
import Header from '../../organisms/Header/Header';
import { Footer } from '../../organisms/Footer/Footer';
import { useTranslation } from '../../../hooks/useTranslation';
import { useToast } from '../../../hooks/useToast';
import './AboutPage.css';

import WelcomeHeroImg from '../../../assets/about/welcome_hero.png';
import Gallery1Img from '../../../assets/about/gallery_1.png';
import Gallery2Img from '../../../assets/about/gallery_2.png';
import Gallery3Img from '../../../assets/about/gallery_3.jpg';
import Perf1Img from '../../../assets/about/perf_1.jpg';
import Perf2Img from '../../../assets/about/perf_2.jpg';
import Team1Img from '../../../assets/about/team_merinda.png';
import Team2Img from '../../../assets/about/team_dilan.png';
import CabbageImg from '../../../assets/about/cabbage.png';
import BannerPatternImg from '../../../assets/about/banner_pattern.png';
import IconBestPrices from '../../../assets/about/icon_best_prices.png';
import IconReturns from '../../../assets/about/icon_returns.png';
import IconAssortment from '../../../assets/about/icon_assortment.png';
import IconDelivery from '../../../assets/about/icon_delivery.png';
import IconHandshake from '../../../assets/about/icon_handshake.png';

const heroImagesList = [WelcomeHeroImg, Gallery1Img, Gallery2Img, Gallery3Img];

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const { addToast } = useToast();
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handlePrevGallery = () => {
    setActiveHeroIndex((prev) => (prev === 0 ? heroImagesList.length - 1 : prev - 1));
  };

  const handleNextGallery = () => {
    setActiveHeroIndex((prev) => (prev === heroImagesList.length - 1 ? 0 : prev + 1));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !EMAIL_REGEX.test(email.trim())) {
      const errorMsg = t('newsletter.invalid');
      setEmailError(errorMsg);
      addToast(errorMsg, 'error');
      return;
    }
    setEmailError('');
    addToast('Subscribed successfully!', 'success');
    setEmail('');
  };

  return (
    <div className="about-page">
      <Header />

      <main className="about-page__main">
        <div className="about-container">
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <a href="/">{t('about.breadcrumb.home')}</a>
            <span className="separator">›</span>
            <span>{t('about.breadcrumb.pages')}</span>
            <span className="separator">›</span>
            <span className="current">{t('about.breadcrumb.current')}</span>
          </nav>
        </div>

        <section className="about-section about-welcome">
          <div className="about-container about-welcome__grid">
            <div className="about-welcome__hero">
              <img
                src={heroImagesList[activeHeroIndex]}
                alt="Welcome to Nest"
                className="about-welcome__img"
              />
            </div>

            <div className="about-welcome__content">
              <h1 className="about-welcome__title">{t('about.welcome.title')}</h1>
              <p className="about-welcome__text">
                {t('about.welcome.text1')}
              </p>
              <p className="about-welcome__text">
                {t('about.welcome.text2')}
              </p>

              <div className="about-welcome__gallery-wrapper">
                <button
                  type="button"
                  className="about-gallery__arrow about-gallery__arrow--left"
                  onClick={handlePrevGallery}
                  aria-label="Previous gallery image"
                >
                  ‹
                </button>
                <div className="about-welcome__gallery">
                  {heroImagesList.slice(1).map((img, idx) => {
                    const actualIdx = idx + 1;
                    return (
                      <div
                        key={idx}
                        className={`about-gallery__item ${actualIdx === activeHeroIndex ? 'about-gallery__item--active' : ''}`}
                        onClick={() => setActiveHeroIndex(actualIdx)}
                      >
                        <img src={img} alt={`Gallery item ${actualIdx}`} />
                      </div>
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="about-gallery__arrow about-gallery__arrow--right"
                  onClick={handleNextGallery}
                  aria-label="Next gallery image"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section about-provide">
          <div className="about-container">
            <div className="about-section__header">
              <h2 className="about-section__title">{t('about.provide.title')}</h2>
              <div className="about-title-wave">
                <svg viewBox="0 0 100 20" width="80" height="16" fill="none">
                  <path d="M 0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" stroke="var(--color-brand-green)" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>

            <div className="about-provide__grid">
              <div className="about-provide__card">
                <div className="about-provide__icon-wrapper">
                  <img src={IconBestPrices} alt="Best Prices & Offers" className="about-provide__icon-img" />
                </div>
                <h3 className="about-provide__card-title">{t('about.provide.bestPrices')}</h3>
                <p className="about-provide__card-text">
                  {t('about.provide.cardDescription')}
                </p>
                <a href="#" className="about-provide__read-more">{t('about.provide.readMore')}</a>
              </div>

              <div className="about-provide__card">
                <div className="about-provide__icon-wrapper">
                  <img src={IconAssortment} alt="Wide Assortment" className="about-provide__icon-img" />
                </div>
                <h3 className="about-provide__card-title">{t('about.provide.wideAssortment')}</h3>
                <p className="about-provide__card-text">
                  {t('about.provide.cardDescription')}
                </p>
                <a href="#" className="about-provide__read-more">{t('about.provide.readMore')}</a>
              </div>

              <div className="about-provide__card">
                <div className="about-provide__icon-wrapper">
                  <img src={IconDelivery} alt="Free Delivery" className="about-provide__icon-img" />
                </div>
                <h3 className="about-provide__card-title">{t('about.provide.freeDelivery')}</h3>
                <p className="about-provide__card-text">
                  {t('about.provide.cardDescription')}
                </p>
                <a href="#" className="about-provide__read-more">{t('about.provide.readMore')}</a>
              </div>

              <div className="about-provide__card">
                <div className="about-provide__icon-wrapper">
                  <img src={IconReturns} alt="Easy Returns" className="about-provide__icon-img" />
                </div>
                <h3 className="about-provide__card-title">{t('about.provide.easyReturns')}</h3>
                <p className="about-provide__card-text">
                  {t('about.provide.cardDescription')}
                </p>
                <a href="#" className="about-provide__read-more">{t('about.provide.readMore')}</a>
              </div>

              <div className="about-provide__card">
                <div className="about-provide__icon-wrapper">
                  <img src={IconReturns} alt="100% Satisfaction" className="about-provide__icon-img" />
                </div>
                <h3 className="about-provide__card-title">{t('about.provide.satisfaction')}</h3>
                <p className="about-provide__card-text">
                  {t('about.provide.cardDescription')}
                </p>
                <a href="#" className="about-provide__read-more">{t('about.provide.readMore')}</a>
              </div>

              <div className="about-provide__card">
                <div className="about-provide__icon-wrapper">
                  <img src={IconHandshake} alt="Great Daily Deal" className="about-provide__icon-img" />
                </div>
                <h3 className="about-provide__card-title">{t('about.provide.greatDeal')}</h3>
                <p className="about-provide__card-text">
                  {t('about.provide.cardDescription')}
                </p>
                <a href="#" className="about-provide__read-more">{t('about.provide.readMore')}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section about-performance">
          <div className="about-container">
            <div className="about-performance__top-grid">
              <div className="about-performance__images">
                <img src={Perf1Img} alt="Performance workspace" className="about-perf__img about-perf__img--left" />
                <img src={Perf2Img} alt="Performance shopping" className="about-perf__img about-perf__img--right" />
              </div>

              <div className="about-performance__content">
                <span className="about-performance__subtitle">{t('about.performance.subtitle')}</span>
                <h2 className="about-performance__title">
                  {t('about.performance.title')}
                </h2>
                <p className="about-performance__text">
                  {t('about.performance.text1')}
                </p>
                <p className="about-performance__text">
                  {t('about.performance.text2')}
                </p>
              </div>
            </div>

            <div className="about-performance__subcolumns">
              <div className="about-perf__subcol">
                <h3 className="about-perf__subcol-title">{t('about.performance.whoWeAre')}</h3>
                <p className="about-perf__subcol-text">
                  {t('about.performance.whoWeAreText')}
                </p>
              </div>
              <div className="about-perf__subcol">
                <h3 className="about-perf__subcol-title">{t('about.performance.ourHistory')}</h3>
                <p className="about-perf__subcol-text">
                  {t('about.performance.ourHistoryText')}
                </p>
              </div>
              <div className="about-perf__subcol">
                <h3 className="about-perf__subcol-title">{t('about.performance.ourMission')}</h3>
                <p className="about-perf__subcol-text">
                  {t('about.performance.ourMissionText')}
                </p>
              </div>
            </div>

            <div className="about-stats__banner">
              <div className="about-stats__item">
                <span className="about-stats__number">12+</span>
                <span className="about-stats__label">{t('about.performance.stats.gloriousYears')}</span>
              </div>
              <div className="about-stats__item">
                <span className="about-stats__number">5k+</span>
                <span className="about-stats__label">{t('about.performance.stats.happyClients')}</span>
              </div>
              <div className="about-stats__item">
                <span className="about-stats__number">2k+</span>
                <span className="about-stats__label">{t('about.performance.stats.projectsComplete')}</span>
              </div>
              <div className="about-stats__item">
                <span className="about-stats__number">36+</span>
                <span className="about-stats__label">{t('about.performance.stats.teamAdvisor')}</span>
              </div>
              <div className="about-stats__item">
                <span className="about-stats__number">45k+</span>
                <span className="about-stats__label">{t('about.performance.stats.productsSale')}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section about-team">
          <div className="about-container">
            <div className="about-section__header">
              <h2 className="about-section__title">{t('about.team.subtitle')}</h2>
              <div className="about-title-wave">
                <svg viewBox="0 0 100 20" width="80" height="16" fill="none">
                  <path d="M 0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" stroke="var(--color-brand-green)" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>

            <div className="about-team__grid">
              <div className="about-team__intro-card">
                <span className="about-team__subtitle">{t('about.team.subtitle')}</span>
                <h3 className="about-team__intro-title">{t('about.team.title')}</h3>
                <p className="about-team__intro-text">
                  {t('about.team.introText')}
                </p>
                <p className="about-team__intro-text">
                  {t('about.team.introText')}
                </p>
                <button type="button" className="about-team__btn">
                  {t('about.team.viewAllBtn')}
                </button>
              </div>

              <div className="about-team__member-card">
                <div className="about-team__img-wrapper">
                  <img src={Team1Img} alt="H. Merinda" />
                  <div className="about-team__overlay">
                    <h4 className="about-team__name">H. Merinda</h4>
                    <span className="about-team__role">{t('about.team.merindaTitle')}</span>
                    <div className="about-team__socials">
                      <a href="#" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="var(--color-brand-green)" width="16" height="16">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" aria-label="Twitter">
                        <svg viewBox="0 0 24 24" fill="var(--color-brand-green)" width="16" height="16">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                      <a href="#" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green)" strokeWidth="2" width="16" height="16">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="#" aria-label="YouTube">
                        <svg viewBox="0 0 24 24" fill="var(--color-brand-green)" width="16" height="16">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="var(--color-background)"></polygon>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-team__member-card">
                <div className="about-team__img-wrapper">
                  <img src={Team2Img} alt="Dilan Specter" />
                  <div className="about-team__overlay">
                    <h4 className="about-team__name">Dilan Specter</h4>
                    <span className="about-team__role">{t('about.team.dilanTitle')}</span>
                    <div className="about-team__socials">
                      <a href="#" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="var(--color-brand-green)" width="16" height="16">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" aria-label="Twitter">
                        <svg viewBox="0 0 24 24" fill="var(--color-brand-green)" width="16" height="16">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                      <a href="#" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green)" strokeWidth="2" width="16" height="16">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="#" aria-label="YouTube">
                        <svg viewBox="0 0 24 24" fill="var(--color-brand-green)" width="16" height="16">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="var(--color-background)"></polygon>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-banner-section">
          <div className="about-container">
            <div
              className="about-promo-banner"
              style={{ backgroundImage: `url(${BannerPatternImg})` }}
            >
              <div className="about-promo-banner__content">
                <h2 className="about-promo-banner__title">
                  {t('newsletter.title')}
                </h2>
                <p className="about-promo-banner__sub">
                  {t('newsletter.subtitle')} <span className="highlight">{t('newsletter.highlight')}</span>
                </p>
                <form className="about-promo-banner__form" onSubmit={handleSubscribe}>
                  <div className="about-promo-banner__input-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gray)" strokeWidth="2" width="18" height="18">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError('');
                      }}
                      placeholder={t('newsletter.placeholder')}
                      className={`about-promo-banner__input ${emailError ? 'about-promo-banner__input--error' : ''}`}
                    />
                  </div>
                  <button type="submit" className="about-promo-banner__submit">
                    {t('newsletter.subscribe')}
                  </button>
                </form>
                {emailError && (
                  <p className="about-promo-banner__error-msg">{emailError}</p>
                )}
              </div>
              <div className="about-promo-banner__image">
                <img src={CabbageImg} alt="Fresh cabbage" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
