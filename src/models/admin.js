import { hashSync, genSaltSync, compareSync } from 'bcrypt-nodejs';
import sequelize, { STRING, UUIDV4 } from 'sequelize';
import Role from './role';

const admin = sequelize.define('admin',{
    email: { type: STRING, required: true, validate:{isEmail:true} },
    password: { type: STRING, defaultValue: '' },
    name: { type: STRING, required: true },
    image: { type: STRING, default: 'user.png' },
    uuid: { type: UUIDV4 },
    instanceMethods: {
        encryptPassword: () => {
            return hashSync(this.password, genSaltSync(5), null);
        },
        validPassword: (candidatePassword) => {
            return compareSync(candidatePassword, this.password );
        }
      }
});

admin.belongsTo(Role, {as:'role'});

// admin.pre('delete', function(next){
//     const Report = mongoose.model('report');
//     Report.delete({ user: this})
//         .then(() => {
//             Report.update({ "rescue.user": this  }, { "rescue.deleted": true, "rescue.deletedAt": new Date() })
//                 .then(() => next())
//                 .catch(err => console.log(err));
//         })
//         .catch(err => console.log(err));
// });

export default admin;