import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm,Errors } from 'react-redux-form';

const required = (val) => (val)&&(val.length);
const minLength = (len) => (val) => (val)&&(val.length >= len);
const maxLength = (len) => (val) => (val)&&(val.length <= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values){
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
    }
    render (){
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil a-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Submit Comment
                        <span onClick={this.toggleModal} className="fa fa-times a-lg"></span>
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label md={12} htmlFor="rating">Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating"
                                        name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={12} htmlFor="author">Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author"
                                        name="author"
                                        className="form-control"
                                        validators= {{
                                            required, 
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}/>
                                    <Errors model=".author"
                                        className="text-danger"
                                        show="touched"
                                        messages={{
                                            required: "Required. ",
                                            minLength: "Must be greater than 2 characters. ",
                                            maxLength: "Must be less than 15 characters. "
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={12} htmlFor="comment">Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment"
                                        name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default CommentForm;