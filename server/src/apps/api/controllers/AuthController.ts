import { Request, Response, NextFunction } from "express";
import { AuthService } from "../../../services/AuthService";

interface AuthRequest {
	nome: String,
	senha: String,
	tipo: String
}

export class AuthController {
	#service: AuthService;

	constructor() {
		this.#service = new AuthService();
	}

	signIn = async (req: Request<AuthRequest>, res: Response, next: NextFunction) => {
		const { tipo, email, senha } = req.body;

		if (tipo == "" || email == "" || senha == "") {
			return res.status(400).json({ result: "ERRO: Confira e preencha todos os campos." });
		}

		if (tipo != "aluno" || tipo != "professor") {
			return res.status(400).json({ result: "ERRO: Confira e preencha todos os campos." });
		}

		const result = await this.#service.signIn(String(tipo), String(email), String(senha));

		return res.status(result.status).json({
			result: result.msg
		});
	}
}