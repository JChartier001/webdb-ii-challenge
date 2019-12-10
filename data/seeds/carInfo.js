
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return( 
  knex('carsInfo')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('carsInfo').insert([
        {
          id: 1,
          VIN: '2345454567',
          Make: 'Ford',
          Model: 'F150',
          Mileage: '65000',
          Transmission_Type: 'auto',
          Title_Status: 'clean'
        },
        {
          id: 2,
          VIN: '2345567898',
          Make: 'Chevrolet',
          Model: 'Colorado',
          Mileage: '100200',
          Transmission_Type: 'auto',
          Title_Status: 'clean'
        },
        {
          id: 3,
          VIN: '7890567857',
          Make: 'Dodge',
          Model: 'Ram',
          Mileage: '150000'
        },
        {
          id: 4,
          VIN: '4567789045',
          Make: 'Mitsubishi',
          Model: 'Spyder',
          Mileage: '250000',
          Transmission_Type: 'manual'
        },
        {
          id: 5,
          VIN: '7890345665',
          Make: 'Toyota',
          Model: 'Tundra',
          Mileage: '135000',
          Transmission_Type: 'auto',
          Title_Status: 'salvage'
        },
        {
          id: 6,
          VIN: '3456678978',
          Make: 'Chevrolet',
          Model: 'Cheyenne',
          Mileage: '60000',
          Transmission_Type: 'manual',
          Title_Status: 'clean'
        },
        {
          id: 7,
          VIN: '6789567887',
          Make: 'Dodge',
          Model: 'Dakota',
          Mileage: '75000',
          Transmission_Type: 'manual',
          Title_Status: 'clean'
        },
        {
          id: 8,
          VIN: '5678456734',
          Make: 'Honda',
          Model: 'Civic',
          Mileage: '280000',
          Title_Status: 'clean'
        },
        {
          id: 9,
          VIN: '2346546756',
          Make: 'Renault',
          Model: 'Renault',
          Mileage: '40000',
          Transmission_Type: 'manual',
          Title_Status: 'salvage'
        },
        {
          id: 10,
          VIN: '3456787634',
          Make: 'Chevrolet',
          Model: 'Silverado',
          Mileage: '125000',
          Transmission_Type: 'auto',
          Title_Status: 'clean'
        }

      ]);
    })
    );
};
