import * as db from '../database/connection'

export class TeacherService {
	constructor() { }

	getTeachers = async () => {
		const allTeachers = await db.default.select("*").from('professores');
		return allTeachers;
	};

	getTeacherById = async (id: Number) => {
		const teacherById = await db.default.select("*").from('professores').where({ id: id });
		return teacherById;
	}

	addTeacher = async (nome: String, cpf: String, email: String, senha: String, excluido: Boolean) => {

		const newUser = {
			nome: nome,
			cpf: cpf,
			email: email,
			senha: senha,
			excluido: excluido
		}

		await db.default("professores").insert(newUser)

		return newUser;
	}
}
