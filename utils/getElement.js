const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error('the selection is not correct')
}
export default getElement
