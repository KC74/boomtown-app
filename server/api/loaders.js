import DataLoader from "dataloader";
import { database } from "../index";
import { getUsers } from "./resources/postgresHelpers";
export default function() {
  return {
    UserOwnedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => database.getUserOwnedItems(id)))
    ),
    UserBorrowedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => database.getUserBorrowedItems(id)))
    ),
    SingleUser: new DataLoader(user =>
      Promise.all(user.map(id => getUsers(id)))
    ),
    SingleItem: new DataLoader(item =>
      Promise.all(item.map(id => database.getSingleItem(id)))
    )
  };
}
