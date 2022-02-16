import { FC } from 'react';
import { Statistic } from '../../types/types';
import { StatisticItem } from './StatisticItem';
import styles from './Statistics.module.css';

interface Props {
  title?: string;
  stats: Statistic[];
}

export const StaticticList: FC<Props> = ({ stats, title = '' }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(statistic => (
          <StatisticItem statistic={statistic} />
        ))}
      </ul>
    </section>
  );
};
