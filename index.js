#!/usr/bin/env node
const getConnection = require('./api').getConnection
const getRevenue = require('./api').getRevenue
const chalk = require('chalk')

const commandLineArgs = require('command-line-args')

const optionDefinitions = [
  { name: 'names', type: String, multiple: true, defaultOption: true },
  { name: 'revenue', type: String }
]

const names = commandLineArgs(optionDefinitions, { partial: true }).names

const revenue = commandLineArgs(optionDefinitions, { partial: true }).revenue

const warn = () => {
  console.log(
    'You are using this wrong. Try something like:\n\tmoviematch --names "Chris Hemsworth" "Joss Whedon"'
  )
  console.log('or: \n\tmoviematch --revenue "jennifer lawrence"')
}

if (names) {
  if (names.length !== 2) {
    console.log(
      'We need exactly two names. Try something like:\n\tmoviematch --names "Chris Hemsworth" "Joss Whedon".'
    )
    console.log('Remember the quotes(")')
    process.exit(0)
  } else {
    getConnection(names).catch(err =>
      console.log(chalk.red(`DAMN! There\'s been an error: ${err}`))
    )
  }
} else if (revenue) {
  getRevenue(revenue).catch(err =>
    console.log(chalk.red(`DAMN! There\'s been an error: ${err}`))
  )
}

if (!names && !revenue) {
  warn()
}
