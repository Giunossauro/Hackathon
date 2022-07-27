export class TeacherService {
	constructor() { }

	getTeachers = () => {
		return true;
	};

	getTeacherById = (id: Number) => {
		return id;
	}

	addTeacher = (nome: String, cpf: String, email: String, senha: String, excluido: Boolean) => {
		return { nome, cpf, email, senha, excluido };
	}
}
