import {InputCellElement} from './cell/InputCellElement';
import {ValueCell} from './cell/state/ValueCell';
import {CompositionCell} from './cell/state/CompositionCell';
import {Cell} from './cell/state/Cell';
import {ResultCellElement} from './cell/ResultCellElement';

export class Calculator {
  private readonly valueCells: ValueCell[];
  private resultCellMap: {
    ADDITION: Cell;
    SUBTRACTION: Cell;
    MULTIPLICATION: Cell;
    DIVISION: Cell;
  };

  constructor(initialValue: number[]) {
    this.valueCells = initialValue.map(value => new ValueCell(value));
    this.resultCellMap = {
      ADDITION: new CompositionCell(this.valueCells, values =>
        values.map(Number).reduce((a, b) => a + b)
      ),
      SUBTRACTION: new CompositionCell(this.valueCells, values =>
        values.map(Number).reduce((a, b) => a - b)
      ),
      MULTIPLICATION: new CompositionCell(this.valueCells, values => {
        console.log(values);
        return values.map(Number).reduce((a, b) => a * b);
      }),
      DIVISION: new CompositionCell(this.valueCells, values =>
        values.map(Number).reduce((a, b) => a / b)
      ),
    };
  }

  render(rootElement: HTMLElement) {
    const inputCellElements = this.generateInputCellElements();
    const resultCellElements = Object.values(this.generateResultElementMap());
    rootElement.append(
      ...inputCellElements.map(inputCellElement => inputCellElement.element()),
      ...resultCellElements.map(resultCellElement =>
        resultCellElement.element()
      )
    );
  }

  private generateInputCellElements() {
    return this.valueCells.map(valueCell => new InputCellElement(valueCell));
  }

  private generateResultElementMap() {
    return {
      ADDITION: new ResultCellElement(this.resultCellMap.ADDITION, 'ADDITION'),
      SUBTRACTION: new ResultCellElement(
        this.resultCellMap.SUBTRACTION,
        'SUBTRACTION'
      ),
      MULTIPLICATION: new ResultCellElement(
        this.resultCellMap.MULTIPLICATION,
        'MULTIPLICATION'
      ),
      DIVISION: new ResultCellElement(this.resultCellMap.DIVISION, 'DIVISION'),
    };
  }
}
