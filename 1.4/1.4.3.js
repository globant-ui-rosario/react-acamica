var MyOtherComponent = function (_React$Component) {
    _inherits(MyOtherComponent, _React$Component);

    function MyOtherComponent() {
        _classCallCheck(this, MyOtherComponent);

        return _possibleConstructorReturn(this, (MyOtherComponent.__proto__ || Object.getPrototypeOf(MyOtherComponent)).apply(this, arguments));
    }

    _createClass(MyOtherComponent, [{
        key: "render",
        value: function render() {
            var otherInputType = 'time';

            return React.createElement(
                "div",
                null,
                React.createElement("input", { type: "text" }),
                React.createElement("input", { type: otherInputType })
            );
        }
    }]);

    return MyOtherComponent;
}(React.Component);
