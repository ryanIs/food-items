import { ListItem } from './ListItem'

export class List {
  title: string
  purchaseDate: string
  items: ListItem[]

  constructor(title: string, purchaseDate: string = "", items: ListItem[] = []) {
    this.title = title
    this.purchaseDate = purchaseDate
    this.items = items
  }
}