const adjective = require('./words/adjectives')
const noun = require('./words/nouns')

const adjectives = adjective.adjectives
const nouns = noun.nouns

var r_adjective = adjectives[(Math.random() * adjectives.length) | 0]
var r_noun = nouns[(Math.random() * nouns.length) | 0]
var r_number = Math.floor(Math.random() * Math.floor(999))
var r_letter = Math.random().toString(36).substr(2, 2)

const meaningful = r_adjective.toLowerCase() + '-' + r_noun.toLowerCase() + '-' + r_number

module.exports = meaningful;