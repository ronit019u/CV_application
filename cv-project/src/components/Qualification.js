import React, { Component } from "react";
import Education from "./Sectionb";

class Qualification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            university: "",
            from: "",
            to: "",
            degree: "",
        };
   
    }

    handleInput = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };


        SubmitSave = (e) => {
            e.preventDefault();
            const { university, to, from, degree } = this.state;
            const  SaveData = {university, from, to, degree};
            this.setState({SaveData});
        };

        render() {
            const {university, from, to, degree, SaveData} = this.state;
            return (
             <div>
               
                <form onSubmit={this.SubmitSave}>
                    <label htmlFor="universityInput">University</label>
                        <input type="text" value={university} id="universityInput" name="university" onChange={this.handleInput}
                        />          
                    <label htmlFor="frominput">From:</label>
                    <input type="date" value={from} id="frominput" onChange={this.handleInput} name="from" 
                    />
                    <label htmlFor="toinput">To:</label>
                        <input type="date" value={to} id="toinput" onChange={this.handleInput} name="to"
                       />
                    <label htmlFor="Degreeinput">Degree:</label>
                        <input type="text" value={degree} id="Degreeinput" onChange={this.handleInput} name="degree" 
                    />
                    <button type="submit">Submit</button>
                </form>
               {SaveData && (
                 <Education 
                 university = {SaveData.university}
                 from= {SaveData.from}
                  to= {SaveData.to} 
                  degree = {SaveData.degree}
                 />

               )}
             </div>
            );
        }
        
    }

    export default Qualification;