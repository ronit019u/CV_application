import React, { Component } from "react";

class Sectiona extends Component {
    render() {
        const { name, email, phone, address } = this.props;
        return (
            <div>
             <h1>Personal info</h1>
             <h2>name:{name}</h2>
             <h2>email:{email}</h2>
             <h2>phone:{phone}</h2>
             <h2>Address:{address}</h2>
            </div>
        )
    }
}

export default Sectiona;