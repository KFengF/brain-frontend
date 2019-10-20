import React from 'react';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    onSubmit = () => {
        fetch('https://dry-mountain-00945.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                const { onRouteChange, setUser } = this.props;
                setUser(user);
                onRouteChange('Home');
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
                            <legend className="f1 fw6 ph0 mh0 tc">Sign In</legend>
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
                            <button type="button" value="Sign in" onClick={ this.onSubmit } 
                            className="b pa2 input-reset ba b--black bg-transparent grow pointer f4 dib">Sign in </button>
                            <p onClick={ () => onRouteChange('Register') } className="b f4 dim black mt3 pointer">Register</p>
                        </div>
                    </form>
                </main>
            </article>
        );
    }
}

export default SignIn;