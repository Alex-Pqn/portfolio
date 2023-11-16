function getHeaders() {
  return {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  }
}

export const requestOptions = {
  post(body: unknown) {
    return {
      method: 'POST',
      ...getHeaders(),
      body: JSON.stringify(body),
    }
  },
  postFormData(formData: unknown) {
    return {
      method: 'POST',
      body: formData,
    }
  },
}
