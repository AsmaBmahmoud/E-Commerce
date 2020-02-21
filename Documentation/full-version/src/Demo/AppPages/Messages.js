import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Aux from "../../hoc/_Aux";
import friend from "../../App/layout/AdminLayout/NavBar/NavRight/ChatList/Friends/friends";
import Friend from "../../App/layout/AdminLayout/NavBar/NavRight/ChatList/Friends/Friend";
import chatMsg from "../../App/layout/AdminLayout/NavBar/NavRight/ChatList/Friends/Chat/chat";
import Message from "../../App/layout/AdminLayout/NavBar/NavRight/ChatList/Friends/Chat/Messages";


class Messages extends React.Component {
    state = {
        chatOpen: true,
        user: {
            id: 6,
        }
    };

    render() {

        const friendList = (friend).map(f => {
            return <Friend key={f.id} data={f} activeId={this.state.user.id} clicked={() => this.setState({chatOpen: true, user: f})} />;
        });

        let message = <div className="text-center text-danger">Chat Not Found</div>;
        chatMsg.filter(chats => {
            if (chats.friend_id === this.state.user.id) {
                message = (chats.messages).map((msg, index) => {
                    return <Message key={index} message={msg} name={this.state.user.name} photo={chats.friend_photo} />;
                });
            }
            return false;
        });

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card className="msg-card">
                            <Card.Body>
                                <Row>
                                    <Col xl={3} md={12}>
                                        <div className="h-list-header m-b-5">
                                            <div className="input-group">
                                                <input type="text" id="msg-friends" className="form-control" placeholder="Search Friend . . ." />
                                                <div className="input-group-append">
                                                    <span className="input-group-text"><i className="feather icon-search"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-list-body">
                                            <div className="msg-user-list scroll-div">
                                                <div className="main-friend-list" style={{height: 'calc(100vh - 300px)'}}>
                                                    <PerfectScrollbar>
                                                        {friendList}
                                                    </PerfectScrollbar>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={9} md={12}>
                                        <div className="h-list-body">
                                            <div className="msg-user-chat scroll-div" style={{height: 'calc(100vh - 340px)'}}>
                                                <PerfectScrollbar>
                                                    <div className="main-friend-chat">
                                                        {message}
                                                    </div>
                                                </PerfectScrollbar>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="msg-form">
                                            <div className="input-group mb-0">
                                                <input type="text" className="form-control msg-send-chat" placeholder="Text . . ." />
                                                <div className="input-group-append">
                                                    <input type="file" id="imgupload" style={{display:'none'}} />
                                                    <button id="OpenImgUpload" className="btn btn-secondary btn-icon" type="button" data-toggle="tooltip" title="file attachment"><i className="feather icon-paperclip"/></button>
                                                </div>
                                                <div className="input-group-append">
                                                    <button className="btn btn-theme btn-icon btn-msg-send" type="button"><i className="feather icon-play"/></button>
                                                </div>
                                            </div>
                                        </div>
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

export default Messages;