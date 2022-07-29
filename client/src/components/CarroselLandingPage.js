import React from "react";
import "../styles/Profile.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CarroselLandingPage = () => {
    return (
        <div style={{textAlign:"center", marginBottom:"5vh"}}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={3}
          totalSlides={15}
          isPlaying={true}
          interval={3000}
          infinite={true}
       
        >
          <Slider>
            <Slide index={0}>Aprenda a programar</Slide>
            <Slide index={1}>O Edu cação é o mascote da Code Ocean</Slide>
            <Slide index={2}>Nunca é tarde para começar</Slide>
            <Slide index={3}>Cursos grátis do zero ao fullstack </Slide>
            <Slide index={4}>Plataforma simples e intuitiva </Slide>
            <Slide index={5}>Ranking dos cursos mais bem avaliados </Slide>
            <Slide index={6}>Domine Javascript </Slide>
            <Slide index={7}>Descobra o mundo do HTML e CSS </Slide>
            <Slide index={8}>Comunique-se com APIs </Slide>
            <Slide index={9}>Torne-se fera no React.js </Slide>
            <Slide index={10}>Cursos de programação para todos os níveis de conhecimento </Slide>
            <Slide index={11}>Qualifique-se para alcançar sua primeira vaga </Slide>
            <Slide index={12}>Receba seu certificado na conclusão</Slide>
            <Slide index={13}>Ganhe experiência ensinando</Slide>
            <Slide index={14}>Professores reconhecidos no mercado </Slide>


          </Slider>
{/*           <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext> */}
        </CarouselProvider>
              </div>
    )
}


export default CarroselLandingPage