import { Request, Response, NextFunction } from "express";
import { CategoryService } from "../../../services/CategoryService";

interface CategoryRequest {
	id: Number,
	nome: String,
}

export class CategoryController {
	#service: CategoryService;

	constructor() {
		this.#service = new CategoryService();
	}

	getCategories = async (req: Request<CategoryRequest>, res: Response, next: NextFunction) => {
		return res.status(200).json({
			result: await this.#service.getCategories()
		});
	};

	getCategoryById = async (req: Request<CategoryRequest>, res: Response, next: NextFunction) => {
		const { id } = req.params;

		if (!id || !Number(id)) {
			return res.status(400).json({ result: "ERRO: ID inválido." });
		}

		const result = await this.#service.getCategoriesById(Number(id));

		return res.status(result.status).json({
			result: result.msg
		})
	}

	addCategories = async (req: Request<CategoryRequest>, res: Response, next: NextFunction) => {
		const { nome } = req.body;

		if (nome == "") {
			return res.status(400).json({ result: "ERRO: Confira e preencha todos os campos." });
		}

		if (nome.length > 60) {
			return res.status(400).json({ result: "ERRO: Número máximo de caracteres excedido." });
		}

		const result = await this.#service.addCategories(String(nome));


		return res.status(result.status).json({
			result: result.msg
		});
	};

	updateCategory = async (req: Request<CategoryRequest>, res: Response, next: NextFunction) => {
		const { id } = req.params;
		const { nome } = req.body;

		if (!id || !Number(id)) {
			return res.status(400).json({ result: "ERRO: ID inválido." });
		}

		if (nome == "") {
			return res.status(400).json({ result: "ERRO: Linguagem Inválida." });
		}

		if (nome.length > 60) {
			return res.status(400).json({ result: "ERRO: Número máximo de caracteres excedido." });
		}

		const result = await this.#service.updateCategories(Number(id), String(nome));

		return res.status(result.status).json({
			result: result.msg
		})
	}

	removeCategory = async (req: Request<CategoryRequest>, res: Response, next: NextFunction) => {
		const { id } = req.params;

		if (!id || !Number(id)) {
			return res.status(400).json({ result: "ERRO: ID inválido." });
		}

		const result = await this.#service.removeCategories(Number(id));

		return res.status(result.status).json({
			result: result.msg
		})
	}
}