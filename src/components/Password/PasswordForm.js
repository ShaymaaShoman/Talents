import React from "react";

class PasswordForm extends React.Component {
    constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { value } = this.state;
        const re = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
        const isOk = re.test(value);

        console.log(isOk);

        if(!isOk) {
            return alert('weak!');
        }

        alert('A password was submitted that was ' + value.length + ' characters long.');
    }

     render() {
         return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Password:&nbsp;
                    <input type="password" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}