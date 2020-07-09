module.exports = async () => {
  console.log(global.__app__);
  if (global.__app__)
    global.__app__.close()
}
