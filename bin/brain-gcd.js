#!/usr/bin/env node
import gameLoop from '../src/index.js';
import { gcdGame, gameRule } from '../src/games/gcd-game.js';

gameLoop(gcdGame, gameRule);
