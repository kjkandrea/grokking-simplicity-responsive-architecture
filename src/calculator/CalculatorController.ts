import {CalculatorRenderer} from './CalculatorRenderer';

export class CalculatorController {
  private readonly renderer: CalculatorRenderer;

  constructor(renderer: CalculatorRenderer) {
    this.renderer = renderer;
    this.renderer.render();
  }
}
