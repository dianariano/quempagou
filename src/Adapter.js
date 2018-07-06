export default res => Object.keys(res).map(key => ({
    ...res[key]
}))
