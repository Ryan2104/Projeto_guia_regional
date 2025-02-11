import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cubatao',
  templateUrl: './cubatao.page.html',
  styleUrls: ['./cubatao.page.scss'],
})
export class CubataoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
   
  }
  Sair(){
  this.router.navigate(['/sair']);
}
}
