import React from 'react';
import "./App.css";
import Nav from "../Nav/Nav.jsx"
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Challenge from '../Challenge/Challenge';
class App extends React.Component {
    render() {
        return (
            // this 

            <div className="app">
                <Nav />
                <Landing />
                <Footer />
                <Challenge />
            </div>
        );
    }
}
export default App;