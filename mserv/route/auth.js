// http://cloud.google.com/datastore/docs/datastore-api-tutorial
// http://cloud.google.com/datastore/docs/concepts/entities
// http://cloud.google.com/datastore/docs/concepts/queries
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwts = require("jsonwebtoken");
const SIK = 'company_secret_code'; // secret ** change it **
////////////////////////////////
//sign up
function insertUser(userEmail, password) {
    console.log('insert', userEmail);
}
function requestCodeValidation(userEmail) {
    console.log('code', userEmail);
}
function checkCodeValidation(userEmail, code) {
    console.log('check', userEmail);
}
function checkPassword(userEmail, password) {
    console.log('pswd', userEmail);
    const promise = new Promise(function (resolve, reject) {
        //ds call
        if ('123' == password) {
            resolve(true);
        }
        else {
            resolve(false);
        }
    }); //pro
    return promise;
}
//request password change section Page: 1. requestCodeValidation, 2. updatePasswordCodeValidation
function updatePasswordCodeValidation(userEmail, code, newPassword) {
}
// admin/maint section:
function listUsers() {
}
function userDetails(pk) {
}
function updateUser(pk) {
}
// auth section ////////////////////////////
function authUser(userEmail, password) {
    const dsCheck = checkPassword(userEmail, password); // data service call
    const promise = new Promise(function (resolve, reject) {
        //ds call
        dsCheck.then(function (dsCheckOK) {
            if (dsCheckOK) {
                let auth = {
                    userEmail: userEmail,
                    foo: 'bar'
                };
                const token = jwts.sign(auth, SIK);
                resolve(token);
            }
            else {
                reject('bad username|password');
            }
        }); //dsCheck
    }); //pro
    return promise;
} //()
exports.authUser = authUser;
function authToken(token) {
    const promise = new Promise(function (resolve, reject) {
        jwts.verify(token, SIK, function (err, decoded) {
            if (err)
                reject('bad token');
            else {
                let auth = {
                    foo: 'bar'
                };
                const token = jwts.sign(auth, SIK);
                resolve(token);
            }
        }); //verify()
    }); //pro
    return promise;
} //()
exports.authToken = authToken;
// tst //////////////////////
/*
const tp0 = authUser('x','1234')
tp0.then(function(tok){
    console.log(0)
    console.log(tok)
}).catch(function(err){
    console.log(0)
    console.log(err)
})

if(true) return
let auth = {
    foo: 'bar'
}
const token1 = jwts.sign(auth,SIK)
const tokenB = 'bad'
const tp1 = authToken(tokenB)
tp1.then(function(tok){
    console.log(1)
    console.log(tok)
}).catch(function(err){
    console.log(1)
    console.log(err)
})
*/ 
//# sourceMappingURL=auth.js.map