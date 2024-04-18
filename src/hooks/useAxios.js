import Axios from "axios"
import { useEffect, useState } from "react"

export default function useAxios(url) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	async function fetchData(url) {
		try {
			const response = await Axios.get(url, {
				headers: {
					"Authorization": `Bearer ${process.env.NEXT_PUBLIC_READ_ACCESS_TOKEN}`
				}
			})
			setData(response.data)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(function() {
		fetchData(url)
	}, [])

	return { data, loading, error }
}
