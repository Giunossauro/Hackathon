import * as db from '../database/connection';
import bcrypt from 'bcrypt';

export class StudentService {
	constructor() { }

	getStudents = async () => {
		const allStudents = await db.default.select("*").from('alunos');
		return allStudents;
	};

	getStudentById = async (id: Number) => {
		const StudentById = await db.default.select("*").from('alunos').where({ id: id });

		return { status: 200, msg: StudentById };
	}

	addStudent = async (nome: String, email: String, senha: String, telefone: Number) => {
		const findStudent = await db.default.select("*").from('alunos').where({ email: email });

		if (findStudent.length > 0) {
			return { status: 400, msg: "ERRO: Falha ao cadastrar usuário. Verifique email e senha." }
		}

		const hashPass = await bcrypt.hash(senha.toString(), 10)

		const newUser = {
			nome: nome,
			email: email,
			senha: hashPass,
			telefone: telefone,
			excluido: false
		}

		await db.default("alunos").insert(newUser)

		return { status: 201, msg: newUser }
	}

	updateStudent = async (id: Number, nome: String, email: String, senha: String, telefone: Number) => {
		const findStudent = await db.default.select("*").from('alunos').where({ id: id });

		if (findStudent.length <= 0) {
			return { status: 404, msg: 'ERRO: ID não encontrado.' }
		}

		console.log(findStudent)

		let newHashPass = "";

		if (senha != "") {
			newHashPass = await bcrypt.hash(senha.toString(), 10);
		}

		const updatedUser = {
			nome: nome != "" ? nome : findStudent[0].nome,
			email: email != "" ? email : findStudent[0].email,
			senha: senha != "" ? newHashPass : findStudent[0].senha,
			telefone: telefone != 0 ? Number(telefone) : Number(findStudent[0].telefone),
		}

		await db.default("alunos").where({ id: id }).update(updatedUser);

		return { status: 204, msg: "Sucesso" }
	}

	removeStudent = async (id: Number) => {
		const findStudent = await db.default.select("*").from('alunos').where({ id: id });

		if (findStudent.length <= 0) {
			return { status: 404, msg: 'ERRO: ID não encontrado.' };
		}

		await db.default("alunos").where({ id: id }).update({ 'excluido': true });

		return { status: 204, msg: "Sucesso" }
	}
}
