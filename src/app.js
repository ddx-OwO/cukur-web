import AppRouting from './app-routing';
import 'bootstrap';
import './scss/styles.scss';
import './scss/custom.scss';

const origin = location.origin;
const path = document.getElementsByTagName('base')[0].getAttribute('href');

document.addEventListener('DOMContentLoaded', AppRouting(origin + path, false, '#!'));