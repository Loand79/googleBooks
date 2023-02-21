export const trimBookTitile = (str) => {
    let trimLength = 15
    if(str.length > trimLength) {
        return str.slice(0, trimLength - 1) + '...'
    }
    return str
}