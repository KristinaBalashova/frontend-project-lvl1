#!/usr/bin/env node
import gameLoop from '../src/index.js';
import { progressionGame, gameRule } from '../src/games/pro-game.js';

gameLoop(progressionGame, gameRule);
