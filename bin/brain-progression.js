#!/usr/bin/env node
import { progressionGame } from '../games/pro-game.js';
import { greeting, getRandomInt } from '../src/index.js';

progressionGame(greeting());
