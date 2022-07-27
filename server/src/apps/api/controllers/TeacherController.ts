import { Request, Response, NextFunction } from "express";
import { TeacherService } from "../../../services/TeacherServices";

interface TeacherRequest {
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

	getTeachers = (req: Request<TeacherRequest>, res: Response, next: NextFunction) => {
		return res.status(200).json({
			result: this.#service.getTeachers()
		});
	};

	getTeacherById = (req: Request<TeacherRequest>, res: Response, next: NextFunction) => {
		const { id } = req.query;

		//valida se é número


		return res.status(200).json({
			result: this.#service.getTeacherById(Number(id))
		})
	}

	addTeachers = (req: Request<TeacherRequest>, res: Response, next: NextFunction) => {
		const { nome, cpf, email, senha, excluido = false } = req.query;

		//valida tipos dos campos

		return res.status(200).json({
			result: this.#service.addTeacher(
				String(nome),
				String(cpf),
				String(email),
				String(senha),
				Boolean(excluido)
			)
		})
	};
}