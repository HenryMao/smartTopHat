import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_USERS } from "./Users.data"


interface User {
	name: string
}

export default function Users() {
	const { loading, error, data } = useQuery(GET_USERS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;
	return (
		<div>
			Names are
			{data.users.map((user: User) => (
				<p>{user.name}</p>
			))}
		</div>
	);
}
