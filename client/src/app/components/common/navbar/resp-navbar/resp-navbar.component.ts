import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { MenuOption } from 'src/app/typescript/interfaces/project.config';
import { MenuNavBar } from 'src/app/typescript/project.config';

@Component({
  selector: 'respnavbar',
  templateUrl: './resp-navbar.component.html',
  styleUrls: ['./resp-navbar.component.sass']
})
export class RespNavbarComponent implements OnInit, AfterViewInit {

  @ViewChild("menuMain") public MenuMain!: ElementRef<HTMLDivElement>; 

  public readonly MenuIcon: IconDefinition = faGripLines

  public readonly MenuNavBar: MenuOption[] = MenuNavBar;

  public isMenuActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  public HandleMenuActivation($event: MouseEvent): void{
    $event.preventDefault();
    this.isMenuActive = !this.isMenuActive;
  }

}
