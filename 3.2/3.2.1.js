import { Route, Router } from 'react-router';
import ProductProfile from './product-profile';
import ProductSettings from './product-settings';
import ProductInventory from './product-inventory';
import ProductOrders from './product-orders';

export default (
    <Router>
        <Route path="/">
            <Route path="product/settings" component={ProductSettings} />
            <Route path="product/inventory" component={ProductInventory} />
            <Route path="product/orders" component={ProductOrders} />
        </Route>
    </Router>
);
