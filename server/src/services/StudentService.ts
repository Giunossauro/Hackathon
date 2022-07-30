import * as db from '../database/connection';
import bcrypt from 'bcrypt';

export class StudentService {
  readonly #TABLE_STUDENTS: string;

	constructor() {
    this.#TABLE_STUDENTS = "alunos";
	}

	getStudents = async () => {
    try {
			const allStudents = await db.default.select("*").from(this.#TABLE_STUDENTS);
			return {
				status: 200,
				msg: allStudents
			};
    } catch (_e) {
      console.log(_e)
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar os alunos."
      }
    }
	};

	getStudentById = async (id: Number) => {
    try {
			const StudentById = await db.default.select("*").from(this.#TABLE_STUDENTS).where({ id: id });

			if (!StudentById.length) {
        return {
          status: 404,
          msg: "ERRO: Aluno não encontrado."
        };
      }

      return { status: 200, msg: StudentById };
			
		} catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar o aluno."
      }
    }
	};

  getStudentsByName = async (query: String) => {
    try {
      const findStudent = await db.default(this.#TABLE_STUDENTS)
        .whereRaw(`UPPER(nome) LIKE '%${query.toUpperCase()}%'`);

      if (!findStudent.length) {
        return {
          status: 404,
          msg: "ERRO: Nenhum aluno não encontrado."
        };
      }

      return { status: 200, msg: findStudent };

    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar os alunos."
      }
    }
  };

  getStudentByEmail = async (query: String) => {
    try {
      const findStudent = await db.default(this.#TABLE_STUDENTS)
        .whereRaw(`UPPER(email) = '${query.toUpperCase()}'`);

      if (!findStudent.length) {
        return {
          status: 404,
          msg: "ERRO: Nenhum aluno não encontrado."
        };
      }

      return { status: 200, msg: findStudent };

    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar os alunos."
      }
    }
  };

	addStudent = async (nome: String, email: String, senha: String, telefone: String) => {
		try {
			const findStudent = await db.default.select("*").from(this.#TABLE_STUDENTS).where({ email: email });

      if (findStudent.length) {
        return {
          status: 409,
          msg: "ERRO: Falha ao cadastrar aluno. Verifique email e senha."
        }
      }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar se o aluno ja existe."
      }
    }

		const hashPass = await bcrypt.hash(senha.toString(), 10)

		const newUser = {
			nome: nome,
			email: email,
			senha: hashPass,
			telefone: telefone,
			excluido: false
		}

    try {
			await db.default(this.#TABLE_STUDENTS).insert(newUser);
      return {
        status: 201,
        msg: "Aluno criado com sucesso!"
      }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Algo errado aconteceu na hora de inserir o aluno."
      }
    }
	}

	updateStudent = async (id: Number, nome: String, email: String, senha: String, telefone: String) => {
		let findStudent;
		try {
			findStudent = await db.default(this.#TABLE_STUDENTS).select("*").where({ id: id });

      if (!findStudent.length) {
        return { status: 404, msg: 'ERRO: ID não encontrado.' }
      }
		} catch (_e) {
			return {
				status: 500,
				msg: "ERRO: Falha no servidor ao consultar se o aluno ja existe."
			}
		}

		const findStudentEmail = (await this.getStudentByEmail(email)).msg;

		if (findStudent.length <= 0) {
			return { status: 404, msg: 'ERRO: ID não encontrado.' }
		}

		if (findStudentEmail.length) {
			return { status: 409, msg: 'ERRO: Email já existe.' }
		}

		let newHashPass = "";

		if (senha != "") {
			newHashPass = await bcrypt.hash(senha.toString(), 10);
		}

		const updatedUser = {
			nome: nome != "" ? nome : findStudent[0].nome,
			email: email != "" ? email : findStudent[0].email,
			senha: senha != "" ? newHashPass : findStudent[0].senha,
			telefone: telefone != "" ? telefone : findStudent[0].telefone,
		}

    try {
			await db.default(this.#TABLE_STUDENTS).where({ id: id }).update(updatedUser);
			return {
        status: 201,
        msg: "Aluno alterado com sucesso!"
      }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Algo errado aconteceu na hora de alterar o aluno."
      }
    }
	}

	removeStudent = async (id: Number) => {
    let findCourse;
    try {
			findCourse = await db.default.select("*").from(this.#TABLE_STUDENTS).where({ id: id });
			
			if (!findCourse.length) {
        return { status: 404, msg: 'ERRO: ID não encontrado.' }
      }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar se o curso ja existe."
      }
    }

    try {
      await db.default(this.#TABLE_STUDENTS).where({ id: id }).update({ 'excluido': true });
      return { status: 204, msg: "Aluno excluído com sucesso!" }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Algo errado aconteceu na hora de excluir o aluno."
      }
    }
	}
}
