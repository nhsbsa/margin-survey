// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

//v3//
router.post(/deletedrug/, function (req, res) {

    const deletedrug = req.session.data['deletedrug']
  
    if (deletedrug === "yes") {
      res.redirect('drug-input');
    } else {
      res.redirect('drug-input-continue');
    }
  });

  router.post(/checkremove/, function (req, res) {

    const checkremove = req.session.data['checkremove']
  
    if (checkremove === "yes") {
      res.redirect('drug-input-continue-2');
    } else {
      res.redirect('drug-input-continue');
    }
  });

  router.post(/seconddel/, function (req, res) {

    const seconddel = req.session.data['seconddel']
  
    if (seconddel === "yes") {
      res.redirect('drug-input-continue');
    } else {
      res.redirect('drug-input-continue-2');
    }
  });


    router.post(/completeaccount/, function (req, res) {

    const completeaccount = req.session.data['completeaccount']
  
    if (completeaccount === "yes") {
      res.redirect('confirmation');
    } else {
      res.redirect('continue');
    }
  });


   router.post(/updateremove/, function (req, res) {

    const updateremove = req.session.data['updateremove']
  
    if (updateremove === "yes") {
      res.redirect('drug-input-deleted');
    } else {
      res.redirect('drug-input-continue');
    }
  });

   router.post(/areyousure/, function (req, res) {

    const areyousure = req.session.data['areyousure']
  
    if (areyousure === "yes") {
      res.redirect('drug-input-deleted');
    } else {
      res.redirect('drug-input-continue');
    }
  });

  //v6//

  router.post(/finalsample/, function (req, res) {

    const finalsample = req.session.data['finalsample']
  
    if (finalsample === "yes") {
      res.redirect('confirmation');
    } else {
      res.redirect('25-generate-sample');
    }
  });

  router.post(/removeaaapharmacy/, function (req, res) {

    const removeaaapharmacy = req.session.data['removeaaapharmacy']
  
    if (removeaaapharmacy === "yes") {
      res.redirect('pharmacy-list-whole-confirm-remove');
    } else {
      res.redirect('pharmacy-list-whole');
    }
  });

  