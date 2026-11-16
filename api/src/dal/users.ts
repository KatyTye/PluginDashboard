import "server-only"

import prisma from "@/config/prisma";
import { UserCreateType, UserUpdateableType } from "../types";

export function createUser(data: UserCreateType) {
	return prisma.user.create({
		data: {
			"active": data.active,
			"activation_key": data.activation_key,
			"email": data.email,
			"password": data.password,
			"plan": data.plan,
			"name": data.name
		}
	});
}

export function getUsers() {
	return prisma.user.findMany({
		orderBy: { createdAt: "desc" },
	});
}

export function getUser(id: string) {
	return prisma.user.findUnique({
		where: { id }
	});
}

export function getUserByName(name: string) {
	return prisma.user.findFirst({
		where: { name }
	});
}

export function updateUser(id: string, data: UserUpdateableType) {
	return prisma.user.update({
		where: { id },
		data,
	});
}