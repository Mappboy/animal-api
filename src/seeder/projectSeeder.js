import { sync, build } from '../models/admin';
import Role from '../models/role';
import User from '../models/user';
import { careLocation, Suburb, careType } from '../models/suburb';
import Admin from '../models/admin';
import { database } from '../config/main';

sequelize = new Sequelize(...database, {
    // gimme postgres, please!
    dialect: 'postgres'
  })

Role.sync()
User.sync()
careLocation.sync()
Suburb.sync()
careType.sync()
const admin_role = Role.build({
    type: "admin"
});

careType.bulkCreate([
 {name: 'vet' },
 {name: 'bonorong' },
 {name: 'carer' },
 {name: 'transport' },
]);

const admin = Admin.build({
    name:"admin",
    email:"cameron.j.poole@gmail.com",
});
admin.password = admin.encryptPassword("bonorong1");
admin.setRole(admin_role);

// Todo add admin and user roles.
admin.save()
    .then(result => {
        console.log("seeded!");
        mongoose.disconnect();
    })
    .catch(e => {
        console.log(e);
        mongoose.disconnect();
    });