
const node = require ('./nodejs.js');
const runtime = require ('./runtime');
const os = require ('./os');
const util = require ('./util/util');
const na = require('../01-variables');
console.log(na)
console.log(os.archivos)

console.log(util())
console.log(node)
console.log(runtime)

const fs = require('fs');
console.log(fs);
const express = require('express');
console.log(express);