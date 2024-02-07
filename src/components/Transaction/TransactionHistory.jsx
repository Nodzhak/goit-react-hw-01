import PropTypes from 'prop-types';
import './transactionHistory.css'; 

const TransactionHistory = ({ items }) => (
  <table className="transaction-table">
    <thead>
      <tr>
        <th className="transaction-header">Type</th>
        <th className="transaction-header">Amount</th>
        <th className="transaction-header">Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className="transaction-row">
          <td className="transaction-cell">{type}</td>
          <td className="transaction-cell">{amount}</td>
          <td className="transaction-cell">{currency}</td>
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