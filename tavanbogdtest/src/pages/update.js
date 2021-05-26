import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Update extends Component{
    constructor(){
        super();
        this.state={
                name: '',
                major:'',
                age:'',
        };  
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }
    
    infoData(id){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/api/Update/'+id+'/')
        .then(response=>response.json())
        .then((info)=>{
            this.setState({
                id:info.id,
                name:info.name,
                categoryName:info.categoryName,
                age:info.age,
            });
        });
    }
    componentDidMount(){
        this.infoData();
    }

    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    submitForm(id){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/test/Update/'+(id)+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
    }
    render(){
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Нэр:</th>
                        <td>
                            <input value={this.state.name} name="name" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    
                    <tr>
                        <th>Нас:</th>
                        <td>
                            <input value={this.state.age} name="age" onChange={this.changeHandler} type="number" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Мэргэжил:</th>
                        <td>
                            <input value={this.state.major} name="major" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                       
                            <Button type="submit" onClick={this.submitForm(this.state.id)}>Submit</Button>
                        
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Update;