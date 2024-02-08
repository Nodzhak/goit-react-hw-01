import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'; 

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionTable}>
    <thead>
      <tr>
        <th className={styles.transactionHeader}>Type</th>
        <th className={styles.transactionHeader}>Amount</th>
        <th className={styles.transactionHeader}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.transactionRow}>
          <td className={styles.transactionCell}>{type}</td>
          <td className={styles.transactionCell}>{amount}</td>
          <td className={styles.transactionCell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;