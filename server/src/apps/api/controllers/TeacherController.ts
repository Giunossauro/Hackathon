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

		//valida se é número


		return res.status(200).json({
			result: await this.#service.getTeacherById(Number(id))
		})
	}

	addTeachers = async (req: Request<TeacherRequest>, res: Response, next: NextFunction) => {
		const { nome, cpf, email, senha, excluido = false } = req.body;

		//valida tipos dos campos

		return res.status(200).json({
			result: await this.#service.addTeacher(
				String(nome),
				String(cpf),
				String(email),
				String(senha),
				Boolean(excluido)
			)
		})
	};
}