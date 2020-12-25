#!/usr/bin/env node

import askName from '../src/cli.js';
import parityGame from '../src/parityGame.js';

const userName = askName();
parityGame(userName);
