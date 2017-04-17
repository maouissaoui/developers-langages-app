// Module dependencies
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Developer = require('../models/developer');
    


class DevelopersRepository {
     


    // get all the Developers
    getDevelopers ( callback) {
        console.log('*** DevelopersRepository.getDevelopers');
        Developer.count(function (err, devsCount) {
            var count = devsCount;
            console.log(`Developers count: ${count}`);

            Developer.find({}, (err, developers) => {
                if (err) { 
                    console.log(`*** DevelopersRepository.getDevelopers error: ${err}`); 
                    return callback(err); 
                }
                callback(null, {
                    count: count,
                    developers: developers
                });
            });

        });
    }

    // get a  developer
    getDeveloper(id, callback) {
        console.log('*** DevelopersRepository.getDeveloper');
        Developer.findById(id, (err, customer) => {
            if (err) { 
                console.log(`*** DevelopersRepository.getDeveloper error: ${err}`); 
                return callback(err); 
            }
            callback(null, developer);
        });
    }


    // insert a developer
    insertDeveloper (req_body, state, callback) {
        console.log('*** DevelopersRepository.insertDeveloper');
        console.log(state);

        var developer = new Developer();
        var s = { 'id': state[0].id, 'abbreviation': state[0].abbreviation, 'name': state[0].name }
        console.log(req_body);

        developer.firstName = req_body.firstName;
        developer.lastName = req_body.lastName;
        developer.email = req_body.email;
        developer.state = s;
        developer.stateId = state[0].id;
        developer.id = 1; // The id is calculated by the Mongoose pre 'save'.

        developer.save(function (err, developer) {
            if (err) { console.log('*** new developer save err: ' + err); return callback(err); }
            callback(null, developer);
        });
    }


    updateDeveloper (id, req_body, state, callback) {
        console.log('*** DevelopersRepository.editDeveloper');


        var s = { 'id': state[0].id, 'abbreviation': state[0].abbreviation, 'name': state[0].name }


        Developer.findById(id, (err, customer)  => {
            if (err) { 
                console.log(`*** DevelopersRepository.updateDeveloper error: ${err}`); 
                return callback(err); 
            }

            developer.firstName = req_body.firstName;
            developer.lastName = req_body.lastName;
            developer.email = req_body.email;
            developer.state = s;
            developer.stateId = s.id;

            developer.save(function (err) {
              if (err) { 
                    console.log(`*** DevelopersRepository.updateDeveloper error: ${err}`); 
                    return callback(err, null); 
                }

                callback(null, developer);
            });


        });
    }

    // delete a Developer
    deleteDeveloper(id, callback) {
        console.log('*** DevelopersRepository.deleteDeveloper');
        Developer.remove({ '_id': id }, (err, customer) => {
            if (err) { 
                console.log(`*** DevelopersRepository.deleteDeveloper error: ${err}`); 
                return callback(err, null); 
            }
            callback(null, customer);
        });
    }

    // get a  developer's email
    checkUnique (id, property, value, callback) {
        console.log('*** DevelopersRepository.checkUnique');
        console.log(id + ' ' + value)
        switch (property) {
            case 'email':
                Developer.findOne({ 'email': value, 'id': { $ne: id } })
                    .select('email')
                    .exec(function (err, developer) {
                        console.log(developer)
                        var status = (developer) ? false : true;
                        callback(null, { status: status });
                    });
                break;
        }
    }

}
module.exports = new DevelopersRepository();