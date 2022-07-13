#!/usr/bin/env node
import { gameLoop } from '../src/index.js';
import { calcGame, gameRule } from '../src/games/calc-game.js';

gameLoop(calcGame, gameRule);
