import { useState } from 'react';
import { StyledImg, StyledBackground, StyledCard, StyledH1, StyledP, StyledInput, StyledButtonInput2, StyledForm } from './Signup.styles';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { email, password, name };
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        setEmail('');
        setPassword('');
        setName('');
    }

    return (
        <>
            <StyledBackground>
                <StyledImg src="https://th.bing.com/th/id/R.9b1d62f8da183349b87f1c732feb0a45?rik=5gQhhoT4r4pPrg&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2017%2f04%2fEmbl%c3%a8me-Star-Wars.jpg&ehk=%2fXuSaDqvK0AJXY%2bEdrhJEWSCnmCTakqjxT8rowztK5A%3d&risl=&pid=ImgRaw&r=0" />
                <StyledCard>
                    <StyledH1>Create your account</StyledH1>
                    <StyledP>Star Wars is part of The Walt Disney Family of Companies. You'll be able to log into services and experiences using the same email and password.</StyledP>
                    <StyledForm onSubmit={handleSubmit}>
                        <label>
                            <StyledInput type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            <StyledInput type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            <StyledInput type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
                        </label>
                        <br />
                        <StyledButtonInput2 type="submit" value="Submit" />
                    </StyledForm>
                </StyledCard>
            </StyledBackground>
        </>
    );
}

export default Signup;