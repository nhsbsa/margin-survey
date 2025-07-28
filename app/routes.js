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

  router.post(/MayFinal/, function (req, res) {

    const MayFinal = req.session.data['MayFinal']
  
    if (MayFinal === "yes") {
      res.redirect('confirmation-may');
    } else {
      res.redirect('25-generate-sample-may');
    }

  });

   router.post(/supplierConfirmation/, function (req, res) {

    const supplierConfirmation = req.session.data['supplierConfirmation']

    if (supplierConfirmation === "yes") {
      res.redirect('continue');
    } else {
      res.redirect('drug-input');
    }
  });

router.post(/suppliergone/, function (req, res) {

    const suppliergone = req.session.data['suppliergone']
  
    if (suppliergone === "yes") {
      res.redirect('confirmation-remove');
    } else {
      res.redirect('supplier-list');
    }
  });

  router.post(/manufacturergone/, function (req, res) {

    const manufacturergone = req.session.data['manufacturergone']
  
    if (manufacturergone === "yes") {
      res.redirect('confirmation-remove');
    } else {
      res.redirect('manufacturer-list');
    }
  });

  
     router.post(/Confirmsupplier/, function (req, res) {

    const Confirmsupplier = req.session.data['Confirmsupplier']

    if (Confirmsupplier === "yes") {
      res.redirect('continue-complete');
    } else {
      res.redirect('drug-input');
    }
  });
  

    router.post(/Confirmblanksupplier/, function (req, res) {

    const Confirmblanksupplier = req.session.data['Confirmblanksupplier']

    if (Confirmblanksupplier === "yes") {
      res.redirect('continue-complete');
    } else {
      res.redirect('supplier-input');
    }
  });

 
   router.post(/reopenaccount/, function (req, res) {

    const reopenaccount = req.session.data['reopenaccount']
  
    if (reopenaccount === "yes") {
      res.redirect('confirmation-reopen');
    } else {
      res.redirect('completed');
    }
  });

  
     router.post(/manualleave/, function (req, res) {

    const manualleave = req.session.data['manualleave']

    if (manualleave === "yes") {
      res.redirect('continue-complete-manual-add');
    } else {
      res.redirect('drug-input');
    }
  });