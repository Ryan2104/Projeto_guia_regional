import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bertioga',
  templateUrl: './bertioga.page.html',
  styleUrls: ['./bertioga.page.scss'],
})
export class BertiogaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
Sair(){
  this.router.navigate(['/sair']) 
}
}
