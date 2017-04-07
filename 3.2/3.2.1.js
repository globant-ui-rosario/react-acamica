import ProductProfile from './product-profile';
import ProductSettings from './product-settings';
import ProductInventory from './product-inventory';
import ProductOrders from './product-orders';

export default class Home extends from Component {
    render () {
        return (
            <ul>
                <li><Link to="/settings"></li>
                <li><Link to="/inventory"></li>
                <li><Link to="/orders"></li>
            </ul>
        );
    };
}

export default (
    <Router>
        <Route path="/">
            <IndexRoute component={Home} />
            <Route path="product">
                <Route path="settings" component={ProductSettings} />
                <Route path="inventory" component={ProductInventory} />
                <Route path="orders" component={ProductOrders} />
            </Route>
        </Route>
    </Router>

);
