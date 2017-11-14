import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    paramA: PropTypes.object.isRequired,
    paramB: PropTypes.func,
    paramC: PropTypes.object
};

const defaultProps = {
    paramB: null,
    paramC: null
};

class TestComponent extends Component {
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        if (null === this.props.paramB) {
            throw new Error('No paramB! WHAT?!');
        }
    }
    
    render() {
        return (
            <div>
                {this.props.paramA}
                <br />
                {(!!this.props.paramB) ? <button type="button" onClick={this.props.paramB}>paramB</button> : null }
                <br />
                {(!!this.props.paramC) ? this.props.paramC : null}
            </div>
        );
    }
}

TestComponent.propTypes = propTypes;
TestComponent.defaultProps = defaultProps;

export default TestComponent;