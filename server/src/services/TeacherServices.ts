import * as db from '../database/connection'

export class TeacherService {
	constructor() { }

	getTeachers = async () => {
		const allTeachers = await db.default.select("*").from('professores');
		return allTeachers;
	};

	getTeacherById = async (id: Number) => {
		const teacherById = await db.default.select("*").from('professores').where({ id: id });

		return { status: 200, msg: teacherById };
	}

	addTeacher = async (nome: String, cpf: String, email: String, senha: String, excluido: Boolean) => {
		const findTeacher = await db.default.select("*").from('professores').where({ email: email });

		if (findTeacher.length > 0) {
			return { status: 400, msg: "ERRO: Falha ao cadastrar usuário. Verifique email e senha." }
		}

		const newUser = {
			nome: nome,
			cpf: cpf,
			email: email,
			senha: senha,
			excluido: excluido
		}

		await db.default("professores").insert(newUser)

		return { status: 201, msg: newUser }
	}

	updateTeacher = async (id: Number) => { }

	removeTeacher = async (id: Number) => { }
}
