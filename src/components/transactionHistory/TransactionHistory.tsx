import { FC } from 'react';
import styles from './TransactionHistory.module.css';

interface Props {
  transactions: {
    id: string;
    type: string;
    amount: string;
    currency: string;
  }[];
}

export const TransactionHistory: FC<Props> = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.caption}>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr className={styles.line} key={transaction.id}>
            <td className={styles.td}>{transaction.type}</td>
            <td className={styles.td}>{transaction.amount}</td>
            <td className={styles.td}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
