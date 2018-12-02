import * as React from "react";
import {Form as InformedForm} from "informed";
import {GenericProperties} from "./utils";

class Form extends React.Component<GenericProperties> {
    render() {
        const {children, ...other} = this.props;

        return <InformedForm {...other}>{children}</InformedForm>
    }
}

export default Form;
