# CardapioAcai

Projeto com angular de um cardápio de açaí. Caso selecione a quantidade máxima de ingredientes, outros checkbox ficarão desabilitados.

<br>
<br>

Conceitos utilizados e aprendidos:

- sobre o TypeScript:

  - ao tentar acessar o event de um evento deve-se usar o `$event`, dentro da função que é do evento, é uma variável inplicita no angular que permite acessar o valor de event.
  - o event de um evento que envolve o mouse é do tipo `MouseEvent`
  - o target.value pode apenas ser acessado caso faça o casting do target para o tipo `HTMLInputElement`.

- sobre Angular:
  - utilizado o **Event binding** para capturar os eventos de click nos inputs
  - utilizado o **property binding** para utilizar expressões e assim tornar a aplicação dinâmica.
  - utilizado o **input property** para que o componente seleção pudesse receber atributos quando chamasse o componente, foi passado o _titulo, tamanhos e ingredientes_ para montar um açaí.
  - foi tbm utilizado a diretiva `if` para mostrar um texto com as quantidades de ingrediente selecionados
  - e a diretiva `for`, foi utilizada para renderizar as lista de ingredientes que foi passado pelo input property para o componente seleção.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
