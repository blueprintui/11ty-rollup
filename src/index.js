import ConfettiGenerator from 'confetti-js';
import './index.css';

const target = document.querySelector('.confetti-canvas');
const confetti = new ConfettiGenerator({ target });
const button = document.querySelector('.confetti-button');
button.addEventListener('click', () => confetti.render());