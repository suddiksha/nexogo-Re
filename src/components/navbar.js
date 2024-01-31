import Logo from "../assests/img/logo.png";
import "../assests/css/nav.css";
import Profile from "../assests/img/profile.png";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from "react-responsive";
function Navbar() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
  return (
    <>
      <nav class="navbar navbar-light  ">
        <div class="container-fluid p-0 m-0">
          <a class="navbar-brand" href="#">
            <img
              src={Logo}
              alt=""
             
              class="d-inline-block logo align-text-top"
            />
          </a>
          {isTabletOrMobile ?<MenuIcon className="menu"/>: 
          
          <ul className="list-item pt-2">
            <li class="nav-item">
              <a href="#home">PRODUCTS</a>
            </li>
            <li class="nav-item">
              <a href="#home">MARKETS</a>
            </li>
            <li class="nav-item">
              <a href="#home">CAPABILITIES</a>
            </li>
            <li class="nav-item">
              <a href="#home">ABOUT US</a>
            </li>
            <li class="nav-item">
            <Button variant="contained" className="contactus_btn">CONTACT US</Button>
            </li>
            <li class="nav-item">
              <a href="#home"><img src={Profile} className="profile"></img></a>
            </li>
          </ul>
       }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
