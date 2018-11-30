import { hashSync, genSaltSync, compareSync } from 'bcrypt-nodejs';
import sequelize, { STRING, UUIDV4 } from 'sequelize';
import Role from './role';

const User = sequelize.define('user',{
    email: { type: STRING, required: true, validate:{isEmail:true} },
    password: { type: STRING, defaultValue: '' },
    name: { type: STRING, required: true },
    image: { type: STRING, default: 'User.png' },
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

User.belongsTo(Role, {as:'role'});

// User.pre('delete', function(next){
//     const Report = mongoose.model('report');
//     Report.delete({ User: this})
//         .then(() => {
//             Report.update({ "rescue.User": this  }, { "rescue.deleted": true, "rescue.deletedAt": new Date() })
//                 .then(() => next())
//                 .catch(err => console.log(err));
//         })
//         .catch(err => console.log(err));
// });

export default User;