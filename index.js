var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_styles = function(hook_name, context, cb){
  context.content += '<link href="../static/plugins/ep_sync_status/static/css/editbar.css" rel="stylesheet">';
  cb();
}

exports.eejsBlock_editbarMenuLeft = function (hook_name, context, cb) {
  context.content += eejs.require('ep_sync_status/templates/syncStatus.ejs');
  cb();
};
