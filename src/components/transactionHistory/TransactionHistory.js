import PropTypes from 'prop-types';

import s from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.caption}>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr className={s.line} key={transaction.id}>
            <td className={s.td}>{transaction.type}</td>
            <td className={s.td}>{transaction.amount}</td>
            <td className={s.td}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
