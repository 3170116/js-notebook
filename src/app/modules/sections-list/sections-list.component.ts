import { Component, OnInit } from '@angular/core';
import { CodeSection } from 'src/app/models/CodeSection';

@Component({
  selector: 'app-sections-list',
  templateUrl: './sections-list.component.html',
  styleUrls: ['./sections-list.component.css']
})
export class SectionsListComponent implements OnInit {

  constructor() { }

  public sections: CodeSection[] = [];

  ngOnInit(): void {
    var section = {
      code: "console.log('Hello world!');"
    } as CodeSection;
    this.sections.push(section);
  }

}
