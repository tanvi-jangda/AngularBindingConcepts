import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment7';
  data : string = "Marvellous Infosystems";

  public fun()
  {
    this.data = "Educating for better tomorrow";
  }
}
