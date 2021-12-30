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
      code: "'Hello world!';"
    } as CodeSection;
    this.sections.push(section);
  }

  addCodeSection(i: number): void {
    var section = {
      code: "'Hello world!';"
    } as CodeSection;
    this.sections.splice(i + 1, 0, section);
  }

  removeCodeSection(i: number): void {
    this.sections.splice(i, 1);
  }

}
