import React from "react";
import './Main.css';
import App from '../../../App';


class Main extends React.Component {
    buttonRegisterOnClick(index){
    }
    render() {
        return (
            <form>
                <label>E-MAIL</label>
                <input type="email" placeholder="Enter E-mail" name="email" id="email" required></input>
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter password" name="password" id="password" required></input>
                <label>USERNAME</label>
                <input type="text" placeholder="Enter username" name="username" id="username" required></input>
                <button type="submit">REGISTER</button>
                <p><a href="#">Cancel</a></p>
            </form>
        );

    }

}

export default Main;