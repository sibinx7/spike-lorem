const loremIpsum = require('lorem-ipsum')
const randomItem = require('random-item')
const moment = require('moment')

const range = require('./_range')

const nameFile = require('../data/name.json')
const jobFile  = require('../data/job.json')
const AddressFile = require('../data/address.json')

// //
const lorem = {

  first_name () {
    const firstNames = nameFile.en.faker.name.first_name
    return randomItem(firstNames)
  },

  last_name () {
    const lastNames = nameFile.en.faker.name.last_name
    return randomItem(lastNames)
  },

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
  },

  countries () {
    return AddressFile.en.faker.address.country
  },

  country () {
    return randomItem(this.countries())
  },

  building_number () {
    return AddressFile.en.faker.address.building_number;
  },

  street_suffix () {
    return randomItem(AddressFile.en.faker.address.street_suffix)
  },

  city_prefix () {
    return randomItem(AddressFile.en.faker.address.city_prefix)
  },

  city_suffix () {
    return randomItem(AddressFile.en.faker.address.city_suffix)
  },

  states () {
    return AddressFile.en.faker.address.state
  },

  zip () {
    return randomItem(range(6000, 8000, 21))
  },

  state () {
    return randomItem(this.state())
  },

  state_abbr () {
    return randomItem(AddressFile.en.faker.address.state_abbr)
  },

  street_name () {
    return `${this.first_name()} ${this.street_suffix()}`
  },

  city () {
    return `${this.city_prefix()} ${this.first_name()} ${this.city_suffix()}`
  },

  street_address () {
    return `${this.building_number()} ${this.street_name()}`
  },

  full_address () {
    return `${this.street_address()} ${this.city()} ${this.state_abbr()} ${this.zip}`
  }

}

module.exports = lorem
