type NumberSentence =
  | 'ADDITION'
  | 'SUBTRACTION'
  | 'MULTIPLICATION'
  | 'DIVISION';
const numberSentences = [
  'ADDITION',
  'SUBTRACTION',
  'MULTIPLICATION',
  'DIVISION',
] as const;

export class CalculatorRenderer {
  private readonly rootElement: HTMLElement;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  render() {
    const wrapperElement = document.createElement('div');
    const {ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION} =
      this.generateResultElementMap();
    wrapperElement.append(ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION);
    this.rootElement.append(wrapperElement);
  }

  private generateResultElementMap() {
    // eslint-disable-next-line node/no-unsupported-features/es-builtins
    return Object.fromEntries(
      numberSentences.map(sentence => [
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
