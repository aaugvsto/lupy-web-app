import { PagesMenu } from './../../../app-menu';
import { Component } from '@angular/core';
import { MenuItem } from '../../models/MenuItem';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  public menuItems: MenuItem[] = PagesMenu;

}
