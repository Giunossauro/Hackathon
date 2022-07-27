import { Request, Response, NextFunction } from "express";
import { StudentService } from "../../../services/StudentService";

interface StudentRequest {
	id: number,
	nome: string,
	cpf: string,
	email: string,
	senha: string,
	excluido: boolean
}

export class StudentController {
	#service: StudentService;

	constructor() {
		this.#service = new StudentService();
	}

	getStudents = async (_req: Request<StudentRequest>, res: Response, _next: NextFunction) => {
		return res.status(200).json({
			result: await this.#service.getStudents()
		});
	};

	getStudentById = async (req: Request<StudentRequest>, res: Response, _next: NextFunction) => {
		const { studentId } = req.query;
		const id: number = Number(studentId);

		if (!isNaN(id)){
			return res.status(200).json({
				result: await this.#service.getStudentById(id)
			});
		}
		return res.status(404).json({result: "Aluno não encontrado."});
	};

	addStudents = async (req: Request<StudentRequest>, res: Response, next: NextFunction) => {
		const { nome, cpf, email, senha, excluido = false } = req.body;

		//valida tipos dos campos

		return res.status(200).json({
			result: await this.#service.addStudent(
				nome,
				cpf,
				email,
				senha,
				excluido
			)
		});
	}
}