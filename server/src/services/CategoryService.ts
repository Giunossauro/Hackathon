import * as db from '../database/connection';

export class CategoryService {
	constructor() { }

	getCategories = async () => {
		const allCategories = await db.default.select("*").from('categorias');
		return allCategories;
	}

	getCategoriesById = async (id: Number) => {
		const categoryById = await db.default.select("*").from('categorias').where({ id: id });
		return { status: 200, msg: categoryById };
	}

	addCategories = async (nome: String) => {
		const findCategory = await db.default.select("*").from('categorias').where({ nome: nome });

		if (findCategory.length > 0) {
			return { status: 400, msg: "ERRO: Falha ao cadastrar categoria." }
		}

		await db.default("categorias").insert({ nome: nome })

		return { status: 201, msg: `Categoria ${nome} cadastrada com sucesso.` }
	}

	updateCategories = async (id: Number, nome: String) => {
		const findCategory = await db.default.select("*").from('categorias').where({ id: id });

		if (findCategory.length <= 0) {
			return { status: 400, msg: "ERRO: Falha ao atualizar categoria." }
		}

		const findCategoryNome = await db.default.select("*").from('categorias').where({ nome: nome });

		if (findCategoryNome.length > 0) {
			return { status: 404, msg: 'ERRO: Categoria já existe.' }
		}

		await db.default("categorias").where({ id: id }).update({ nome: nome });
		return { status: 204, msg: `Categoria de ID ${id} alterada com sucesso.` }
	}

	removeCategories = async (id: Number) => {
		const findCategory = await db.default.select("*").from('linguagens').where({ id: id });

		if (findCategory.length <= 0) {
			return { status: 400, msg: "ERRO: Falha ao deletar categoria." }
		}

		await db.default("categorias").where({ id: id }).del();
		return { status: 204, msg: "Sucesso" }
	}
}