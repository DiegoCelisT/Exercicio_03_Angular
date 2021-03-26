import { Component, Input, OnInit } from '@angular/core';
// import { GiphyService } from '../giphy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  @Input() pesquisa: string | null = null

  constructor (private router: Router) {}

  //INCLUINDO UM ngOnInit que nao vem por default
  ngOnInit(): void {
  }

  pesquisar(termo: string, evento: any) {
    evento.preventDefault()

    this.router.navigate(['/resultados', termo])
    // location.href = '/resultados/' + termo
  }


  // pagina = "";

  // onSubmit (BUSCA){
  //   this.pagina = "https://google.com"
  //   console.log (this.pagina)
  // }

  


  // onSubmit (BUSCA){
  //   this.GiphyServ.getGIFS(BUSCA.form.value.palavras_chave)
  //   .subscribe(resultados => {
  //     // console.log (resultados);
  //     this.resultados = resultados;
  //     this.Home = false;
  //   })
  // }
  
  // limpar (){
  //   this.resultados = [];
  //   this.Home = true;
  // }

}

