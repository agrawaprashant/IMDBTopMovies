import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent implements OnInit {
  //taking total records and records per page from the component implementing this component(Pagination)
  @Input() totalRecords: number;
  @Input() recordsPerPage: number;

  @Output() onPageChangeClicked: EventEmitter<Number> = new EventEmitter<
    Number
  >();
  currentActivePage: number;
  pages: number[] = [];
  constructor() {}

  ngOnInit() {
    const totalPages: number = this.getPageCount(
      this.totalRecords,
      this.recordsPerPage
    );
    this.pages = this.getPagesArray(totalPages);
    this.onPageChangeClicked.emit(1);
    this.currentActivePage = 1;
  }

  private getPageCount(totalRecords: number, recordsPerPage: number): number {
    let totalPage: number = 0;
    if (totalRecords > 0 && recordsPerPage > 0) {
      const pageCount: number = totalRecords / recordsPerPage;
      const roundedPageCount = Math.floor(pageCount);

      totalPage =
        roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;

      return totalPage;
    }
  }

  private getPagesArray(pageCount: number): number[] {
    const pageArray: number[] = [];
    for (let i = 1; i <= pageCount; i++) {
      pageArray.push(i);
    }

    return pageArray;
  }

  onClickPageList(selectedPage: number) {
    if (selectedPage > this.pages.length) return;
    if (selectedPage < 1) return;
    this.currentActivePage = selectedPage;
    this.onPageChangeClicked.emit(selectedPage);
  }
}
