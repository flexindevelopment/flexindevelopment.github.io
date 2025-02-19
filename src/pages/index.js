import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            style={{margin: '0 10px'}}
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docs
          </Link>
          <Link
            style={{margin: '0 10px'}}
            className="button button--secondary button--lg"
            to="https://flexin-development.tebex.io">
            Store
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: 'Innovative',
    imageUrl: 'img/features/innovative.svg',
    description: 'Cutting-edge scripts with the latest features for your FiveM server.',
  },
  {
    title: 'Customizable',
    imageUrl: 'img/features/customizable.svg',
    description: 'Tailor our scripts to fit your server’s unique needs.',
  },
  {
    title: 'Optimized',
    imageUrl: 'img/features/optimized.svg',
    description: 'Lightweight scripts for smooth, lag-free gameplay.',
  },
  {
    title: 'Professional Design',
    imageUrl: 'img/features/design.svg',
    description: 'Sleek, user-friendly interfaces for better player experiences.',
  },
];

function Feature({imageUrl, title, description}) {
  return (
    <div className={clsx('col col--3', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const Showcase = props => {
  return (
    <div className="mainContainer" style={{backgroundColor: 'var(--ifm-color-emphasis-100)', padding: '2rem 0'}}>
      <div style={{margin: '0 auto', maxWidth: '1100px', padding: '0 20px'}}>
        <div className="showcaseSection text--center">
          <div className="prose" style={{marginBottom: '20px'}}>
            <h1>Partners</h1>
            <div className="logos" style={{
              alignItems: 'center',
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'center',
            }}>
              <a href="https://discord.gg/lineup" target="_blank">
                <img style={{padding: '20px'}} width="120" alt="Line Up" src="/img/partners/lineup.png" />
              </a>
              <a href="https://keepo.io/expansing" target="_blank">
                <img style={{padding: '20px'}} width="160" alt="Expansing" src="/img/partners/expansing.png" />
              </a>
              <a href="https://discord.gg/kbEkFxMNC4" target="_blank">
                <img style={{padding: '20px'}} width="160" alt="The Best Mods" src="/img/partners/thebestmods.png" />
              </a>
              <a href="https://discord.gg/RP6R8KFGM7" target="_blank">
                <img style={{padding: '20px'}} width="120" alt="2 Play Store" src="/img/partners/2playstore.png" />
              </a>
              <a href="https://discord.gg/2htw4ha7AW" target="_blank">
                <img style={{padding: '20px'}} width="120" alt="Oskar" src="/img/partners/oskar.png" />
              </a>
              <a href="https://discord.gg/8Y6nZMJyn9" target="_blank">
                <img style={{padding: '20px'}} width="120" alt="Alien Mods" src="/img/partners/alienmods.png" />
              </a>
              <a href="https://discord.gg/aVxxNTg9kh" target="_blank">
                <img style={{padding: '20px'}} width="120" alt="AS King" src="/img/partners/asking.png" />
              </a>
              <a href="https://discord.gg/YcEWFJEJ7J" target="_blank">
                <img style={{padding: '20px'}} width="120" alt="Hypee" src="/img/partners/hypee.png" />
              </a>
              <a href="https://discord.gg/28fHypvTdm" target="_blank">
                <img style={{padding: '20px'}} width="120" alt="GN Mods" src="/img/partners/gnmods.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="FiveM best innovations">
      <HomepageHeader />
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div style={{ marginBottom: '24px', textAlign: 'center' }}>
                <iframe className={styles.youtubeVideo} src="https://www.youtube.com/embed/zbaS55VFnt0?si=LRbqt462q6RNIOHf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
              </div>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <Showcase></Showcase>
      </main>
    </Layout>
  );
}
