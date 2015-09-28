const Storage = () => {
  const fileName = 'grindySave'

  return {
    save: (data) => window.localStorage.setItem(fileName, window.btoa(JSON.stringify(data))),
    load: () => {
      const item = window.localStorage.getItem(fileName)
      if (item) {
        return JSON.parse(window.atob(item))
      } else {
        return item
      }
    }
  }
}

export default Storage()
