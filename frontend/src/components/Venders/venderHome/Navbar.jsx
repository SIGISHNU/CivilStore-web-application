import './Navbar.css'
import venderHome from '../Images/venderhome.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

    return(
        <div>

        <div className="sidenav active">
            <div className="sidenav-header">
        <img src={venderHome} alt="vender-home-text" className="home-text image-fluid" ></img>
        </div>
        <div className="sidenav-component">
            <ul>
                <li>
                    <a className="alink" style={{textDecoration:"none"}} href="#">Home</a>
                </li>

                <li>
                    <Link className="alink"  to="/addproduct" style={{textDecoration:"none"}} >
                    <a>Add Product</a>
                    </Link>
                </li>

                <li>
                    <a className="alink" style={{textDecoration:"none"}} href="">Waiting List</a>
                </li>

                <li>
                    <a className="alink" style={{textDecoration:"none"}} href="">View All Product</a>
                </li>

                <li>
                    <a className="alink" style={{textDecoration:"none"}} href="">Contact Admin</a>
                </li>

                <li>
                    <a className="alink" style={{textDecoration:"none"}} href="">Logout</a>
                </li>
            </ul>
            </div>

        </div>
        </div>
    )
}


export default Navbar;