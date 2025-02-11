import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// importando o api de cep
import { CepproviderService } from '../services/cepprovider.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  public cep! : string;
  constructor(private router: Router,private cepProvider:CepproviderService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  pesquisar(){

  
    // =>   Simbolo para criar uma function anônima  
    // subscribe: Aguarda o retorno da api e manda como parametro (data), para fazer a consulta
    this.cepProvider.consultarCEP(this.cep).subscribe((data) =>{
      
      // apresenta no console os dados recebidos (data)
      console.warn(data)
      
      // criando váriaveis strings para ser atribuidas os valores 
      var uf = 'SP', cidade ='São Vicente'
      

      //object.entries(data): retorna uma array dos próprios pares [chave,valor] do nosso objeto (data)
      // for para atribuição dos valores da api na variavel [valor,chave] // criando um array com o parametro (data) que foi atribuido acima
      for(const[chave,valor] of Object.entries(data)){
        console.log(chave, valor)
        switch(chave){
              //chave  : valor
          case 'state' : uf = valor 
              break
          case 'city' : cidade = valor
              break
        }
        
      }
      
      // mandamos as duas váriaveis | uf,cidade | para a função redirecionar logo abaixo 
      this.redirecionar(uf,cidade)
    })

  }
  //usando a função que puxamos as váriaveis
  // Adicionando os parametros uf:string, cidade:string /para podermos utilizar na função,  
  redirecionar(uf:string, cidade:string ){
     
    if(uf !='SP' ){
      //Mensagem de Erro 
      console.log('O CEP não é da RMBS - ' + this.cep)
      return
    }

    switch (cidade) {

      case '11704900':
      case '11704-900':
        case 'Praia Grande':
        console.log('Praia Grande')
        this.router.navigate(['/praiagrande'])        
        break;

      case '11088190':
      case '11088-190':
        case 'Santos':
        console.log('Santos')
        this.router.navigate(['/santos'])
              
      break;

      case '11410385':
      case '11410-385':
      case 'Guarujá' :
        console.log('Guaruja')
        this.router.navigate(['/guaruja'])
              
      break;

      case '11250021':
      case '11250-021':
        case 'Bertioga':
        console.log('Bertioga')
        this.router.navigate(['/bertioga'])
              
      break;
      
      case '11360002':
      case '11360-002':
        case 'São Vicente':
        console.log('Sao Vicente')
        this.router.navigate(['/saovicente'])
              
      break;

      case '11531430':
      case '11531-430':
        case 'Cubatão':
        console.log('Cubatao')
        this.router.navigate(['/cubatao'])
              
      break;

      case '11709000':
        case '11709-000':
          case 'Mongaguá':
          console.log('Mongagua')
          this.router.navigate(['/mongagua'])
                
        break;

        case '11740972':
        case '11740-972':
          case 'Itanhaém':
          console.log('Itanhaem')
          this.router.navigate(['/itanhaem'])
                
        break;

        case '11770000':
        case '11770-000':
          case 'Peruíbe':
          console.log('Peruibe')
          this.router.navigate(['/peruibe'])
                
        break;
        
      default:
        console.log('CEP não é da RMBS')
        break;
    }

}

}
