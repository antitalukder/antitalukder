import { Outlet ,Link} from "react-router-dom"
import { Fragment , useContext} from "react";
import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
const Navigation = () => {
    const { currentuser} = useContext(UserContext) 
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                 <CrwnLogo  className="logo" />
                </Link>
            
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        SignIn
                    </Link>
             
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;