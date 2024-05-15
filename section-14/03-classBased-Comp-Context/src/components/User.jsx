import classes from "./User.module.css";
import { Component } from "react";

// CLASS BASED COMPONENTS
class User extends Component {
  componentDidMount() {
    console.log("User.componentDidMount");
  }
  componentWillUnmount() {
    console.log("User will unmount!");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// FUNCTION BASED COMPONENT
// const User = (props) => {
//   return <li className={classes.user}>{this.props.name}</li>;
// };

export default User;
