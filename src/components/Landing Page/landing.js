import "../../assests/css/land.css";
import Button from "@mui/material/Button";
import Rec from "../../assests/img/rectangle.png";
import Bty1 from "../../assests/img/bty.png";
import Appln from "../../assests/img/appln1.png"
import Appln1 from "../../assests/img/appln2.png"
function Landing() {
  return (
    <>
      <div className="landing mt-5">
        <div className="row  p-0 m-0">
          <div className="col-6">
            <div className="ms-5 ps-2">
            <h1 className="best">BEST IN CLASS PERFORMANCE</h1>
            <p className="lithium mt-2">Lithium-Ion Battery</p>
            <p className="lithium-sub ">
              The VIGOR is a breakthrough in ENERGY needs for a Light-Electric
              Vechicle.
            </p>
            <Button variant="contained" className="learn_more  ">
              LEARN MORE
            </Button>
            </div>
          </div>
          <div className="col-6 ">
            
            <img src={Bty1} className="bty1 mt-5"></img>
          </div>
        </div>

        <div className="rectangle">

          <img src={Rec} className="rect"></img>
        
           <h1 className="appln text-end  ">Applications</h1>
           <div className="appln-img   text-end mt-4 ">
<p><img src={Appln} className="app1"></img><span className="me-4 ms-1">For Electric Bike</span></p>

<p><img src={Appln1} className="app1"></img><span className=" ms-1">For Electric Scooter</span></p>





           </div>
         </div>
        
      </div>
    </>
  );
}

export default Landing;
