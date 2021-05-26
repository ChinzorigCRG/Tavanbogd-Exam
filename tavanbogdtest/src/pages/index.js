import React, { Component } from 'react'
import {Container, Row, Card, Button} from 'react-bootstrap';
import './card.css';
import history from '../history';

export default class ViewSet extends Component{
    constructor(){
        super();
        this.state={
            info:[],
        };
        this.deleteInfoData=this.deleteInfoData.bind(this);
    };

    infoData(){
        fetch('http://127.0.0.1:8000/test/info/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                info:data
            });
        });
    }

    componentDidMount(){
        this.infoData();
    }

    deleteInfoData(id){
        fetch('http://127.0.0.1:8000/test/Delete/'+(id)+'/',{
            method:'DELETE',
            body:JSON.stringify(this.state),
        })
        .then(response=>response)
        .then((data)=>{
            if(data){
                this.infoData();
            }
        });
    }

    render(){
        return(
        <Container>
            <Row>
                {this.state.info.map(info=>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body >
                            <Card.Text>Нэр: {info.name}</Card.Text>
                            <Card.Text>Нас: {info.age}</Card.Text>
                            <Card.Text>Мэргэжил: {info.major}</Card.Text>
                            <Button variant="outline-info" onClick={() => history.push('/update/'+(info.id))}>Update</Button>&nbsp;
                            <Button variant="outline-danger" onClick={()=>this.deleteInfoData(info.id)}> Delete</Button>
                        </Card.Body>
                    </Card>
                )}
            </Row>
            <Button variant="btn btn-success" onClick={() =>history.push('/create')}>Ажилчин нэмэх</Button>
        </Container>
        );
    }
}