import { Route, Router, IndexRoute } from 'react-router';
import ProductProfile from './product-profile';
import ProductSettings from './product-settings';
import ProductInventory from './product-inventory';
import ProductOrders from './product-orders';

export default (
    <Router>
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
