import { Request, Response, NextFunction } from "express";
import { TeacherService } from "../../../services/TeacherServices";

interface TeacherRequest {
	id: Number,
	nome: String,
	cpf: String,
	email: String,
	senha: String,
	excluido: Boolean
}

export class TeacherController {
	#service: TeacherService;

	constructor() {
		this.#service = new TeacherService();
	}

	getTeachers = async (req: Request<TeacherRequest>, res: Response, next: NextFunction) => {
		return res.status(200).json({
			result: await this.#service.getTeachers()
		});
	};

	getTeacherById = async (req: Request<TeacherRequest>, res: Response, next: NextFunction) => {
		const { id } = req.params;

		if (!id || !Number(id)) {
			return res.status(400).json({ result: "ERRO: ID inválido." });
		}

		const result = await this.#service.getTeacherById(Number(id));

		return res.status(result.status).json({
			result: result.msg
		})
	}

	addTeachers = async (req: Request<TeacherRequest>, res: Response, next: NextFunction) => {
		const { nome, cpf, email, senha, excluido = false } = req.body;

		if (nome == "" || email == "" || senha == "") {
			return res.status(400).json({ result: "ERRO: Preencha todos os campos." });
		}

		if (nome.length > 60 || email.length > 60 || senha.length > 500) {
			return res.status(400).json({ result: "ERRO: Número máximo de caracteres excedido." });
		}

		const emailPattern = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);

		if (!emailPattern) {
			return res.status(400).json({ result: "ERRO: Padrão de email inválido." });
		}

		const result = await this.#service.addTeacher(String(nome), String(cpf), String(email), String(senha), Boolean(excluido));


		return res.status(result.status).json({
			result: result.msg
		})
	};
}