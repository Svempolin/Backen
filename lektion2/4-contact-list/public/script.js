const output = document.querySelector('#output')
const contacts = []

const getContacts = () => {
  fetch('/api/contacts')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.forEach(contact => contacts.push(contact))
      listContacts()
    })
}
getContacts()



const listContacts = () => {
    // om de4t låg något på min hemsida så tar man bort det 
  output.innerHTML = ''
  contacts.forEach(contact => {
    output.innerHTML += `
      <div class="contact">
        <h3>${contact.firstName} ${contact.lastName}</h3>
        <p>${contact.phoneNumber}</p>
      </div>
    `
  })
}


const addContact = async (contact) => {
  const res = await fetch('/api/add', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(contact)
  })

  const data = await res.json()
  contacts.push(data)
}


document.querySelector('#addForm').addEventListener('submit', async e => {
  e.preventDefault()

  const contact = {
    firstName: document.querySelector('#fName').value,
    lastName: document.querySelector('#lName').value,
    phoneNumber: document.querySelector('#phone').value,
  }

  await addContact(contact)

  listContacts()
})