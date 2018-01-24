import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 tabs = ['Home','Gallery','Class','Contact'];

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  // onClick(val){
  //   this.router.navigate([val]);
  // }

}
