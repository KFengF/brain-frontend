import React from 'react';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Rank from './components/Rank';
import ImageLinkForm from './components/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition';
import SignIn from './components/SignIn';
import Register from './components/Register';
import 'tachyons';
import Particles from 'react-particles-js';

const particlesOptions = {
    "particles": {
        "number": {
            "value": 123,
            "density": {
            "enable": true,
            "value_area": 500
            }
        },    
        "opacity": {
            "value": 0.6
        },
        "size": {
            "value": 2
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "opacity": 0.5
        },
        "move": {
            "enable": true,
            "speed": 15
        }
    }
}

const cssParticles = {
    position: 'fixed',
    zIndex: '-1'
}

const initialState = {
    input: '',
    imgURL: '',
    boxes: [],
    route: 'SignIn',
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    }
}

class App extends React.Component {
    constructor(){
        super();
        this.state = initialState;
    }

    setUser = (user) => {
        this.setState({ user: {
            id: user.id,
            name: user.name,
            email: user.email,
            entries: user.entries,
            joined: user.joined
        }})
    }

    onInputChange = (event) =>{
        this.setState({ input: event.target.value })
    }

    onPictureSubmit = () => {
        const { input, user } = this.state;
        this.setState({ imgURL: input });
        fetch('https://dry-mountain-00945.herokuapp.com/api', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ input })
            })
            .then(response => response.json())
            .then(response => {
                if (response) fetch('https://dry-mountain-00945.herokuapp.com/image', {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: user.id })
                })
                .then(response => response.json())
                .then(count => {
                    this.setState(Object.assign(user, { entries: count }));
                })
                .catch(error => console.log(error));
                this.setBoxes(response)
            })
            .catch(error => console.log(error));
    }

    calculateFaceLocation = (data) =>{
        return data.outputs[0].data.regions.map(region => {
            return {
                left: region.region_info.bounding_box.left_col * 100,
                right: (1 - region.region_info.bounding_box.right_col) * 100,
                top: region.region_info.bounding_box.top_row * 100,
                bottom: (1 - region.region_info.bounding_box.bottom_row) * 100
            };
        });
    }

    setBoxes = (data) => {
        const regions = this.calculateFaceLocation(data);
        this.setState({ boxes: regions });
    }

    onRouteChange = (route) => {
        if(route === 'SignIn') return this.setState(initialState);
        this.setState({ route: route });
    }

    render(){
        const { imgURL, route, boxes } = this.state;
        return (
            <div>
                <Particles params={ particlesOptions } style={ cssParticles }/>
                <Navigation onRouteChange={ this.onRouteChange } route={ route }/>
                {
                    route === 'Home'
                    ? <div>
                        <Logo />
                        <Rank name={ this.state.user.name } entries={ this.state.user.entries } />
                        <ImageLinkForm onInputChange={ this.onInputChange } onPictureSubmit={ this.onPictureSubmit }/>
                        <FaceRecognition imgURL={ imgURL } boxes={ boxes } />
                    </div>
                    : (
                        route === 'SignIn'
                        ? <SignIn onRouteChange={ this.onRouteChange } setUser={ this.setUser } />
                        : <Register onRouteChange={ this.onRouteChange } setUser={ this.setUser } />
                    )
                }
            </div>
        )
    }
}

export default App;