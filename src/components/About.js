import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);
        
        console.log("Parent Consturctor")
    }
    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
    render(){
        console.log("Parent Render");
        return (
            <div className="text-center p-10 ">
                
                <h1>About</h1>
                <h2>*This is swiggy clone web app for learing React*</h2>
    
                <UserClass name={"Deepa EV"} location={"Chennai"} contact={"+91 9080702627"}/>
            </div>
        );
    }

}


export default About;