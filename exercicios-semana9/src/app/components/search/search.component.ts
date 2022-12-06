import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() search = '';
  @Output() searchChange = new EventEmitter();

  ngOnInit(): void {}

  searchChangeHandler() {
    this.searchChange.emit({ search: this.search });
  }
}
