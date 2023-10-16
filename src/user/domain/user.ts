import { Role } from "./interfaces";

export class User {
	_id?: string;
	username: string;
	password: string;
	email: string;
	role: Role;


	constructor(user: User) {
		this._id = user._id;
		this.username = user.username;
		this.password = user.password;
		this.email = user.email;
		this.role = user.role;
	}
}