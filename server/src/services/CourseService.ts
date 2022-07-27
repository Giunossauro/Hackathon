import * as db from '../database/connection'

export class CourseService {
	constructor() { }

	getCourses = () => {
		return db.default.select("*").from('alunos');
	};

	getCourseById = (courseId: number) => {
		return db.default('alunos').where({ id: Number(courseId) });
	};

	addCourse = async (nome: string, cpf: string, email: string, senha: string, excluido: boolean) => {
		const newUser = {
			nome: nome,
			cpf: cpf,
			email: email,
			senha: senha,
			excluido: excluido
		};

		await db.default("professores").insert(newUser);

		return newUser;
	}
}
