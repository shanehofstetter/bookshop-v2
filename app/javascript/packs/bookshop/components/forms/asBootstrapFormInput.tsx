import * as React from "react";
import {addCssClass, GenericProperties} from "./utils";

interface BootstrapFormInputProps extends GenericProperties {
    className?: string;
    errors?: any[];
}

const asBootstrapFormInput = (FormInput) => {

    return class extends React.Component<BootstrapFormInputProps> {

        render() {
            let {className = '', errors = [], ...rest} = this.props;
            let invalid = errors.length > 0;

            className = addCssClass(className, 'form-control');
            if (invalid) {
                className = addCssClass(className, 'is-invalid');
            }
            return <React.Fragment>
                <FormInput {...rest} className={className}/>
                {invalid ? <div className="invalid-feedback">{errors.join(' ')}</div> : ''}
            </React.Fragment>
        }
    };

};

export default asBootstrapFormInput;