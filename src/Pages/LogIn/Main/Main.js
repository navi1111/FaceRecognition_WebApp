import React from "react";
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <form>
                <label>USERNAME or E-MAIL</label>
                <input type="text" placeholder="Enter Username" name="username" required></input>
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter Password" name="password" required></input>
                <button type="submit">LOGIN</button>
                <p>Not registered? <a href="#">Click Here</a></p>
            </form>

        );

    }

}

export default Main;