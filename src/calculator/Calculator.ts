import {InputCellElement} from './cell/InputCellElement';

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

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  render() {
    const wrapperElement = document.createElement('div');
    const inputCellElements = this.generateInputCellElements(2);
    this.watchInputs(inputCellElements);
    wrapperElement.append(
      ...inputCellElements.map(inputCellElement => inputCellElement.element())
    );
    const {ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION} =
      this.generateResultElementMap();
    wrapperElement.append(ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION);
    this.rootElement.append(wrapperElement);
  }

  private generateInputCellElements(length: number) {
    if (0 > length) throw Error('plz positive number');

    return Array.from({length}, () => new InputCellElement());
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

  private watchInputs(inputs: InputCellElement[]) {
    inputs.forEach(input =>
      input.on('@input:input', () => {
        const values = inputs.map(input => Number(input.val()));
        console.log(values);
      })
    );
  }
}
