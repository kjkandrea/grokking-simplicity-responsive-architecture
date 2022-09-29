import './style.css';
import {CalculatorController} from './calculator/CalculatorController';
import {CalculatorRenderer} from './calculator/CalculatorRenderer';

const rootElement = document.getElementById('app')!;
new CalculatorController(new CalculatorRenderer(rootElement));
