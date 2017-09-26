import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import ProductProfile from './product-profile';
import ProductSettings from './product-settings';
import ProductInventory from './product-inventory';
import ProductOrders from './product-orders';

// hashHistory: localhost/#/product/settings
// browserHistory: localhost/product/settings

export default (
    <Router history={browserHistory}>
        <Route path="/">
            <Route path="product">
                <IndexRoute component={ProductProfile} />
                <Route path="settings" component={ProductSettings} />
                <Route path="inventory" component={ProductInventory} />
                <Route path="orders" component={ProductOrders} />
            </Route>
        </Route>
    </Router>
);
