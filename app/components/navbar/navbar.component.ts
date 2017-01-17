import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'navbar',
  templateUrl: '../../../app/components/navbar/navbar.component.html'
})
export class NavbarComponent {
    branding = 'MyWebsite';
}
