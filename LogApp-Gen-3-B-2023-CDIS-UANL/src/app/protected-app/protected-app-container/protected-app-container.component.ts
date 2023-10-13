import { Component } from '@angular/core';
import {CAROUSEL_DATA_ITEMS} from "../utils/carousel.const";

@Component({
  selector: 'app-protected-app-container',
  templateUrl: './protected-app-container.component.html',
  styleUrls: ['./protected-app-container.component.css']
})
export class ProtectedAppContainerComponent {

    protected readonly CAROUSEL_DATA_ITEMS = CAROUSEL_DATA_ITEMS;
}
