import './style.css';
import {Calculator} from './calculator/Calculator';

const rootElement = document.getElementById('app')!;
const calculator = new Calculator([7, 5, 3]);
calculator.render(rootElement);
