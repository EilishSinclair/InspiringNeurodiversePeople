exports.up = function (knex) {
  return knex.schema.createTable('DFoundation', (table) => {
    table.increments('id').primary()
    table.string('info')
    table.string('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('DFoundation')
}
