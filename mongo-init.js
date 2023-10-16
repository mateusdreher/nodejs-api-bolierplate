db.createUser({
	user: 'mateusdreher',
	pwd: 'Passw0rd',
	roles: [
	  {
		role: 'readWrite',
		db: 'user',
	  },
	],
  });