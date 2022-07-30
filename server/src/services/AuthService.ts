import * as db from '../database/connection';
import bcrypt from 'bcrypt';

export class AuthService {
	signIn = async (tipoLogin: String, email: String, senha: String) => {
		let databaseName = ""
		switch (tipoLogin) {
			case "aluno":
				databaseName = "alunos"
				break;
			case "professor":
				databaseName = "professores";
				break;
			default:
				break;
		}
		const findEmail = await db.default(databaseName).where({ email: email });

		if (findEmail.length <= 0) {
			return { status: 404, msg: 'ERRO: Login incorreto.' };
		}

		const passMatch = await bcrypt.compare(senha.toString(), findEmail[0].senha);

		if (!passMatch) {
			return { status: 403, msg: 'ERRO: Login incorreto.' };
		}

		return { status: 200, msg: "Sucesso" }
	}
}