import { StyledImg, StyledBackground, StyledCard, StyledH1, StyledP, StyledInput, StyledButton } from './Login.styles';

import { useState } from 'react';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailKnown, setIsEmailKnown] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCheckEmail = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find((user) => user.email === email);
        if (user) {
            setIsEmailKnown(true);
        } else {
            window.location.href = '../signup';
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find((user) => user.email === email);
        if (user && user.password === password) {
            console.log('login successful');
            setIsPasswordCorrect(true);
            setEmail('');
            setPassword('');
            setIsAuthenticated(true);
        } else {
            console.log('login failed');
            setIsPasswordCorrect(false);
        }
    };

    return (
        <>
            <StyledBackground>
                <StyledImg src="https://th.bing.com/th/id/R.9b1d62f8da183349b87f1c732feb0a45?rik=5gQhhoT4r4pPrg&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2017%2f04%2fEmbl%c3%a8me-Star-Wars.jpg&ehk=%2fXuSaDqvK0AJXY%2bEdrhJEWSCnmCTakqjxT8rowztK5A%3d&risl=&pid=ImgRaw&r=0" />
                <StyledCard>
                    <StyledH1>Enter your email</StyledH1>
                    <StyledP>Log into your Star Wars account. If you don't have one, you will be prompted to create one.</StyledP>
                    <StyledInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <StyledButton onClick={handleCheckEmail}>Check Email</StyledButton>
                    {isEmailKnown && (
                        <>
                            <StyledInput
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <StyledButton onClick={handleLogin}>Login</StyledButton>
                        </>
                    )} </StyledCard>
            </StyledBackground>
        </>
    );
};

export default Login;