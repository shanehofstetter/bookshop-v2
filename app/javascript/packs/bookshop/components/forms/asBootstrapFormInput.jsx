import * as React from "react";
import {addClass} from "./utils";

const asBootstrapFormInput = (FormInput) => {

    return class extends React.Component {

        render() {
            let {className = '', errors = [], ...rest} = this.props;
            let invalid = errors.length > 0;

            className = addClass(className, 'form-control');
            if (invalid) {
                className = addClass(className, 'is-invalid');
            }
            return <React.Fragment>
                <FormInput {...rest} className={className}/>
                {invalid ? <div className="invalid-feedback">{errors.join(' ')}</div> : ''}
            </React.Fragment>
        }
    };

};

export default asBootstrapFormInput;