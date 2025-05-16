import options from './common'

export const fetchAPI = async (url) => {
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('API 요청 실패: ' + response.statusText)
  }
  return response.json()
}
