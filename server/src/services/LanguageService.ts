import * as db from '../database/connection';

export class LanguageService {
	constructor() { }

	getLanguages = async () => {
		const allLanguages = await db.default.select("*").from('linguagens');
		return allLanguages;
	}

	getLanguagesById = async (id: Number) => {
		const languageById = await db.default.select("*").from('linguagens').where({ id: id });
		return { status: 200, msg: languageById };
	}

	addLanguages = async (nome: String) => {
		const findLanguage = await db.default.select("*").from('linguagens').where({ nome: nome });

		if (findLanguage.length > 0) {
			return { status: 400, msg: "ERRO: Falha ao cadastrar linguagem." }
		}

		await db.default("linguagens").insert({ nome: nome })

		return { status: 201, msg: `Linguagem ${nome} cadastrada com sucesso.` }
	}

	updateLanguages = async (id: Number, nome: String) => {
		const findLanguage = await db.default.select("*").from('linguagens').where({ id: id });

		if (findLanguage.length <= 0) {
			return { status: 400, msg: "ERRO: Falha ao atualizar linguagem." }
		}

		const findLanguageNome = await db.default.select("*").from('linguagens').where({ nome: nome });

		if (findLanguageNome.length > 0) {
			return { status: 404, msg: 'ERRO: Linguagem já existe.' }
		}

		await db.default("linguagens").where({ id: id }).update({ nome: nome });
		return { status: 204, msg: `Linguagem de ID ${id} alterada com sucesso.` }
	}

	removeLanguages = async (id: Number) => {
		const findLanguage = await db.default.select("*").from('linguagens').where({ id: id });

		if (findLanguage.length <= 0) {
			return { status: 400, msg: "ERRO: Falha ao deletar linguagem." }
		}

		await db.default("linguagens").where({ id: id }).del();
		return { status: 204, msg: "Sucesso" }
	}
}