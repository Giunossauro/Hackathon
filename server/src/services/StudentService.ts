const db = require("./database");

export class StudentService {
	constructor() { }

	getStudent = async (alunoId: number) => {
		return await db('alunos').where({ id: Number(alunoId) });
	};

	getSubtract = (x: number, y: number) => {
		return x - y;
	}
}
