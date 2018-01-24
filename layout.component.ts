import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
 openPanel = false;

    constructor(private router: Router,) { }
  
    ngOnInit() {
    }
  
    toggleSideMenu(){
    this.openPanel = !this.openPanel;
    }
}
