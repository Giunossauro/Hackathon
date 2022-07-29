import { animateScroll as scroll } from "react-scroll";
import "../styles/LandingPageCSS.css";


const BackToTopBtn= ()=>{
    return(
<>
<float style={{position:"sticky", bottom:"-1", margin:"-10px 0"}}>
<button className="BackToTopBtn">
<a onClick={() => scroll.scrollToTop()}>&#11189;</a>

</button>
</float>
</>             
)
}


export default BackToTopBtn