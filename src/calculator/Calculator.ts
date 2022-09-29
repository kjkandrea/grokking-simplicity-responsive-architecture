import {InputCellElement} from './cell/InputCellElement';
import {ValueCell} from './cell/state/ValueCell';

type NumberSentence =
  | 'ADDITION'
  | 'SUBTRACTION'
  | 'MULTIPLICATION'
  | 'DIVISION';

export class Calculator {
  static numberSentences = [
    'ADDITION',
    'SUBTRACTION',
    'MULTIPLICATION',
    'DIVISION',
  ] as const;

  private readonly rootElement: HTMLElement;
  private valueCells: [ValueCell, ValueCell];

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this.valueCells = this.generateValueCells();
  }

  render() {
    const wrapperElement = document.createElement('div');
    const inputCellElements = this.generateInputCellElements();
    wrapperElement.append(
      ...inputCellElements.map(inputCellElement => inputCellElement.element())
    );
    const {ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION} =
      this.generateResultElementMap();
    wrapperElement.append(ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION);
    this.rootElement.append(wrapperElement);
  }

  private generateValueCells(): [ValueCell, ValueCell] {
    const [first, second] = [new ValueCell(5), new ValueCell(3)];
    const valueCells = [first, second];
    valueCells.forEach(valueCell =>
      valueCell.addWatcher(() => {
        const values = valueCells.map(valueCell => Number(valueCell.val()));
        console.log(values);
      })
    );

    return [first, second];
  }

  private generateInputCellElements() {
    return this.valueCells.map(valueCell =>
      this.generateInputCellElement(valueCell)
    );
  }

  private generateInputCellElement(valueCell: ValueCell) {
    return new InputCellElement(valueCell);
  }

  private generateResultElementMap() {
    // eslint-disable-next-line node/no-unsupported-features/es-builtins
    return Object.fromEntries(
      Calculator.numberSentences.map(sentence => [
        sentence,
        this.generateResultElement(sentence),
      ])
    );
  }

  private generateResultElement(numberSentence: NumberSentence) {
    const wrapperElement = document.createElement('dl');
    const titleElement = document.createElement('dt');
    const dataElement = document.createElement('dd');
    wrapperElement.append(titleElement, dataElement);
    titleElement.textContent = numberSentence;
    dataElement.textContent = '9999'; // TODO

    return wrapperElement;
  }
}
