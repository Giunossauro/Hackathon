import { Request, Response, NextFunction } from "express";
import { StudentService } from "../../../services/StudentService";

interface StudentRequest {
	id: Number,
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

	getStudents = async (req: Request<StudentRequest>, res: Response, next: NextFunction) => {
		return res.status(200).json({
			result: await this.#service.getStudents()
		});
	};

	getStudentById = async (req: Request<StudentRequest>, res: Response, next: NextFunction) => {
		const { id } = req.params;

		if (!id || !Number(id)) {
			return res.status(400).json({ result: "ERRO: ID inválido." });
		}

		const result = await this.#service.getStudentById(Number(id));

		return res.status(result.status).json({
			result: result.msg
		})
	}

	addStudents = async (req: Request<StudentRequest>, res: Response, next: NextFunction) => {
		const { nome, email, senha, telefone } = req.body;

		if (nome == "" || email == "" || senha == "" || telefone == null || telefone == "" || telefone == 0 || !Number(telefone)) {
			return res.status(400).json({ result: "ERRO: Confira e preencha todos os campos." });
		}

		if (nome.length > 60 || email.length > 60 || senha.length > 500) {
			return res.status(400).json({ result: "ERRO: Número máximo de caracteres excedido." });
		}

		const emailPattern = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);

		if (!emailPattern) {
			return res.status(400).json({ result: "ERRO: Padrão de email inválido." });
		}

		const result = await this.#service.addStudent(String(nome), String(email), String(senha), Number(telefone));


		return res.status(result.status).json({
			result: result.msg
		});
	};

	updateStudent = async (req: Request<StudentRequest>, res: Response, next: NextFunction) => {
		const { id } = req.params;
		const { nome = "", email = "", senha = "", telefone = 0 } = req.body;

		if (!id || !Number(id)) {
			return res.status(400).json({ result: "ERRO: ID inválido." });
		}

		if (nome.length > 60 || email.length > 60 || senha.length > 500) {
			return res.status(400).json({ result: "ERRO: Número máximo de caracteres excedido." });
		}

		const emailPattern = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);

		if (email != "" && !emailPattern) {
			return res.status(400).json({ result: "ERRO: Email inválido." });
		}

		if (telefone != 0 && !Number(telefone)) {
			return res.status(400).json({ result: "ERRO: Telefone inválido." });
		}

		const result = await this.#service.updateStudent(Number(id), String(nome), String(email), String(senha), Number(telefone));

		return res.status(result.status).json({
			result: result.msg
		})
	}

	removeStudent = async (req: Request<StudentRequest>, res: Response, next: NextFunction) => {
		const { id } = req.params;

		if (!id || !Number(id)) {
			return res.status(400).json({ result: "ERRO: ID inválido." });
		}

		const result = await this.#service.removeStudent(Number(id));

		return res.status(result.status).json({
			result: result.msg
		})
	}
}