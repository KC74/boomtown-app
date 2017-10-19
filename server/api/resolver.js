import fetch from 'node-fetch';
// import { data } from './db'

async function getUsers() {
  const data = await fetch('http://localhost:3001/users')
  const normalized = await data.json()

  return normalized;
}

async function getItems() {
  const data = await fetch('http://localhost:3001/items')
  const normalized = await data.json()

  return normalized;
}



const resolveFunctions = {
  // Resolvers go here...
  Query: {
    users() {
      try {

        return getUsers()

      } catch (e) {

        return e
      }
    },
    async user(root, { id }) {
      try {
        const data = await fetch(`http://localhost:3001/users/${id}`)
        const normalized = data.json()

        return normalized

      } catch(e) {
        console.log(e)
      }
    },
    items() {
      return getItems()
    },
    item(root, { id }) {
      return fetch(`http://localhost:3001/${item.itemowner}`)
      .then( res => res.json() )
      .catch( err => console.log(err) )
    }
  },

  Items: {
    itemowner(item) {
      return fetch(`http://localhost:3001/users/${item.itemowner}`)
      .then( res => res.json() )
      .catch( err => console.log(err) )
    },
    borrower(item) {
      if( !item.borrower ) return null
      return fetch(`http://localhost:3001/users/${item.borrower}`)
      .then(res => res.json() )
      .catch( err => console.log(err) )
    }
  },
  User: {
    async owneditems(user) {
      const res = await fetch(`http://localhost:3001/items/?itemowner=${user.id}`)
      const items = await res.json()

      return items
    },
    async borroweditems(user) {
      const res = await fetch(`http://localhost:3001/items/?borrower=${user.id}`)
      const items = await res.json()

      return items
    }
  }
};
export default resolveFunctions;