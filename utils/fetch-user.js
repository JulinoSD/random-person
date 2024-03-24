const url = 'https://randomuser.me/api/'

const getUser = async () => {
  const response = await fetch(url)
  const data = await response.json()
  //destructure
  const person = data.results[0]
  const { email, gender, nat, phone } = person
  const { large: img } = person.picture
  const { age } = person.dob
  const { password } = person.login
  const {
    street: { number, name },
  } = person.location
  const {
    name: { first, last },
  } = person

  return {
    img,
    email,
    gender,
    nat,
    phone,
    age,
    password,
    street: `${number}, ${name}`,
    name: `${first} ${last}`,
  }
}
export default getUser
