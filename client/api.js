// Have a look at how react-to-web-api uses this file
// This file is used to run a function that goes to get the server side route, then connects to the database

import request from 'superagent'

const DFoundationUrl = 'http://localhost:3000/api/DFoundation/'
const DFYouthUrl = 'http://localhost:3000/api/DFYouth'

export function getDFoundation () {
  return request
    .get(DFoundationUrl)
    .then(response => response.body)
}

export function getDFYouth () {
  return request
    .get(DFYouthUrl)
    .then(response => response.body)
}

// How Questions:
// 1. How do I create Migrations Folder inside Client and then inside Components? You've done this!
// 2. How do I create Seeds Folder inside Client and then inside Components? You've done this!
// 3. How do I change my branch name to Dyscalculia Foundation rather than EilishProject in github? let's google it, i don't remember
// 4. Because I am using the charolttes web concept for my personal project and ?

// What Questions:
// What does const environment = process.env.NODE_ENV || 'development' mean/stand for
// What does express mean ('express)
