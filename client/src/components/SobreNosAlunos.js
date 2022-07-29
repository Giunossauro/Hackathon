import  "../styles/LandingPageCSS.css";
import Aluno from "./Alunos.js";
import ImgJu from '../assets/ju.jpg'
import ImgLe from '../assets/le.jpg'
import ImgMilan from '../assets/milan.jpg'
import ImgMurilo from '../assets/murilo.jpg'
import ImgGiu from '../assets/giu.jpg'
import ImgEduComBalao from '../assets/EduComBalao.png'


const SobreNosAlunos= ()=>{
    return(
<>
<img src={ImgEduComBalao} alt="Edu Cação"
style={{width:"30vw", float:"left", margin:"10vw 1vw 0 7vw"}}
/>


<div className="SobreNosAlunos">


 
 <div className="FlexBoxVertical">
<Aluno 
    nome="Julia Téo"
    descricao="Formada em Oceanografia pela USP, e apaixonada pelo planeta em que vivemos, atualmente está em 
    transição de carreira e migrando para área de programação. Tem interesse em trabalhar para startups que 
    realizam contribuições sociais e sustentáveis."
    foto={ImgJu}
    linkedin="https://www.linkedin.com/in/julia-t-teo/"
    github="https://github.com/juructteo"
/>
<Aluno 
    nome="Leandro Patrício"
    descricao="Com bacharelado e mestrado em oceanografia pela USP, hoje faz transição de carreira para a área de desenvolvimento web. 'O sonho é juntar a área tech com oceanografia pesqueira'."
    foto={ImgLe}
    linkedin="https://www.linkedin.com/in/leandro-patrico/"
    github="https://github.com/Leandro-Patricio"
/>
<Aluno 
    nome="Murilo"
    descricao="Desenvolvedor Fullstack Web após migração de carreira de Engenheiro Civil. Escrevendo conteúdos em geral, cuidando de plantas, ouvindo rap ou assistindo algo nas horas vagas."
    foto={ImgMurilo}
    linkedin="https://www.linkedin.com/in/murilo-o/"
    github="https://github.com/akadot"
/>
<Aluno 
    nome="Milan Cruz"
    descricao="Fullstack dev formado pela Let's Code com background em Engenharia Civil e Ciências da Computação. Persistente, comunicativo e entusiasta de carros nas horas vagas."
    foto={ImgMilan}
    linkedin="https://www.linkedin.com/in/milan-cruz/"
    github="https://github.com/Milan-Cruz"
/>
<Aluno 
    nome="Giu"
    descricao="Formado pela Estácio como analista e desenvolvedor de sistemas, sentiu a necessidade de se especializar, e na Let's Code encontrou e agarrou a oportunidade para aprender a programar de verdade!"
    foto={ImgGiu}
    linkedin="https://www.linkedin.com/in/girzo/"
    github="https://github.com/Giunossauro"
    
/>
</div>
   </div>
</>             
)
}


export default SobreNosAlunos






