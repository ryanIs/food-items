import { Component, OnInit, Input } from '@angular/core';

import { ListItemComponent } from '../list-item/list-item.component'
import { List } from '../../models/List'
import { ListItem } from '../../models/ListItem'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  @Input() list: List = new List('default list')
  // @Input() items: ListItemComponent[] = [

  // ]

  // @Input() title: string = "List Title"

  // @Input() purchaseDate: string = "Sat 17/04/2021"

  // constructor(title: string = "List title", purchaseData: string = "Sat 17/04/2021") { 
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
