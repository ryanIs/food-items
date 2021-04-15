import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  // Emits an event upward using the Output TypeScript decorator
  @Output() emitAddNewList: EventEmitter<any> = new EventEmitter()

  // NavComponent class constructor
  // Used for adding services
  constructor() { }

  // Angular on initiate function.
  // Called when this component is mounted (similar to React onMount)
  ngOnInit(): void {

  }

  /**
   * Add a new shopping list
   */
  addNewList(): void {
    this.emitAddNewList.emit()
  }

  /**
   * Switch application to edit mode
   */
  editList(): void {
    // this.emitAddNewList.emit()
  }

}
