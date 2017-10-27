
// import { data } from './db'
import { 
  getItems, 
  getUsers, 
  getOwnedItems, 
  getBorrowedItems,
  createNewItem 
} from './resources/postgresHelpers'
import { database } from '../index.js'

// import fetch from 'node-fetch'

const resolveFunctions = {
  // Resolvers go here...
  Query: {
    users() {
      try {
        return getUsers()
      } catch (e) {
        return console.log(e)
      }
    },
    user(root, { id }, context) {
      try {
        return context.loaders.SingleUser.load(id)
      } catch (e) {
        return console.log(e)
      }
    },
    items() {
      try {
        // return getItems()
        return database.getItems();
      } catch (e) {
        return console.log(e)
      }
    },
    item(root, { id }, context) {
      try {
        // return getItems(id)
        return context.loaders.SingleItem.load(id)
      } catch (e) {
        return console.log(e)
      }
    }
  },

  Items: {
    itemowner(item) {
      if (!item.itemowner) return null;
      try {
        return getUsers(item.itemowner)
      } catch (e) {
        return console.log(e)
      }
    },
    borrower(item) {
      if (!item.borrower) return null;
      try {
        return getUsers(item.borrower)
      } catch (e) {
        return console.log(e)
      }
    }
  },
  User: {
    owneditems(user, args, context) {
      if (!user.id) return null;
      try {
        // return getOwnedItems(user.id)
        return context.loaders.UserOwnedItems.load(user.id)
      } catch (e) {
        return console.log(e)
      }
    },
    borroweditems(user, args, context) {
      if (!user.id) return null;
      try {
        // return getBorrowedItems(user.id)
        return context.loaders.UserBorrowedItems.load(user.id)
      } catch (e) {
        return console.log(e)
      }
    }
  },
  Mutation: {
    addItem(root, { title, description, imageurl, tags, itemowner }) {
      return createNewItem(title, description, imageurl, tags, itemowner)
    }
  }
};
export default resolveFunctions;