import * as React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {WithNamespaces, withNamespaces} from "react-i18next";
import {Link} from "react-router-dom";

export interface NavigationBarProperties extends WithNamespaces {
}

export interface NavigationBarState {
    isOpen: boolean;
}

class NavigationBar extends React.Component<NavigationBarProperties, NavigationBarState> {
    constructor(props: NavigationBarProperties) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const i18n = this.props.i18n;

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href={'/'}>Bookshop</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {i18n.language}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {
                                        ['de', 'en'].map(locale => {
                                            return <DropdownItem key={locale}
                                                                 onClick={() => i18n.changeLanguage(locale)}>{locale}</DropdownItem>;
                                        })
                                    }
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default withNamespaces('translation')(NavigationBar);