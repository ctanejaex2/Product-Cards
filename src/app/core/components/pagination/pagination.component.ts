import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() homeCount: any;
  @Input() filteredImagesResult: any;
  @Output('currentPageIndex') currentPageIndexEvent = new EventEmitter<number>();


  imagesPerPage: number = 10;
  totalPages: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.homeCount['imageCount'] / this.imagesPerPage);
  }

  onPageSelected(pageNum: number) {
    this.currentPageIndexEvent.emit(pageNum);
  }
}
