import { Request, Response, NextFunction } from "express";
import { StudentService } from "../../../services/StudentService";

interface StudentRequest {
	nome: String,
	cpf: String,
	email: String,
	senha: String,
	excluido: Boolean
}

export class StudentController {
	#service: StudentService;

	constructor() {
		this.#service = new StudentService();
	}

	getStudents = (req: Request<StudentRequest>, res: Response, next: NextFunction) => {
		const { studentId } = req.query;
		const id: number = Number(studentId);
		const student = this.#service.getStudent(id);

		return res.status(200).json({
			result: student
		});
	};

	addStudents = () => { };
}