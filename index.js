#!/usr/bin/env node
const getConnection = require('./api').getConnection
const chalk = require('chalk')

const commandLineArgs = require('command-line-args')

const optionDefinitions = [
  { name: 'names', type: String, multiple: true, defaultOption: true }
]

const names = commandLineArgs(optionDefinitions, { partial: true }).names

if (!names || names.length !== 2) {
  console.log(
    'You are using this wrong. Try something like:\n\tmoviematch -names "Chris Hemsworth" "Joss Whedon"'
  )
} else {
  getConnection(names).catch(err =>
    console.log(chalk.red(`DAMN! There\'s been an error: ${err}`))
  )
}
