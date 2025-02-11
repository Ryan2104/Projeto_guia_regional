import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-guaruja',
  templateUrl: './guaruja.page.html',
  styleUrls: ['./guaruja.page.scss'],
})
export class GuarujaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Sair(){
    this.router.navigate(['/sair']);
  }
}
