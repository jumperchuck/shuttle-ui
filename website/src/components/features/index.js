import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

const FeatureList = [
  {
    title: '易用',
    Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    description: <>基于react，完美支持typescript，迅速上手</>,
  },
  {
    title: '灵活',
    Svg: require('../../../static/img/undraw_docusaurus_tree.svg').default,
    description: <>强大的主题系统，灵活配置</>,
  },
  {
    title: '高效',
    Svg: require('../../../static/img/undraw_docusaurus_react.svg').default,
    description: <>内置各种组件，优化网格列表滚动，快速构建应用</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function () {
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
