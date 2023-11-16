export function handleResponse(response: Response) {
  return response.json().then((data: { message?: string; error?: string }) => {
    if (!response.ok || data.error) {
      return new Error(data.error)
    }

    return data
  })
}
