import { StyledBackground, StyledUl, StyledImg, StyledList, Invisible } from './Header.styles';
import { Link, Outlet } from 'react-router-dom';


const Header = () => {
    return (
        <StyledBackground>
            <Invisible>Invisible</Invisible>
            <StyledImg src="https://th.bing.com/th/id/R.9b1d62f8da183349b87f1c732feb0a45?rik=5gQhhoT4r4pPrg&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2017%2f04%2fEmbl%c3%a8me-Star-Wars.jpg&ehk=%2fXuSaDqvK0AJXY%2bEdrhJEWSCnmCTakqjxT8rowztK5A%3d&risl=&pid=ImgRaw&r=0" />
            <StyledList>
                <Link to="/login"><StyledUl> Log in</StyledUl></Link>
                <Link to="/signup"><StyledUl> Sign up </StyledUl></Link>
            </StyledList>
            <Outlet />
        </StyledBackground>
    );
};

export default Header;