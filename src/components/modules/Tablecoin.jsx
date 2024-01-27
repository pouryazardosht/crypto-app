import chartUp from '../../assets/chart-up.svg';
import chartDown from '../../assets/chart-down.svg';

//eslint-disable-next-line
function TableCoin({ coins }) {
    return (
        <div>
            <table>
                <thead>
                    <tr><th>Coin</th></tr>
                    <tr><th>Name</th></tr>
                    <tr><th>Price</th></tr>
                    <tr><th>24h</th></tr>
                    <tr><th>Total Volume</th></tr>
                    <tr><th></th></tr>
                </thead>
                <tbody>
                    {/* eslint-disable-next-line */}
                    {coins.map(coin =>
                        <tr key={coin.id}>
                            <td>
                                <div>
                                    <img src={coin.image} alt="" />
                                    <span>{coin.symbol.toUpperCase()}</span>
                                </div>
                            </td>
                            <td>{coin.name}</td>
                            <td>${coin.current_price.toLocaleString()}</td>
                            <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                            <td>{coin.total_volume.toLocaleString()}</td>
                            <td>
                                <img
                                    src={coin.price_change_percentage_24h > 0 ? chartUp : chartDown}
                                    alt={coin.name}
                                />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TableCoin
