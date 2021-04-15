import { Component } from '@angular/core';

import { List } from './models/List'
import { ListItem } from './models/ListItem'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  lists: List[] = [
    new List('my title', '10/10/2000', [
      new ListItem('bagles'),
      new ListItem('bagles2'),
    ]),
    new List('my titleB', '15/15/2000', [
      new ListItem('eag'),
      new ListItem('eag55'),
    ])
  ]

  /**
   * Add new shopping list
   */
  addNewList() {
    console.log('Add new list clicked')
  }
}
