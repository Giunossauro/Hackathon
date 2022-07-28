import { animateScroll as scroll } from "react-scroll";
import "../styles/LandingPageCSS.css";


const BackToTopBtn= ()=>{
    return(
<>
<div style={{position:"sticky", bottom:0}}>
<button className="BackToTopBtn">
<a onClick={() => scroll.scrollToTop()}>&#11189;</a>

</button>
</div>
</>             
)
}


export default BackToTopBtn