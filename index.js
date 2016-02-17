exports.eejsBlock_styles = function(hook_name, context, cb){
   context.content += '<style type="text/css">'
    + '.toolbar ul li.syncstatus {'
    + '  display: none;'
    + '  line-height: 32px;'
    + '  margin-left: 10px;'
    + '  font-size: 14pt;'
    + '  color: #666;'
    + '}'
    + "</style>";
  cb();
}

exports.eejsBlock_editbarMenuLeft = function (hook_name, context, cb) {
  context.content
    += '<li class="syncstatus" id="syncstatussyncing">Saving...</li>'
    + '<li class="syncstatus" id="syncstatusdone">Saved.</li>';
  cb();
};
