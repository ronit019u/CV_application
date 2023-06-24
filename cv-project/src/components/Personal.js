import React, { Component } from "react";
import Sectiona from "./Sectiona";




class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",  
            phone: "",
            address: "",
        };
    }
     handleInputChange = (e) => {
        this.setState ({
      [e.target.name]: e.target.value,   
    });
    };

    handleSave = (e) => {
        e.preventDefault();
        const { name, email, phone, address } = this.state;
       const saveData = { name, email, phone, address };
        this.setState({saveData});

        };
    
     

    render() {
        const { name, email, phone, address, saveData } = this.state;
           return (
            <div>
                <form onSubmit={this.handleSave}>
                <label htmlFor="nameInput">Name:</label>
            <input
            type="text"
            id="nameInput"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            />

            <label htmlFor="email">email:</label>
            <input 
            type="email" 
            id="email" 
            value={email}
            name="email" 
            onChange={this.handleInputChange} 
            />

            <label htmlFor="phone">Phone:</label>
            <input 
            type="tel"
            name="phone"  
            value={phone} 
            onChange={this.handleInputChange}
            />
            <label htmlFor="addressInput">Address:</label>
              <input type="text" name="address" onChange={this.handleInputChange} value={address} />  
            <button type="submit">Submit</button>
            </form>
            {saveData && (
                <Sectiona 
                name = {saveData.name}
                email= {saveData.email}
                phone = {saveData.phone}
                address = {saveData.address}
                />
            )}
           
            </div>
           );  
    }
}

export default Personal;