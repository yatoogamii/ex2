import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class App extends Component<any, any> {
  
  constructor(props: any) {
    super(props);
    
    this.state = {
      space: "public",
    }
  }
  
  componentDidMount(): void {
    this.getSession();
  }
  
  getSession() {
    fetch('/me')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          space: data.space,
        });
      });
  }
  
  render() {
    
    switch (this.state.space) {
      
      case 'private':
        return (
          <>
            <PrivateSpace />
          </>
        );
      
      default:
      case 'public':
        return (
          <>
            <h1>Home Page</h1>
            <form action="/login" method="POST">
              <input type="text" name="username" placeholder="Username" required/>
              <input type="password" name="password" placeholder="Password" required/>
              <input type="submit"/>
            </form>
          </>
        );
    }
  }
  
}


class PrivateSpace extends Component<any, any> {
  
  constructor(props: any) {
    super(props);
  }
  
  render() {
  
    return (
      <>
        Espace privé<br/>
        <a href={"/logout"}>Logout</a>
      </>
    );
    
    
  }
  
  
}
