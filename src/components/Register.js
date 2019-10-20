import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onSubmit = () => {
        fetch('https://dry-mountain-00945.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                const { onRouteChange, setUser } = this.props;
                onRouteChange('Home')
                setUser(user);
            };
        })
        .catch(console.log);
    }

    render(){
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-75-m w-50-l mw6 center shadow-5">
                <main className="pa4 black-80">
                    <form action="">
                        <fieldset className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 tc">Register</legend>
                            <label htmlFor="name" className="db fw6 lh-copy f4 mt3">Name:</label>
                            <input type="text" name="name"  id="name" onChange={ this.onNameChange }
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" />
                            <label htmlFor="email-address" className="db fw6 lh-copy f4 mt3">Email:</label>
                            <input type="email" name="email-address" onChange={ this.onEmailChange }
                            id="email-address" 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" />
                            <label htmlFor="password" className="db fw6 lh-copy f4 mt3">Password:</label>
                            <input type="password" name="password" onChange={ this.onPasswordChange }
                            id="password" 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 mb3" />
                        </fieldset>
                        <div className="flex justify-between">
                            <button type="button" value="Register to" onClick={ this.onSubmit } 
                            className="b pa2 input-reset ba b--black bg-transparent grow pointer f4 dib">Register to</button>
                            <p onClick={ () => onRouteChange('SignIn') } className="b f4 link dim black mt3 pointer">Sign In</p>
                        </div>
                    </form> 
                </main>
            </article>
        );
    }
}

export default Register;