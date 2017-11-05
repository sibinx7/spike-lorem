const loremIpsum = require('lorem-ipsum')
const randomItem = require('random-item')
const moment = require('moment')


const nameFile = require('../data/name.json')


// //
const lorem = {
  name () {
    if (nameFile.en) {
      const firstNames = nameFile.en.faker.name.first_name
      const lastNames = nameFile.en.faker.name.last_name
      const firstName = randomItem(firstNames)
      const lastName = randomItem(lastNames)
      return `${firstName} ${lastName}`
    }
    return 'John Doe'
  },
  words (count = 1) {
    return loremIpsum({units: 'words', count: count})
  },
  sentences (count = 1) {
    return loremIpsum({units: 'sentences', count: count})
  },

  paragraphs (count = 1) {
    return loremIpsum({units: 'paragraph', count: count})
  },

  word () {
    return this.words(1)
  },

  sentence () {
    return this.sentences(1)
  },

  paragraph () {
    return this.paragraphs(1)
  },

  image (dimension = '120X120') {
    return `http://via.placeholder.com/${dimension}`
  },
  date (format = 'DD-MM-YYYY') {
    /**
     *
     * FORMAT MMM, D, YYYY
     *
     *
     * @type {Array}
     */
    const yearArray = [...Array(20).keys()].map((e) => (e + 1990))
    const monthArray = [...Array(12).keys()]
    let dateArray = [...Array(29).keys()]
    dateArray.splice(0, 1)

    const myear = randomItem(yearArray)
    const mmonth = randomItem(monthArray)
    const mdate = randomItem(dateArray)

    return moment([myear, mmonth, mdate]).format(format)
  }
}

module.exports = lorem
