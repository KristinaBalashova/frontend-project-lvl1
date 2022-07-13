#!/usr/bin/env node
import { gameLoop } from '../src/index.js';
import { evenGame, gameRule } from '../src/games/even-game.js';

gameLoop(evenGame, gameRule);
