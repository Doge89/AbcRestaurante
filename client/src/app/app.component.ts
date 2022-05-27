import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Restaurante';

  public windowSize: number = NaN;

  public HandleResize($event: Event): void {
    $event.preventDefault();
    this.windowSize = window.innerWidth;
  }

}
