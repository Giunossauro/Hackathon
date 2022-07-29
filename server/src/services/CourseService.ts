import db from '../database/connection'
import bcrypt from 'bcrypt';

export class CourseService {
  readonly #TABLE_COURSES: string;

  constructor() {
    this.#TABLE_COURSES = "cursos";
  }

  getCourses = async () => {
    try {
      const findCourse = await db(this.#TABLE_COURSES).select("*");
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
      const findCourse = await db(this.#TABLE_COURSES).where({ id: Number(courseId) });

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
        msg: "ERRO: Falha no servidor ao consultar o curso."
      }
    }
  };

  getCoursesByName = async (query: String) => {
    try {
      const findCourse = await db(this.#TABLE_COURSES)
        .whereRaw(`UPPER(nome) LIKE '${query.toUpperCase()}%'`);

      if (!findCourse.length) {
        return {
          status: 404,
          msg: "ERRO: Nenhum curso não encontrado."
        };
      }

      return { status: 200, msg: findCourse };

    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar os cursos."
      }
    }
  };

  addCourse = async (professorId: number, nome: string, linguagem: string, categoria: string, horasTotais: number) => {
    const findCourse = await db('cursos').select("*").where(
      { professorid: professorId, nome: nome }
    );

    if (findCourse.length > 0) {
      return {
        status: 409,
        msg: "ERRO: Falha ao cadastrar curso. Curso com esse nome e professor já existe."
      }
    }

    const findLanguage = await db('linguagens').select("*").where({ nome: linguagem })
    const findCategory = await db('categorias').select("*").where({ nome: categoria })

    if (!findLanguage.length || !findCategory.length) {
      return { status: 404, msg: "ERRO: Falha ao cadastrat Categoria ou Linguagem." }
    }

    console.log("LANG: ", findLanguage)
    console.log("ID LANG: ", findLanguage[0].id)
    console.log("CAT: ", findCategory)
    console.log("ID CAT: ", findCategory[0].id)

    const newCourse: object = {
      professorid: professorId,
      nome: nome,
      linguagem: linguagem,
      categoria: categoria,
      horastotais: horasTotais
    };

    const langID = parseInt(findLanguage[0].id)
    const catID = parseInt(findCategory[0].id)

    const cursoID = await db(this.#TABLE_COURSES).insert(newCourse).returning("id");
    await db("cursolinguagem").insert({ cursoid: cursoID[0].id, linguagemid: langID })
    await db("cursocategoria").insert({ cursoid: cursoID[0].id, categoriaid: catID })

    return {
      status: 201,
      msg: "Curso criado com sucesso!"
    }
  }

  updateCourse = async (id: number, professorId: number, nome: string, linguagem: string, categoria: string, horasTotais: number) => {
    let findCourse;
    try {
      findCourse = await db(this.#TABLE_COURSES).select("*").where({ id: id });

      if (!findCourse.length) {
        return { status: 404, msg: 'ERRO: ID não encontrado.' }
      }

      const findLanguage = await db('linguagens').select("*").where({ nome: linguagem })
      const findCategory = await db('categorias').select("*").where({ nome: categoria })

      if (!findLanguage.length || !findCategory.length) {
        return { status: 404, msg: "ERRO: Falha ao cadastrat Categoria ou Linguagem." }
      }

      const updateCourse = {
        professorid: professorId > 0 ? professorId : findCourse[0].professorId,
        nome: nome != "" ? nome : findCourse[0].nome,
        linguagem: linguagem != "" ? linguagem : findLanguage[0].nome,
        categoria: categoria != "" ? categoria : findCategory[0].nome,
        horasTotais: horasTotais > 0 ? horasTotais : findCourse[0].horasTotais,
      }

      await db(this.#TABLE_COURSES).where({ id: id }).update(updateCourse);

      await db("cursolinguagem").where({ cursoid: id }).update({ linguagemid: Number(findLanguage[0].id) })
      await db("cursocategoria").where({ cursoid: id }).update({ categoriaid: Number(findCategory[0].id) })


      return {
        status: 201,
        msg: "Curso alterado com sucesso!"
      }

    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Falha no servidor ao consultar se o curso ja existe."
      }
    }
  }

  removeCourse = async (id: number) => {
    let findCourse;
    try {
      findCourse = await db(this.#TABLE_COURSES).select("*").where({ id: id });

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
      await db(this.#TABLE_COURSES).where({ id: id }).del();
      await db("cursolinguagem").where({ cursoid: id }).del();
      await db("cursocategoria").where({ cursoid: id }).del();
      return { status: 204, msg: "Curso excluído com sucesso!" }
    } catch (_e) {
      return {
        status: 500,
        msg: "ERRO: Algo errado aconteceu na hora de inserir o curso."
      }
    }
  }
}
