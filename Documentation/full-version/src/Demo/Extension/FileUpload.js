import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import DropzoneComponent from 'react-dropzone-component';

import Aux from "../../hoc/_Aux";

class FileUpload extends React.Component {
    constructor(props) {
        super(props);

        this.djsConfig = {
            addRemoveLinks: false,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            autoProcessQueue: false,
            uploadprogress: 100
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: 'no-url'
        };
    }

    handleFileAdded(file) {
        console.log(file);
    }

    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

        const eventHandlers = {
            addedfile: this.handleFileAdded.bind(this)
        };

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>File Upload</Card.Title>
                            </Card.Header>
                            <Card.Body className='calendar'>
                                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FileUpload;