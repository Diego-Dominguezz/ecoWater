import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-riego',
  templateUrl: './riego.component.html',
  styleUrls: ['./riego.component.scss'],
})
export class RiegoComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // this.router.navigate(['riego','eco']);
  }

}
