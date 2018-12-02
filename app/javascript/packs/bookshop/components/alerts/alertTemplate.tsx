import * as React from "react";
import {Alert} from "reactstrap";

interface AlertTemplateProps {
    style: any;
    options: any;
    message: any;
    close: any;
}

class AlertTemplate extends React.Component<AlertTemplateProps> {

    render() {
        // the style contains only the margin given as offset
        // options contains all alert given options
        // message is the alert message...
        // close is a function that closes the alert
        const {style, options, message, close} = this.props;

        return (
            <Alert color={options.type} toggle={close}>
                {message}
            </Alert>
        )
    }
}

export default AlertTemplate;