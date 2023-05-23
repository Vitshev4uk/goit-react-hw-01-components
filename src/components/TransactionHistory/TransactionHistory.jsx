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
          <tbody className={css.tableBodyRow}>
            {items.map(item => (
            <tr className={css.tableBody} key={item.id} >
              <td className={css.tableData}>{item.type}</td>
              <td className={css.tableData}>{item.amount}</td>
              <td className={css.tableData}>{item.currency}</td>
            </tr>
))}
          </tbody>
      </table>
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}

export default TransactionHistory;
