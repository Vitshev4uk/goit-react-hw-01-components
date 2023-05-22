import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return <table className={css.transactionHistory}>
        <thead>
          <tr className={css.tableHead}>
            <th className={css.tableHeadData}>Type</th>
            <th className={css.tableHeadData}>Amount</th>
            <th className={css.tableHeadData}>Currency</th>
          </tr>
        </thead>
        {items.map(item => (
          <tbody key={item.id} className={css.tableBodyRow}>
            <tr className={css.tableBody}>
              <td className={css.tableData}>{item.type}</td>
              <td className={css.tableData}>{item.amount}</td>
              <td className={css.tableData}>{item.currency}</td>
            </tr>
          </tbody>
        ))}
      </table>
};

TransactionHistory.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}

export default TransactionHistory;
