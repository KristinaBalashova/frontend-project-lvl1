#!/usr/bin/env node
import calcGame from '../src/games/calc-game.js';
import { gameLoop } from '../src/index.js';
import { gameRule } from '../src/games/calc-game.js';

gameLoop(calcGame, gameRule);
