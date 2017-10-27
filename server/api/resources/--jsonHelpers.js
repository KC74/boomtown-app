import fetch from 'node-fetch'

// CONSTANTS
const jsonServer = 'http://localhost:3001'

export async function getUsers(uri = '') {
    const data = await fetch(`${jsonServer}/users/${uri}`)
    const normalized = await data.json()

    return normalized;
}


export async function getItems(uri = '') {
    const data = await fetch(`${jsonServer}/items/${uri}`)
    const normalized = await data.json()

    return normalized;
}

export async function getOwnedItems(uri = '') {
    const data = await fetch(`${jsonServer}/items/?itemowner=${uri}`)
    const normalized = await data.json()

    return normalized;
}

export async function getBorrowedItems(uri = '') {
    const data = await fetch(`${jsonServer}/items/?borrower=${uri}`)
    const normalized = await data.json()

    return normalized;
}

export async function createNewItem(title, description, imageurl, tags, itemowner) {
    const tzOffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
    const localTime = `${(new Date(Date.now() - tzOffset)).toISOString().slice(0, -1).replace('T', ' ')}-07`;
    
    const addItem = {
      title,
      description,
      imageurl,
      tags,
      itemowner,
      createdon: localTime,
      available: true,
      borrower: null
    }

    try {
      const res = await fetch('http://localhost:3001/items', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(addItem)
      })

      const item = await res.json()

      return item

    } catch(e) {
      console.log(e)
    }
}