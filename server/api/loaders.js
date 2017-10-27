import DataLoader from 'dataloader';
import { getOwnedItems, getBorrowedItems, getUsers, getItems } from './resources/postgresHelpers';
export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getOwnedItems(id))
    ))),
    UserBorrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getBorrowedItems(id))
    ))),
    SingleUser: new DataLoader(user => (
      Promise.all(user.map((id) => getUsers(id)))
    )),
    SingleItem: new DataLoader(item => (
      Promise.all(item.map((id) => getItems(id)))
    ))
  }
};