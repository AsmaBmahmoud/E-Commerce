import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux/index";
import PieChart from "./PieChart";
import XyChart from "./XyChart";
import MapChart from "./MapChart";

class AmChart extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Amchart 4</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h3 className="mb-4">Pie Chart</h3>
                                <Row>
                                    <Col className="mb-5">
                                        <h5>Pie [ With Legend ] Chart</h5>
                                        <hr/>
                                        <PieChart />
                                    </Col>
                                </Row>
                                <h3 className="mb-4">XY Chart</h3>
                                <Row>
                                    <Col className="mb-5">
                                        <h5>XY [ Stacked 1 ] Chart</h5>
                                        <hr/>
                                        <XyChart/>
                                    </Col>
                                </Row>
                                <h3 className="mb-4">Map Chart</h3>
                                <Row>
                                    <Col className="mb-5">
                                        <h5>Map [ Heat-Map ] Chart</h5>
                                        <hr/>
                                        <MapChart />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default AmChart;