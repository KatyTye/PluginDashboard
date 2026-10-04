"use client"

export const getStoredBoolean = (key: string, fallback = false) => {
	if (typeof window === "undefined") return fallback

	const value = window.localStorage.getItem(key)
	return value === null ? fallback : value === "true"
}