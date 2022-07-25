#!/usr/bin/env node
import gameLoop from '../src/index.js';
import { primeGame, gameRule } from '../src/games/prime-game.js';

gameLoop(primeGame, gameRule);
