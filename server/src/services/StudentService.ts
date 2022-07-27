import * as db from '../database/connection'

export class StudentService {
	constructor() { }

	getStudent = async (alunoId: number) => {
		return await db.default('alunos').where({ id: Number(alunoId) });
	};

	getSubtract = (x: number, y: number) => {
		return x - y;
	}
}
