var $ = require('ep_etherpad-lite/static/js/rjquery').$;

exports.postToolbarInit = function(hook, context) {
  // sync status menu items might had been added before items of other plugins were added
  // to the menu left, so make sure they are on the right of all items to avoid moving
  // buttons around every time the status changes
  makeSyncStatusTheLastItemsOfMenuLeft();
}

var makeSyncStatusTheLastItemsOfMenuLeft = function() {
  var $syncStatusMenuItems = $('.syncstatus');
  var $lastItemOnMenuLeft = $syncStatusMenuItems.siblings().last();

  $syncStatusMenuItems.insertAfter($lastItemOnMenuLeft);
}
