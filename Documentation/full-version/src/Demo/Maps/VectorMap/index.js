import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import {VectorMap} from 'react-jvectormap';

import Aux from "../../../hoc/_Aux";

class VectorMaps extends React.Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Basic Map World</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div style={{height: '400px', width: '100%'}}>
                                    <VectorMap
                                        backgroundColor="#EC407A"
                                        map={'world_mill'}
                                        ref="map"
                                        containerStyle={{
                                           width: '100%',
                                           height: '100%'
                                        }}
                                        containerClassName="map-vector" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Asia</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div style={{height: '400px', width: '100%'}}>
                                    <VectorMap
                                        backgroundColor="#1B8BF9"
                                        map={'asia_mill'}
                                        ref="map"
                                        containerStyle={{
                                           width: '100%',
                                           height: '100%'
                                        }}
                                        containerClassName="map-vector" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">USA Map</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div style={{height: '400px', width: '100%'}}>
                                    <VectorMap
                                        backgroundColor="#b1b64c"
                                        map={'us_aea'}
                                        ref="map"
                                        containerStyle={{
                                           width: '100%',
                                           height: '100%'
                                        }}
                                        containerClassName="map-vector" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Africa Map</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div style={{height: '400px', width: '100%'}}>
                                    <VectorMap
                                        backgroundColor="#b32f23"
                                        map={'africa_mill'}
                                        ref="map"
                                        containerStyle={{
                                           width: '100%',
                                           height: '100%'
                                        }}
                                        containerClassName="map-vector" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default VectorMaps;