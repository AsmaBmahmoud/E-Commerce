import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux/index";
import AreaBasicChart from "./AreaBasicChart";
import AreaStackingChart from "./AreaStackingChart";
import BarBasicChart from "./BarBasicChart";
import BubbleChart from "./BubbleChart";
import CandlestickChart from "./CandlestickChart";
import WaterfallChart from "./WaterfallChart";
import ComboChart from "./ComboChart";
import PieDonutChart from "./PieDonutChart";
import PieExploadingChart from "./PieExploadingChart";
import PieSliceVisibilityChart from "./PieSliceVisibilityChart";

class GoogleChart extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <AreaBasicChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Stacking Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <AreaStackingChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <BarBasicChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bubble Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <BubbleChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Candlestick Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <CandlestickChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Waterfall Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <WaterfallChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Combo Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ComboChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Donut Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <PieDonutChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Exploading A Slice Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <PieExploadingChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Slice Visibility Threshold Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <PieSliceVisibilityChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default GoogleChart;