export default function TransactionHistory({items}){
    return(
        <table className="transaction-history">
            <thead>
              <tr>
                <th className="table-title">Type</th>
                <th className="table-title">Amount</th>
                <th className="table-title">Currency</th>
              </tr>
            </thead>

            <tbody>
                {items.map(it =>(<tr>
                    <td className="table-items">{it.type}</td>
                    <td className="table-items">{it.amount}</td>
                    <td className="table-items">{it.currency}</td>
                </tr>))}
            </tbody>
        </table>
    )
}