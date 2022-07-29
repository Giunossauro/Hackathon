import "../styles/LandingPageCSS.css";
const { SocialIcon } = require('react-social-icons');

const Aluno = (props) => {
    return (
        <>
            <div className="AlunoComFoto"
            >
                <img style={{ height: "100px", width: "100px", borderRadius: "50px" }}
                    src={props.foto} alt={props.nome} />

                <div className="AlunoComInfo">
                    <div style={{ fontSize: "20px" }}
                    >{props.nome}</div>
                    <div>
                        <a href={props.linkedin} target="_blank">
                            <SocialIcon 
                                fgColor="#ffffff"
                                network="linkedin" 
                                style={{ height: 25, width: 25, marginRight: "5px" }} />
                        </a>

                        <a href={props.github} target="_blank">
                            <SocialIcon
                                fgColor="#ffffff"
                                network="github" 
                                style={{ height: 25, width: 25, marginRight: "5px" }} />
                        </a>

                    </div>
                    <div>{props.descricao}</div>
                </div>
            </div>
        </>
    )
}


export default Aluno






