import React from "react";
class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2
        };
        console.log("Child Constructor");
    }
 
    componentDidMount(){
        console.log(this.props.name + "Child Component Did Mount");
    }

    render()
    {
        const { name, location, contact } = this.props;

        console.log("Child Render");

        return(
            <div className="user-card justify-between">
                   <h2 className="font-bold pt-10">Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
            </div>
        );
    }
}

export default UserClass;