import { FC } from 'react';
import { Statistic } from '../../types/types';
import styles from './Statistics.module.css';

interface Props {
  statistic: Statistic;
}

export const StatisticItem: FC<Props> = ({ statistic }) => {
  return (
    <li className={styles.item} key={statistic.id}>
      <span className="label">{statistic.label}</span>
      <span className={styles.percentage}>{statistic.percentage}%</span>
    </li>
  );
};
