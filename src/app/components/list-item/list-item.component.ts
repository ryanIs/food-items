import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from 'src/app/models/ListItem';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {

  @Input() listItem: ListItem = new ListItem('new default list item')

  constructor() { }

  ngOnInit(): void {

  }

}
