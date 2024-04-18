"use server"
import { cookies } from "next/headers"

export default async function createTokenCookie(token) {
	cookies().set("TMDB_SID", token)
}
	