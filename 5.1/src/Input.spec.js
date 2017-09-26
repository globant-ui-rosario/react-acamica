import { createTestComponent } from 'create-test-component';
import { Simulate } from 'react-addons-test-utils';
import Input from './Input';
import ReactDOM from 'react-dom';

describe('Input component', () => {
    let input;
    let inputNode;

    function renderComponent (props) {
        input = createTestComponent(Input, props);
        inputNode = ReactDOM.findDOMNode(input);
    }

    function getAttribute (component, attribute) {
        return ReactDOM.findDOMNode(component).getAttribute(attribute);
    }

    describe('when rendered with default props', () => {

        beforeEach(() => {
            renderComponent({
                defaultValue: 'DEFAULT_VALUE__MOCK'
            });
        });

        it('should set the expected state', () => {
            expect(input.state).toEqual({
                value: 'DEFAULT_VALUE__MOCK'
            });
        });

        it('should set the provided defaultValue as value', () => {
            expect(getAttribute(input, 'value')).toEqual('DEFAULT_VALUE__MOCK');
        });

        it('should set input className', () => {
            expect(getAttribute(input, 'class')).toEqual('input');
        });

        it('should update state when input value changes', () => {
            Simulate.change(inputNode, {
                target: {
                    value: 'VALUE__MOCK'
                }
            });

            expect(input.state.value).toEqual('VALUE__MOCK');
        });
    });

    describe('when rendered with value', () => {

        beforeEach(() => {
            renderComponent({
                defaultValue: 'DEFAULT_VALUE__MOCK',
                value: 'VALUE__MOCK'
            });
        });

        it('should set the expected state', () => {
            expect(input.state).toEqual({
                value: 'VALUE__MOCK'
            });
        });

        it('should set the provided value as value even if defaultValue is provided', () => {
            expect(getAttribute(input, 'value')).toEqual('VALUE__MOCK');
        });
    });

    describe('when rendered with onChange property', () => {
        let onChangeStub;

        beforeEach(() => {
            onChangeStub = sinon.stub();

            renderComponent({
                defaultValue: 'DEFAULT_VALUE__MOCK',
                onChange: onChangeStub
            });
        });

        it('should call provided prop when input value changes', () => {
            Simulate.change(inputNode, {
                target: {
                    value: 'VALUE__MOCK'
                }
            });

            expect(onChangeStub.callCount).toEqual(1);
        });
    });
});
