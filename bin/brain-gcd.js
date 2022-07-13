#!/usr/bin/env node
import { gameLoop } from '../src/index.js';
import { nodGame, gameRule } from '../src/games/nod-game.js';

gameLoop(nodGame, gameRule);
