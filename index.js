exports.eejsBlock_styles = function(hook_name, context, cb){
   context.content += '<style type="text/css">'
    + '.toolbar ul li.syncstatus:not(.separator) {'
    + '  display: none;'
    + '  line-height: 32px;'
    + '  font-size: 14pt;'
    + '  color: #666;'
    + '}'
    + '</style>';
  cb();
}

exports.eejsBlock_editbarMenuLeft = function (hook_name, context, cb) {
  context.content
    += '<li class="syncstatus separator acl-write"></li>'
    +  '<li class="syncstatus" id="syncstatussyncing" data-l10n-id="ep_sync_status.saving">Saving...</li>'
    +  '<li class="syncstatus" id="syncstatusdone"    data-l10n-id="ep_sync_status.saved">Saved.</li>';
  cb();
};
