
import sequelize, { STRING } from 'sequelize';

const Role = sequelize.define('role',{
    type: { type: STRING, required: true },
});

export default Role;