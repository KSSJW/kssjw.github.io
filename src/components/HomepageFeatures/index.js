import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built with Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This website was built with <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>, thanks to the open-source community for their support.
      </>
    ),
  },
  {
    title: 'One-stop Service',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The website offers multiple subpages to provide a one-stop service.
      </>
    ),
  },
  {
    title: 'Maintained by KSSJW',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <a href="https://github.com/KSSJW" target="_blank" rel="noopener noreferrer">KSSJW</a> was responsible for the website's design and launch.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
