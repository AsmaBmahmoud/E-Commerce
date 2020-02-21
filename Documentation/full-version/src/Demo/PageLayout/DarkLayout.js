import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../store/actions";

class DarkLayout extends Component {

    componentWillMount() {
        this.props.onChangeLayoutType('dark');
        this.props.onChangeNavActiveListColor('active-lightblue');
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Dark Layout</Card.Title>
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
                                                <li><mark>layoutType: <code>dark</code></mark></li>
                                                <li>navIconColor: <code>false</code></li>
                                                <li>headerBackColor: <code>header-default</code></li>
                                                <li><mark>navBackColor: <code>navbar-dark</code></mark></li>
                                                <li><mark>navBrandColor: <code>brand-dark</code></mark></li>
                                                <li>navBackImage: <code>false</code></li>
                                                <li>rtlLayout: <code>false</code></li>
                                                <li>navFixedLayout: <code>true</code></li>
                                                <li>headerFixedLayout: <code>false</code></li>
                                                <li>boxLayout: <code>false</code></li>
                                                <li>navDropdownIcon: <code>style1</code></li>
                                                <li>navListIcon: <code>style1</code></li>
                                                <li><mark>navActiveListColor: <code>active-*</code>(exclude active-default)</mark></li>
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

const mapDispatchToProps = dispatch => {
    return {
        onChangeLayoutType: (layoutType) => dispatch({type: actionTypes.LAYOUT_TYPE, layoutType: layoutType}),
        onChangeNavActiveListColor: (navActiveListColor) => dispatch({type: actionTypes.NAV_ACTIVE_LIST_COLOR, navActiveListColor: navActiveListColor})
    }
};

export default connect(null, mapDispatchToProps) (DarkLayout);