import sequelize, { STRING, GEOMETRY } from 'sequelize';

const careType = sequelize.define('care_type',{
    name: { type: STRING, required: true },
});

const careLocation = sequelize.define('care_location',{
    name: { type: STRING, required: true },
    geom: { type: GEOMETRY('Point', 4283), required: true },
});

careLocation.hasOne(careType, {as:'care_type'})

const suburb = sequelize.define('suburb',{
    name: { type: STRING, required: true },
    geom: { type: GEOMETRY('POLYGON', 4283), required: true },
});
export default {suburb, careLocation, careType};