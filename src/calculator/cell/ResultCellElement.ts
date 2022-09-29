import {Cell} from './state/Cell';

export class ResultCellElement {
  private readonly cellElement: HTMLDListElement;
  private readonly cell: Cell;

  constructor(cell: Cell, name: string) {
    this.cell = cell;
    this.cellElement = this.generateCellElement(name);
  }

  public element() {
    return this.cellElement;
  }

  val() {
    return this.cell.val();
  }

  private generateCellElement(name: string) {
    const wrapperElement = document.createElement('dl');
    const titleElement = document.createElement('dt');
    const dataElement = document.createElement('dd');
    wrapperElement.append(titleElement, dataElement);
    titleElement.textContent = name;
    dataElement.textContent = String(this.cell.val());
    this.cell.addWatcher(value => (dataElement.textContent = String(value)));

    return wrapperElement;
  }
}
