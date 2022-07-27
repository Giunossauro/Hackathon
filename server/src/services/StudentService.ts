import * as db from '../database/connection'

export class StudentService {
	constructor() { }

	getStudents = () => {
		return db.default.select("*").from('alunos');
	};

	getStudentById = (studentId: number) => {
		return db.default('alunos').where({ id: Number(studentId) });
	};

	addStudent = async (nome: string, cpf: string, email: string, senha: string, excluido: boolean) => {
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
