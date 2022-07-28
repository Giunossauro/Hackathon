import { Request, Response, NextFunction } from "express";
import { CourseService } from "../../../services/CourseService";

interface CourseRequest {
  id: number,
  professorId: number,
  nome: string,
  horasTotais: number
}

export class CourseController {
  #service: CourseService;

  constructor() {
    this.#service = new CourseService();
  }

  getCourses = async (_req: Request<CourseRequest>, res: Response, _next: NextFunction) => {
    const result = await this.#service.getCourses();
    
    return res.status(result.status).json({
      result: result.msg
    });
  };

  getCourseById = async (req: Request<CourseRequest>, res: Response, _next: NextFunction) => {
    const { id } = req.query;
    const courseId: number = Number(id);

    if (courseId) {
      const result = await this.#service.getCourseById(courseId);

      return res.status(result.status).json({
        result: result.msg
			});
    }
    return res.status(400).json({ result: "ERRO: Id do curso inválido." });
  };

  addCourse = async (req: Request<CourseRequest>, res: Response, _next: NextFunction) => {
    const { professorId, nome, horasTotais } = req.body;
    const professor: number = Number(professorId);
    const horas: number = Number(horasTotais);

    if (isNaN(professor) || professor < 1 || !nome || isNaN(horas) || horas < 0.1) {
      return res.status(400).json({
        result: "ERRO: Confira e preencha todos os campos."
      });
    }

    if (nome.length > 60) {
      return res.status(400).json({
        result: "ERRO: O nome não pode ter mais de 60 caracteres."
      });
    }

    const result = await this.#service.addCourse(
      professorId,
      nome,
      horasTotais
    );

    return res.status(result.status).json({
      status: result.status,
      result: result.msg
    });
  }

  updateCourse = async (req: Request<CourseRequest>, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const { professorId = 0, nome = "", horasTotais = 0 } = req.body;

    if (!id || !Number(id)) {
      return res.status(400).json({ result: "ERRO: ID inválido." });
    }

    // 05:25 - encerrando por hj
    /* if (nome.length > 60 || email.length > 60 || senha.length > 500) {
      return res.status(400).json({ result: "ERRO: Número máximo de caracteres excedido." });
    }

    if (email != "" && !emailPattern) {
      return res.status(400).json({ result: "ERRO: Email inválido." });
    } */

    const result = await this.#service.updateCourse(Number(id), Number(professorId), String(nome), Number(horasTotais));

    return res.status(result.status).json({
      result: result.msg
    })
  }

  removeCourse = async (req: Request<CourseRequest>, res: Response, _next: NextFunction) => {
    const { id } = req.params;

    if (!id || !Number(id)) {
      return res.status(400).json({ result: "ERRO: ID inválido." });
    }

    const result = await this.#service.removeCourse(Number(id));

    return res.status(result.status).json({
      result: result.msg
    })
  }
}
