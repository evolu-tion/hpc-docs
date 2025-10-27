import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Powerful Research Computing Cluster',
    Svg: require('@site/static/img/powerful-research-computing-cluster-access-a-state.svg').default,
    description: (
      <>
        Access a state-of-the-art HPC cluster designed to handle the demanding workloads of bioinformatics, medical research, and computational biology.
      </>
    )
  },
  {
    title: 'High-Performance Storage',
    Svg: require('@site/static/img/research-data-repository-.svg').default,
    description: (
      <>
        Our secure and scalable storage system ensures fast access to large datasets, with dedicated storage for project and scratch files.
      </>
    )
  },
  {
    title: 'Wide Range of Software',
    Svg: require('@site/static/img/scientist-or-data-analytic-sit-on-his-desk-to-do-c.svg').default,
    description: (
      <>
        From bioinformatics tools to deep learning frameworks, MedCMU-HPC provides a comprehensive set of pre-installed software and containerized environments for seamless research workflows.
      </>
    )
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
