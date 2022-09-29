import {ValueCell} from './state/ValueCell';

export class InputCellElement {
  private readonly cellElement: HTMLInputElement;
  private readonly valueCell: ValueCell;

  constructor(valueCell: ValueCell) {
    this.cellElement = this.generateCellElement();
    this.valueCell = valueCell;
    this.attachEventListener();
  }

  public element() {
    return this.cellElement;
  }

  public val() {
    return this.valueCell.val();
  }

  private generateCellElement() {
    const cellElement = document.createElement('input');
    cellElement.className = 'cell';
    cellElement.type = 'number';
    cellElement.min = '0';
    cellElement.max = '999';

    return cellElement;
  }

  private attachEventListener() {
    this.cellElement.addEventListener('input', event =>
      this.valueCell.update(() => (event.target as HTMLInputElement).value)
    );
  }
}
