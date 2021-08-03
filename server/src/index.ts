import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";

const main = async () =>{
	const orm = MikroORM.init({
		entities: [],
		dbName: 'tophat',
		type: 'postgresql',
		debug: !__prod__,
	});
}

main();
