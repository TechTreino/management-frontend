'use strict';

const fs = require('fs')
const ncp = require('ncp')
const mkdirp = require('mkdirp')

const baseApiPath = process.env.NODE_ENV === 'production'
  ? 'https://techtreino-api.herokuapp.com'
  : 'http://localhost:3000'
const exampleFile = fs.readFileSync('./index.example.html')

console.log('  Replacing index.html file')
fs.writeFileSync('./index.html', exampleFile.toString('utf8').replace('<%=baseApiPath%>', baseApiPath))

console.log('  Moving files to build folder')
mkdirp('./build')
ncp('./dist', './build/dist/', exitOnError)
ncp('./index.html', './build/index.html', exitOnError)
ncp('./_redirects', './build/_redirects', exitOnError)

function exitOnError(err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
}

