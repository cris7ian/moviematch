const fetch = require('isomorphic-fetch')
const chalk = require('chalk')
cowsay = require('cowsay')
const moment = require('moment')

const SERVER = 'https://filmsincommon-server.herokuapp.com'

const getPerson = query =>
  fetch(`${SERVER}/person/${query}`)
    .then(response => response.json())
    .catch(err => err)

exports.getConnection = async names => {
  const results = await Promise.all(names.map(getPerson))

  if (!results[0].length || !results[1].length) {
    console.log(
      chalk.yellow('Sadly, we couldnt find anyone with the name'),
      !results[0].length ? names[0] : names[1]
    )
    return
  }

  const matches = results.map(partialResults => partialResults[0])
  console.log(
    chalk.magenta(`Results for:\n\t${matches[0].name}\n\t${matches[1].name}`)
  )

  return fetch(`${SERVER}/connection/${matches[0].id}/${matches[1].id}`)
    .then(res => res.json())
    .then(results => prettyPrint(results, matches))
    .catch(err => console.log(err))
}

const printJob = person => (person.job ? person.job : person.character)

const prettyPrint = (results, matches) => {
  if (!results.moviesTheyWorkedIn.length) {
    console.log(
      cowsay.think({
        text: "They haven't worked together ... YET!",
        e: 'uu'
      })
    )
    return
  }
  console.log(chalk.magenta("\nProductions they've worked in:"))
  results.moviesTheyWorkedIn
    .sort((a, b) => moment(a.date) < moment(b.date))
    .map(production => {
      console.log(
        `\t${production.movie} [${moment(production.date).fromNow()}]`
      )
      console.log(
        chalk.dim(
          `\t${matches[0].name} as ${printJob(production.people[0])} and ${matches[1].name} as ${printJob(production.people[1])}\n`
        )
      )
    })
}
