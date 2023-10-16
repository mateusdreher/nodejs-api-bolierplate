import { UserModel } from "./user.model";
import { StatsDTO, IUserRepository } from "./domain/interfaces";
import { User } from "./domain/user";
import { CustomError } from "../utils/error";

export class UserRepository implements IUserRepository {
	private model;

	constructor() {
		this.model = UserModel;
	}

	async login(email: string, password: string): Promise<User | null> {
		return await this.model.findOne({email, password})	
	}

	async getByEmail(email: string): Promise<User | null> {
		const user = await this.model.findOne({email});
		return user as unknown as User;
	}
	
}