exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('DFoundation').del()
    .then(function () {
      // Inserts seed entries
      return knex('DFoundation').insert([
        { id: 1, info: 'What is Dyscaclculia? Dyscalculia is defined as a condition that involves long-term, severe difficulties with mathematics – which cause significant problems with academic or occupational performance, or with daily activities. Dyscalculic children and adults might also have trouble using calendars and clocks, they might struggle with recalling the order of past events, and with following sequential instructions.', img: 'http://dyslexiavictoriasupport.com/wp-content/uploads/2018/05/Slide1.png' }
      ])
    })
}
