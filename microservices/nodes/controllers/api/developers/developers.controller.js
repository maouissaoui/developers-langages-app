const developersRepo = require('../../../lib/developersRepository'),
      statesRepo = require('../../../lib/statesRepository'),
      util = require('util');

class DevelopersController {

    constructor(router) {
        router.get('/', this.getDevelopers.bind(this));
        //router.get('/page/:skip/:top', this.getDevelopersPage.bind(this));
        router.get('/:id', this.getDeveloper.bind(this));
        router.post('/', this.insertDeveloper.bind(this));
        router.put('/:id', this.updateDeveloper.bind(this));
        router.delete('/:id', this.deleteDeveloper.bind(this));
    }

    getDevelopers(req, res) {
        console.log('*** getDevelopers');
        developersRepo.getDevelopers((err, data) => {
            if (err) {
                console.log('*** getDevelopers error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getDevelopers ok');
                res.json(data.developers);
            }
        });
    }

    getDeveloper  (req, res) {
        console.log('*** developer');
        const id = req.params.id;
        console.log(id);

        developersRepo.getDeveloper(id, (err, developer) => {
            if (err) {
                console.log('*** developer err'+ util.inspect(err));
                res.json(null);
            } else {
                console.log('*** developer ok');
                res.json(developer);
            }
        });
    }

    insertDeveloper(req, res) {
        console.log('*** insertDeveloper');
        statesRepo.getState(req.body.stateId, (err, state) => {
            if (err) {
                console.log('*** statesRepo.getState error: ' + util.inspect(err));
                res.json({ status: false, error: 'State not found', developer: null });
            } else {
                developersRepo.insertDeveloper(req.body, state, (err, customer) => {
                    if (err) {
                        console.log('*** developersRepo.insertDeveloper error: ' + util.inspect(err));
                        res.json({status: false, error: 'Insert failed', customer: null});
                    } else {
                        console.log('*** insertDeveloper ok');
                        res.json({ status: true, error: null, customer: customer });
                    }
                });
            }
        });
    }

    updateDeveloper (req, res) {
        console.log('*** updateDeveloper');
        console.log('*** req.body');
        console.log(req.body);

        if (!req.body || !req.body.stateId) {
            throw new Error('Developer and associated stateId required');
        }

        statesRepo.getState(req.body.stateId,  (err, state)=> {
            if (err) {
                console.log('*** statesRepo.getState error: ' + util.inspect(err));
                res.json({ status: false, error: 'State not found', developer: null });
            } else {
                developersRepo.updateDeveloper(req.params.id, req.body, state,  (err, developer)=>  {
                    if (err) {
                        console.log('*** editDeveloper err' + util.inspect(err));
                        res.json({ 'status': false , error: 'Update failed', developer: null });
                    } else {
                        console.log('*** editDeveloper ok');
                        res.json({ 'status': true , error: null, developer: developer });
                    }
                });
            }
        });
    }

deleteDeveloper(req, res) {
    console.log('*** deleteDeveloper');

    developersRepo.deleteDeveloper(req.params.id, (err) => {
        if (err) {
            console.log('*** deleteDeveloper err' + util.inspect(err));
            res.json({ 'status': false });
        } else {
            console.log('*** deleteDeveloper ok');
            res.json({ 'status': true });
        }
    });
}






// exports.checkUnique = function (req, res) {
//     console.log('*** checkUnique');

//     var id = req.params.id,
//     	value = req.query.value,
//     	property = req.query.property;

//     db.checkUnique(id, property, value, function (err, opStatus) {
//         if (err) {
//             console.log('*** checkUnique err');
//             res.json({
//                 'status': false
//             });
//         } else {
//             console.log('*** checkUnique ok');
//             res.json(opStatus);
//         }
//     });
}

module.exports =  DevelopersController;
