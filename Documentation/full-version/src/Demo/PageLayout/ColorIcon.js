import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../store/actions";

class ColorIcon extends Component {

    componentWillMount() {
        this.props.onChangeLayoutType('menu-light');
        if (!this.props.navIconColor) {
            this.props.onIconColored();
        }
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Color Icon Layout</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Open <code>config.ts</code> file from directory [ ../src/config.ts ] and edit <mark>highlighted</mark> options in this file.</Card.Text>
                                <Table bordered striped responsive>
                                    <thead className="header-table">
                                    <tr>
                                        <th>Configuration</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <ul>
                                                <li>layout: <code>vertical/horizontal</code></li>
                                                <li>preLayout: <code>null</code></li>
                                                <li>collapseMenu: <code>false</code></li>
                                                <li>layoutType: <code>menu-dark</code></li>
                                                <li><mark>navIconColor: <code>true</code></mark></li>
                                                <li>headerBackColor: <code>header-default</code></li>
                                                <li>navBackColor: <code>navbar-default</code></li>
                                                <li>navBrandColor: <code>brand-default</code></li>
                                                <li>navBackImage: <code>false</code></li>
                                                <li>rtlLayout: <code>false</code></li>
                                                <li>navFixedLayout: <code>true</code></li>
                                                <li>headerFixedLayout: <code>false</code></li>
                                                <li>boxLayout: <code>false</code></li>
                                                <li>navDropdownIcon: <code>style1</code></li>
                                                <li>navListIcon: <code>style1</code></li>
                                                <li>navActiveListColor: <code>active-default</code></li>
                                                <li>navListTitleColor: <code>title-default</code></li>
                                                <li>navListTitleHide: <code>false</code></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        navIconColor: state.navIconColor,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeLayoutType: (layoutType) => dispatch({type: actionTypes.LAYOUT_TYPE, layoutType: layoutType}),
        onIconColored: () => dispatch({type: actionTypes.NAV_ICON_COLOR})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ColorIcon);