import * as db from '../database/connection';
import bcrypt from 'bcrypt';

export class TeacherService {
	constructor() { }

	getTeachers = async () => {
		const allTeachers = await db.default.select("*").from('professores').where({ excluido: false });
		return allTeachers;
	};

	getTeacherById = async (id: Number) => {
		const teacherById = await db.default.select("*").from('professores').where({ id: id, excluido: false });
		return { status: 200, msg: teacherById };
	}

	addTeacher = async (nome: String, email: String, senha: String, telefone: String) => {
		const findTeacher = await db.default.select("*").from('professores').where({ email: email });

		if (findTeacher.length > 0) {
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

		await db.default("professores").insert(newUser)

		return { status: 201, msg: newUser }
	}

	updateTeacher = async (id: Number, nome: String, email: String, senha: String, telefone: String) => {
		const findTeacher = await db.default.select("*").from('professores').where({ id: id, excluido: false });

		const findTeacherEmail = await db.default.select("*").from('professores').where({ email: email });

		if (findTeacher.length <= 0) {
			return { status: 404, msg: 'ERRO: ID não encontrado.' }
		}

		if (findTeacherEmail.length > 0) {
			return { status: 404, msg: 'ERRO: Email já existe.' }
		}

		let newHashPass = "";

		if (senha != "") {
			newHashPass = await bcrypt.hash(senha.toString(), 10);
		}

		const updatedUser = {
			nome: nome != "" ? nome : findTeacher[0].nome,
			email: email != "" ? email : findTeacher[0].email,
			senha: senha != "" ? newHashPass : findTeacher[0].senha,
			telefone: telefone != "" ? telefone : findTeacher[0].telefone,
		}

		await db.default("professores").where({ id: id }).update(updatedUser);

		return { status: 204, msg: "Sucesso" }
	}

	removeTeacher = async (id: Number) => {
		const findTeacher = await db.default.select("*").from('professores').where({ id: id, excluido: false });

		if (findTeacher.length <= 0) {
			return { status: 404, msg: 'ERRO: ID não encontrado.' };
		}

		await db.default("professores").where({ id: id }).update({ 'excluido': true });

		return { status: 204, msg: "Sucesso" }
	}
}
