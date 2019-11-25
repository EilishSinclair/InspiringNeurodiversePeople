exports.up = (knex, Promise) => {
  return knex.schema.createTable('DFYouth', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('link')
    table.string('img')
    table.string('blurb')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('DFYouth')
}
