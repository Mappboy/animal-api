import bcrypt from 'bcrypt-nodejs';
import User from './user';
import sequelize, { STRING, BOOLEAN, TEXT } from 'sequelize';
import { careLocation, suburb } from './suburb';


const RescueType = sequelize.define('rescue_type', {
    rescue_type: {type: STRING}
}
);

const InjuryType = sequelize.define('injury_type', {
    injury_type: {type: STRING}
}
);

const AnimalSize = sequelize.define('animal_size', {
    size: {type: STRING}
}
);

const Rescue = sequelize.define('rescue_', {
    image: { type: STRING, required: true },
    description: { type: STRING, required: true },
    isInjured: { type: BOOLEAN },
    isJoey: { type: BOOLEAN },
    isContained: { type: BOOLEAN },
    isSplitTrip: { type: BOOLEAN },
    injuryDescription: { type: TEXT },
    locationDetails: { type: TEXT },
    otherDetails: { type: TEXT },
    deleted: { type: BOOLEAN, default: false },
});

Rescue.hasOne(RescueType, {as:'rescue_type'})
Rescue.hasOne(InjuryType, {as:'injury_type'})
Rescue.hasOne(AnimalSize, {as:'animal_size'})
Rescue.hasOne(careLocation, {as:'care_location'})
Rescue.hasOne(suburb, {as:'animal_location'})
Rescue.hasOne(User, {as:'submitted_by'})
Rescue.hasOne(User, {as:'attendeding'})

export default {Rescue, AnimalSize, InjuryType, RescueType};