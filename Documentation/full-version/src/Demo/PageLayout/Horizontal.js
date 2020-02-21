import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../store/actions";

class Horizontal extends Component {

    componentWillMount() {
        const contentWidth = document.getElementById('root').clientWidth;
        if (this.props.layout !== 'vertical' && contentWidth < 992) {
            this.props.onChangeLayout('vertical');
        } else {
            this.props.onChangeLayout('horizontal');
            if (this.props.collapseMenu) {
                this.props.onToggleNavigation();
            }
        }


    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Horizontal Layout</Card.Title>
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
                                                <li><mark>layout: <code>horizontal</code></mark></li>
                                                <li>preLayout: <code>null</code></li>
                                                <li><mark>collapseMenu: <code>false</code></mark></li>
                                                <li>layoutType: <code>menu-dark</code></li>
                                                <li>navIconColor: <code>false</code></li>
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
                                                <li>configBlock: <code>false</code></li>
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
        layout: state.layout,
        collapseMenu: state.collapseMenu
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleNavigation: () => dispatch({type: actionTypes.COLLAPSE_MENU}),
        onChangeLayout: (layout) => dispatch({type: actionTypes.CHANGE_LAYOUT, layout: layout})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Horizontal);