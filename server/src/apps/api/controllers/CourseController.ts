import { Request, Response, NextFunction } from "express";
import { CourseService } from "../../../services/CourseService";

interface CourseRequest {
	id: number,
	nome: string,
	cpf: string,
	email: string,
	senha: string,
	excluido: boolean
}

export class CourseController {
	#service: CourseService;

	constructor() {
		this.#service = new CourseService();
	}

	getCourses = async (_req: Request<CourseRequest>, res: Response, _next: NextFunction) => {
		return res.status(200).json({
			result: await this.#service.getCourses()
		});
	};

	getCourseById = async (req: Request<CourseRequest>, res: Response, _next: NextFunction) => {
		const { CourseId } = req.query;
		const id: number = Number(CourseId);

		if (!isNaN(id)){
			return res.status(200).json({
				result: await this.#service.getCourseById(id)
			});
		}
		return res.status(404).json({result: "Curso não encontrado."});
	};

	addCourses = async (req: Request<CourseRequest>, res: Response, _next: NextFunction) => {
		const { nome, cpf, email, senha, excluido = false } = req.body;

		//valida tipos dos campos

		return res.status(200).json({
			result: await this.#service.addCourse(
				nome,
				cpf,
				email,
				senha,
				excluido
			)
		});
	}
}