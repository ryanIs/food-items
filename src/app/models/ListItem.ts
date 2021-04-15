export class ListItem {
  itemName: string
  // itemId: string
  itemDescription: string
  userInfo: string

  constructor(itemName: string, itemDescription: string = "", userInfo: string = "") {
    this.itemName = itemName
    this.itemDescription = itemDescription
    this.userInfo = userInfo
  }

  
}