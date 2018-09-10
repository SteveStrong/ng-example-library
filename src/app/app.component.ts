import { Component, OnInit } from '@angular/core';
import { NgExampleLibraryService, Steve } from 'ng-example-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-example-library-app';
  serviceData = '';
  myName = '';

  constructor (
    private ngExampleLibraryService: NgExampleLibraryService
  ) {}

  ngOnInit(): void {
    this.serviceData = this.ngExampleLibraryService.getData();

    const steve = new Steve();
    this.myName  = steve.fullName();
  }
}
