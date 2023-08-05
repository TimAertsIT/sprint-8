import { StyledBackground, StyledUl } from './Layout.styles';
import { Link, Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <StyledBackground>
            <ul>
                <Link to="/"><StyledUl> Home</StyledUl></Link>
                <Link to="/starships/"><StyledUl>Starships</StyledUl></Link>
            </ul>
            <Outlet />
        </StyledBackground>
    )
}

export default Layout;