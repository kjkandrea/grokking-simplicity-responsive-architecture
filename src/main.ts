import './style.css';
import {Calculator} from './calculator/Calculator';

const rootElement = document.getElementById('app')!;
const calculator = new Calculator(rootElement);
calculator.render();
