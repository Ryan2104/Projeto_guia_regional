import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-itanhaem',
  templateUrl: './itanhaem.page.html',
  styleUrls: ['./itanhaem.page.scss'],
})
export class ItanhaemPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Sair(){
    this.router.navigate(['/sair']);
  }
}
