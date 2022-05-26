//*Core imports
import { Component, OnInit } from '@angular/core';
import { MenuOption } from 'src/app/typescript/interfaces/project.config';

//*Menu
import { MenuNavBar } from 'src/app/typescript/project.config';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private Menu: MenuOption[] = MenuNavBar;
  get getMenu(): MenuOption[]{
    return this.Menu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
