import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFullName(e) {
    this.setState({
      fullName: e.target.value,
    });

    console.log(e.target);
  }

  changeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.changeFullName}
                value={this.state.fullName}
                className="form-control form group"
              />
              <input
                type="text"
                placeholder="Username"
                onChange={this.changeUsername}
                value={this.state.username}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="Email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
              />

              <input
                type="password"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group"
              />

              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
