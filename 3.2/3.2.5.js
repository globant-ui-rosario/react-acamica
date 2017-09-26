import { Link } from 'react-router';

export default class Home extends Component {
    render () {
        return (
            <ul>
                <li><Link to="product/settings" activeClassName="active-link" /></li>
                <li><Link to="product/inventory" /></li>
                <li><Link to="product/orders" /></li>
            </ul>
        );
    };
}
