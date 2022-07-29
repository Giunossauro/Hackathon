import { Request, Response, NextFunction } from "express";
import { LanguageService } from "../../../services/LanguageService";

interface LanguageRequest {
	id: Number,
	nome: String,
}

export class LanguageController {
	#service: LanguageService;

	constructor() {
		this.#service = new LanguageService();
	}

	getLanguages = async (req: Request<LanguageRequest>, res: Response, next: NextFunction) => {
		return res.status(200).json({
			result: await this.#service.getLanguages()
		});
	};

	getLanguageById = async (req: Request<LanguageRequest>, res: Response, next: NextFunction) => {
		const { id } = req.params;

		if (!id || !Number(id)) {
			return res.status(400).json({ result: "ERRO: ID inválido." });
		}

		const result = await this.#service.getLanguagesById(Number(id));

		return res.status(result.status).json({
			result: result.msg
		})
	}

	addLanguages = async (req: Request<LanguageRequest>, res: Response, next: NextFunction) => {
		const { nome } = req.body;

		if (nome == "") {
			return res.status(400).json({ result: "ERRO: Confira e preencha todos os campos." });
		}

		if (nome.length > 60) {
			return res.status(400).json({ result: "ERRO: Número máximo de caracteres excedido." });
		}

		const result = await this.#service.addLanguages(String(nome));


		return res.status(result.status).json({
			result: result.msg
		});
	};

	updateLanguage = async (req: Request<LanguageRequest>, res: Response, next: NextFunction) => {
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

		const result = await this.#service.updateLanguages(Number(id), String(nome));

		return res.status(result.status).json({
			result: result.msg
		})
	}

	removeLanguage = async (req: Request<LanguageRequest>, res: Response, next: NextFunction) => {
		const { id } = req.params;

		if (!id || !Number(id)) {
			return res.status(400).json({ result: "ERRO: ID inválido." });
		}

		const result = await this.#service.removeLanguages(Number(id));

		return res.status(result.status).json({
			result: result.msg
		})
	}
}