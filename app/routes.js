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
     } else if (updateremove === "no") {
      res.redirect('drug-input-continue');
    } else if (updateremove === "maybe") {
      res.redirect('delete-all-drugs');
    }
  });

   router.post(/areyousure/, function (req, res) {

    const areyousure = req.session.data['areyousure']
  
    if (areyousure === "yes") {
      res.redirect('drug-input-deleted');
    } else if (areyousure === "no") {
      res.redirect('drug-input-continue');
    } else if (areyousure === "maybe") {
      res.redirect('delete-all-drugs');
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
  

    router.post(/Supplierconfirmblank/, function (req, res) {

    const Supplierconfirmblank = req.session.data['Supplierconfirmblank']

    if (Supplierconfirmblank === "yes") {
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


       router.post(/manualLeave/, function (req, res) {

    const manualLeave = req.session.data['manualLeave']

    if (manualLeave === "yes") {
      res.redirect('continue-complete-manual-add');
    } else {
      res.redirect('drug-input');
    }
  });



    router.post(/confirmleave/, function (req, res) {

    const confirmleave = req.session.data['confirmleave']

    if (confirmleave === "yes") {
      res.redirect('continue-2');
    } else {
      res.redirect('drug-input-continue');
    }
  });

    
  
   router.post(/overwritemonth/, function (req, res) {

    const overwritemonth = req.session.data['overwritemonth']

    if (overwritemonth === "yes") {
      res.redirect('upload-confirmation-overwrite');
    } else {
      res.redirect('upload-list');
    }
  });

  
   router.post(/supplierdelete/, function (req, res) {

    const supplierdelete = req.session.data['supplierdelete']

    if (supplierdelete === "yes") {
      res.redirect('confirmation-supplier-del');
    } else {
      res.redirect('supplier-input-continue');
    }
  });

  
    router.post(/drugmanual/, function (req, res) {

    const drugmanual = req.session.data['drugmanual']

    if (drugmanual === "yes") {
      res.redirect('continue-complete');
    } else {
      res.redirect('drug-input-manual');
    }
  });

   router.post(/deletealldrugs/, function (req, res) {

    const deletealldrugs = req.session.data['deletealldrugs']

    if (deletealldrugs === "yes") {
      res.redirect('confirmation-all-drugs');
    } else {
      res.redirect('drug-input-continue');
    }
  });

  router.post(/ConfirmInvoice/, function (req, res) {

    const ConfirmInvoice = req.session.data['ConfirmInvoice']

    if (ConfirmInvoice === "yes") {
      res.redirect('drug-image-1-confirmation');
    } else {
      res.redirect('drug-image-1');
    }
  });

  router.post(/supplierDelete/, function (req, res) {

    const supplierDelete = req.session.data['supplierDelete']

    if (supplierDelete === "yes") {
      res.redirect('supplier-confirmation-delete');
    } else {
      res.redirect('supplier-input-continue');
    }
  });
