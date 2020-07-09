module.exports = async () => {
  if (global.__app__)
    global.__app__.close()
}
