#!/usr/bin/env node
import { calcGame } from '../games/calc-game.js';
import { greeting, getRandomInt } from '../src/index.js';

calcGame(greeting());
