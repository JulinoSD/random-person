import getUser from './utils/fetch-user.js'
import get from './utils/getElement.js'
import displayUser from './utils/display-user.js'

const btn = get('.btn')

const showUser = async () => {
  const person = await getUser()
  displayUser(person)
}
window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
console.log('Running Random()')
