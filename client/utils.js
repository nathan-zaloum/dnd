export const dataToArray = (data) => {
    return Object.keys(data)
}

export const formatLink = (text) => {
    const spaced = text.replace("-", " ")
    const words = spaced.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    return words
}
