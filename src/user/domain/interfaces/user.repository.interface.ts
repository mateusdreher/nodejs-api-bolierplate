import { User } from "../user";
import { StatsDTO } from "../user.dto";

export interface IUserRepository {
	login(email: string, password: string): Promise<User | null>;
	getByEmail(email: string):Promise<User | null>

}