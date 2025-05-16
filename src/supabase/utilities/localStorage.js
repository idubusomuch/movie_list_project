// 로컬 스토리지 사용 함수
export const localStorageUtils = () => {
  const setItemToLocalStorage = (itemKey, item) => {
    const strItem = JSON.stringify(item)
    localStorage.setItem(itemKey, strItem)
  }
  const removeItemFromLocalStorage = (itemKey) => {
    localStorage.removeItem(itemKey)
  }
  const getItemFromLocalStorage = (itemKey) => {
    try {
      const strItem = localStorage.getItem(itemKey)
      return JSON.parse(strItem)
    } catch (error) {
      console.error('getItemFromLocalStorage', error)
      return null
    }
  }
  return {
    setItemToLocalStorage,
    removeItemFromLocalStorage,
    getItemFromLocalStorage,
  }
}
