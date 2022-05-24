import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/MainStyle.css';
import LogInHeader from './Pages/LogIn/Header/Header';
import LogInMain from './Pages/LogIn/Main/Main';
import RegisterHeader from './Pages/Register/Header/Header';
import RegisterMain from './Pages/Register/Main/Main';
import FaceRecognizerHeader from './Pages/FaceRecognizer/Header'
import FaceRecognizerMain from './Pages/FaceRecognizer/Main'
import './Style/Fonts/Fonts.css';


class App extends React.Component {
    constructor() {
        super();
        this.currentTabIndex = 1;
    }

    displayCurrentTab() {
        switch (this.currentTabIndex) {
            case 1: return <LogInMain />
            case 2: return <RegisterMain />
            case 3: return <FaceRecognizerMain />
            default: return <LogInMain />
        }
    }

    changeTab(pageIndex){
        this.currentTabIndex=pageIndex
    }

    render(){
        return(
            this.displayCurrentTab()
        );
    }


}

export default App;