import { Request, Response, NextFunction } from "express";
import { StudentService } from "../../../services/StudentService";

interface StudentRequest {
	id: Number,
	nome: String,
	email: String,
	senha: String,
	telefone: String,
	excluido: Boolean
}

export class StudentController {
	#service: StudentService;

	constructor() {
		this.#service = new StudentService();
	}

	getStudents = async (req: Request<StudentRequest>, res: Response, next: NextFunction) => {
		const result = await this.#service.getStudents()

		return res.status(result.status).json({
			result: result.msg
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
	};

	getStudentsByName = async (req: Request, res: Response, _next: NextFunction) => {
		const { query } = req.params;

		if (query) {
			const result = await this.#service.getStudentsByName(query);

			return res.status(result.status).json({
				result: result.msg
			});
		}
		return res.status(400).json({ result: "ERRO: Nome do aluno não informado." });
	};

	getStudentByEmail = async (req: Request, res: Response, _next: NextFunction) => {
		const { query } = req.params;

		if (query) {
			const emailPattern = query.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);

			if (!emailPattern) {
				return res.status(400).json({ result: "ERRO: Padrão de email inválido." });
			}

			const result = await this.#service.getStudentByEmail(query);

			return res.status(result.status).json({
				result: result.msg
			});
		}
		return res.status(400).json({ result: "ERRO: Nome do aluno não informado." });
	};

	addStudents = async (req: Request<StudentRequest>, res: Response, next: NextFunction) => {
		const { nome, email, senha, telefone } = req.body;

		if (nome == "" || email == "" || senha == "" || telefone == "") {
			return res.status(400).json({ result: "ERRO: Confira e preencha todos os campos." });
		}

		if (nome.length > 60 || email.length > 60 || senha.length > 500) {
			return res.status(400).json({ result: "ERRO: Número máximo de caracteres excedido." });
		}

		const emailPattern = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);

		if (!emailPattern) {
			return res.status(400).json({ result: "ERRO: Padrão de email inválido." });
		}

		const result = await this.#service.addStudent(String(nome), String(email), String(senha), String(telefone));


		return res.status(result.status).json({
			result: result.msg
		});
	};

	updateStudent = async (req: Request<StudentRequest>, res: Response, next: NextFunction) => {
		const { id } = req.params;
		const { nome = "", email = "", senha = "", telefone = "" } = req.body;

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

		const result = await this.#service.updateStudent(Number(id), String(nome), String(email), String(senha), String(telefone));

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