export class CalculatorRenderer {
  private readonly rootElement: HTMLElement;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  render() {
    const wrapperElement = document.createElement('div');
    wrapperElement.textContent = 'CalculatorRenderer';
    this.rootElement.append(wrapperElement);
  }
}
