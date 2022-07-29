import * as db from '../database/connection';
import bcrypt from 'bcrypt';

export class TeacherService {
  readonly #TABLE_TEACHERS: string;

	constructor() {
    this.#TABLE_TEACHERS = "professores";
	}

	getTeachers = async () => {
    try {
			const allTeachers = await db.default.select("*").from(this.#TABLE_TEACHERS).where({ excluido: false });
			return {
				status: 200,
				msg: allTeachers
			};
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar os alunos."
      }
    }
	};

	getTeacherById = async (id: Number) => {
    try {
			const teacherById = await db.default.select("*").from(this.#TABLE_TEACHERS).where({ id: id, excluido: false });
			
			if (!teacherById.length) {
        return {
          status: 404,
          msg: "ERRO: Professor não encontrado."
        };
      }

      return { status: 200, msg: teacherById };
			
		} catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar o professor."
      }
    }
	}

  getTeachersByName = async (query: String) => {
    try {
      const findTeacher = await db.default(this.#TABLE_TEACHERS)
        .whereRaw(`UPPER(nome) LIKE '${query.toUpperCase()}%'`);

      if (!findTeacher.length) {
        return {
          status: 404,
          msg: "ERRO: Nenhum professor não encontrado."
        };
      }

      return { status: 200, msg: findTeacher };

    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar a tabela professores."
      }
    }
  };

  getTeacherByEmail = async (query: String) => {
    try {
      const findTeacher = await db.default(this.#TABLE_TEACHERS)
        .whereRaw(`UPPER(email) = '${query.toUpperCase()}'`);

      if (!findTeacher.length) {
        return {
          status: 404,
          msg: "ERRO: Nenhum professor não encontrado."
        };
      }

      return { status: 200, msg: findTeacher };

    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar os professores."
      }
    }
  };

	addTeacher = async (nome: String, email: String, senha: String, telefone: String) => {
		try {
			const findTeacher = await db.default.select("*").from(this.#TABLE_TEACHERS).where({ email: email });

      if (findTeacher.length) {
        return {
          status: 409,
          msg: "ERRO: Falha ao cadastrar professor. Verifique email e senha."
        }
      }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar se o professor ja existe."
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
			await db.default(this.#TABLE_TEACHERS).insert(newUser);
      return {
        status: 201,
        msg: "Professor criado com sucesso!"
      }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Algo errado aconteceu na hora de inserir o professor."
      }
    }
	}

	updateTeacher = async (id: Number, nome: String, email: String, senha: String, telefone: String) => {
		let findTeacher;
		try {
			findTeacher = await db.default(this.#TABLE_TEACHERS).select("*").where({ id: id });

      if (!findTeacher.length) {
        return { status: 404, msg: 'ERRO: ID não encontrado.' }
      }
		} catch (_e) {
			return {
				status: 500,
				msg: "ERRO: Falha no servidor ao consultar se o professor ja existe."
			}
		}
		let findTeacherEmail;
		try {
			findTeacherEmail = (await this.getTeacherByEmail(email)).msg;
		} catch (_e) {
			return {
				status: 500,
				msg: "ERRO: Falha no servidor ao consultar se o email ja existe."
			}
		}
		if (findTeacher.length <= 0) {
			return { status: 404, msg: 'ERRO: ID não encontrado.' }
		}

		if (findTeacherEmail.length) {
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

    try {
			await db.default(this.#TABLE_TEACHERS).where({ id: id }).update(updatedUser);
			return {
        status: 201,
        msg: "Professor alterado com sucesso!"
      }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Algo errado aconteceu na hora de alterar o professor."
      }
    }
	}

	removeTeacher = async (id: Number) => {
		let findTeacher;
		try {
			findTeacher = await db.default.select("*").from(this.#TABLE_TEACHERS).where({ id: id, excluido: false });
		
			if (!findTeacher.length) {
        return { status: 404, msg: 'ERRO: ID não encontrado.' }
      }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar se o professor ja existe."
      }
    }

    try {
			await db.default(this.#TABLE_TEACHERS).where({ id: id }).update({ 'excluido': true });
			return { status: 204, msg: "Sucesso" }
		} catch (_e) {
			return {
				status: 500,
				msg: "ERRO: Algo errado aconteceu na hora de excluir o professor."
			}
		}
	}
}
