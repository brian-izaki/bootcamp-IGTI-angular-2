import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.scss']
})
export class SelecaoComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() opcoes: string[] = [];
  @Input() escolhaAte: number = 0;
  selectedItens: string[] = [];

  ngOnInit(): void {
  }

  selectItens(event: MouseEvent) {
    const input: HTMLInputElement = (<HTMLInputElement>event.target);

    if (input.checked && (this.selectedItens.length < this.escolhaAte)) {
      this.selectedItens.push(input.value)
    } else if (!input.checked) {
      this.selectedItens = this.selectedItens.filter((item) => item !== input.value)
    }
  }

  isDisabled(opcao: string): boolean {
    if (this.selectedItens.some(item => item === opcao)) return false;
    if (this.selectedItens.length >= this.escolhaAte) return true;

    return false;
  }
}