import React, { Component } from 'react'
import axios from 'axios'
export default class CURDUI extends Component
{
constructor(props)
{
 super(props)
 this.state = {
    empid:''
 }
this.handleSubmit=this.handleSubmit.bind(this)
this.handleChange=this.handleChange.bind(this)
}
 handleChange(event)
{
 this.setState({[event.target.name]:event.target.value})
}
 handleSubmit(event)
{
event.preventDefault();
console.log(this.state)
axios.post('http://localhost:5000/selectemployee',this.state)
.then(response=>
{
console.log(response.data);
document.getElementById("op").innerHTML=response.data;
this.setState({res:response.data})
})
.catch(error=>console.log(error)) }
 render()
{ return (
<div>
 <form onSubmit={this.handleSubmit}>
 <h1> Enter EMPID</h1> <input type="text" name="empid" onChange={this.handleChange}/> <br/>
 
<br/> <input type="submit"/>
</form>
<div id="op"></div>
</div>
)
}
}
