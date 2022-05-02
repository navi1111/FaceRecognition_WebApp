import React from "react";
import './Main.css';


class Main extends React.Component {
    render() {
        return (
            <form>
                <label>E-MAIL</label>
                <input type="email" placeholder="Enter E-mail" name="email" id="email" required></input>
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter password" name="password" id="password" required></input>
                <label>USERNAME</label>
                <input type="text" placeholder="Enter username" name="username" id="username" required></input>
                <button type="submit" href="../HTML-Files/Main.html">REGISTER</button>
                <p><a href="./SignIn.html">Cancel</a></p>
            </form>
        );

    }

}

export default Main;