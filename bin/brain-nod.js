#!/usr/bin/env node
import { nodGame } from '../games/nod-game.js';
import { greeting, getRandomInt } from '../src/index.js';

nodGame(greeting());
