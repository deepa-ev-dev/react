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
            <div>
                
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
    
                <UserClass name={"1st "} location={"Chennai"} contact={"+91 9080702627"}/>
                <UserClass name={"2nd "} location={"Chennai"} contact={"+91 9080702627"}/>
                <UserClass name={"3rd "} location={"Chennai"} contact={"+91 9080702627"}/>
            </div>
        );
    }

}


export default About;