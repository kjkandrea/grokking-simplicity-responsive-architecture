import {OnEmit} from '../../utils/OnEmit';

export class InputCellElement extends OnEmit {
  private readonly cellElement: HTMLInputElement;

  constructor() {
    super();
    this.cellElement = this.generateCellElement();
    this.cellElement.addEventListener('input', event =>
      this.eventListener(event)
    );
  }

  public element() {
    return this.cellElement;
  }

  public val() {
    return this.cellElement.value;
  }

  private generateCellElement() {
    const cellElement = document.createElement('input');
    cellElement.className = 'cell';
    cellElement.type = 'number';
    cellElement.min = '0';
    cellElement.max = '999';

    return cellElement;
  }

  private eventListener(event: Event) {
    this.emit(
      `@${event.type}:input`,
      (event.target as HTMLInputElement)?.value
    );
  }
}
