
exports.up = function(knex) {
    return knex.schema.createTable('carsInfo', tbl => {
        tbl.increments();
        tbl.string('VIN', 17).notNullable();
        tbl.string('Make').notNullable();
        tbl.string("Model").notNullable();
        tbl.integer("Mileage").notNullable();
        tbl.string('Transmission_Type');
        tbl.string('Title_Status');
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExits('carsInfo');
};
