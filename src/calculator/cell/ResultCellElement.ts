import {ValueCell} from './state/ValueCell';

export class ResultCellElement {
  private readonly cellElement: HTMLInputElement;

  constructor(value: ValueCell) {
    this.cellElement = this.generateCellElement();
    value.addWatcher(
      newValue => (this.cellElement.textContent = String(newValue))
    );
  }

  public element() {
    return this.cellElement;
  }

  private generateCellElement() {
    const cellElement = document.createElement('input');
    cellElement.className = 'cell';
    cellElement.readOnly = true;

    return cellElement;
  }
}
