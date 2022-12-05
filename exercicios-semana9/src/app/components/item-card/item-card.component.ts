import { Component } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  personagem = {
    nome: 'Dwight Kurt Schrute III',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKAZ1BkYu4kTpTAdspz_jVMIhE0poWHQNg-Xu4qxqpk82WLHh-mrJJslEksENVIknN3c&usqp=CAU',
    nomeAtor: 'Rainn Wilson',
    descricao:
      'Dwight Kurt Schrute III é um personagem fictício em The Office e é interpretado pelo ator americano Rainn Wilson. O personagem de Dwight era um vendedor e assistente do gerente regional, na empresa fictícia de distribuição de papel, Dunder Mifflin, antes de suas promoções em temporadas posteriores.',
  };
}
