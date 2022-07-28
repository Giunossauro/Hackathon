import db from '../database/connection'
import bcrypt from 'bcrypt';

export class CourseService {
  readonly #CURSOS: string;
  constructor() {
    this.#CURSOS = "cursos";
  }

  getCourses = async () => {
    try {
      const findCourse = await db(this.#CURSOS).select("*");
      return {
        status: 200,
        msg: findCourse
      };
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar os cursos."
      }
    }
  };

  getCourseById = async (courseId: number) => {
    try {
      const findCourse = await db(this.#CURSOS).where({ id: Number(courseId) });

      if (!findCourse.length) {
        return {
          status: 404,
          msg: "ERRO: Curso não encontrado."
        };
      }

      return { status: 200, msg: findCourse };

    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar se o curso ja existe."
      }
    }
  };

  addCourse = async (professorId: number, nome: string, horasTotais: number) => {

    try {
      const findCourse = await db('cursos').select("*").where(
        { professorid: professorId, nome: nome }
      );

      if (findCourse.length) {
        return {
          status: 409,
          msg: "ERRO: Falha ao cadastrar curso. Curso com esse nome e professor já existe."
        }
      }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar se o curso ja existe."
      }
    }

    const newCourse: object = {
      professorid: professorId,
      nome: nome,
      horastotais: horasTotais
    };

    try {
      await db(this.#CURSOS).insert(newCourse);
      return {
        status: 201,
        msg: "Curso criado com sucesso!"
      }
    } catch (_e) {
      return {
        status: 500,
        msg: "Algo errado aconteceu na hora de inserir o professor."
      }
    }
  }

  updateCourse = async (id: number, professorId: number, nome: string, horasTotais: number) => {
    let findCourse;
    try {
      findCourse = await db(this.#CURSOS).select("*").where({ id: id });

      if (!findCourse.length) {
        return { status: 404, msg: 'ERRO: ID não encontrado.' }
      }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar se o curso ja existe."
      }
    }

    const updateCourse = {
      professorId: professorId > 0 ? professorId : findCourse[0].professorId,
      nome: nome != "" ? nome : findCourse[0].nome,
      horasTotais: horasTotais > 0 ? horasTotais : findCourse[0].horasTotais,
    }

    try {
      await db(this.#CURSOS).where({ id: id }).update(updateCourse);
      return {
        status: 201,
        msg: "Curso criado com sucesso!"
      } 
    } catch (_e) {
      return {
        status: 500,
        msg: "Algo errado aconteceu na hora de inserir o professor."
      }
    }
  }

  removeCourse = async (id: number) => {
    let findCourse;
    try {
      findCourse = await db(this.#CURSOS).select("*").where({ id: id });

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
      await db(this.#CURSOS).where({ id: id }).update({ 'excluido': true });
      return { status: 204, msg: "Curso excluído com sucesso!" }
    } catch (_e) {
      return {
        status: 500,
        msg: "Algo errado aconteceu na hora de inserir o professor."
      }
    }
  }
}
