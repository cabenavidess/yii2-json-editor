dataJsonEditor_729ee6af = new JSONEditor(document.getElementById('data-json-editor'), {"modes":["code","form","text","tree","view"],"mode":"view","onChange":function() {jQuery('#data').val(dataJsonEditor_729ee6af.getText()); var userFunction = function () {console.log(this);}; userFunction.call(this);},"onError":function (error) {console.log(error);},"onModeChange":function(newMode, oldMode) {if (["view"].indexOf(newMode) != -1) {dataJsonEditor_729ee6af.collapseAll();} if (["tree","form"].indexOf(newMode) != -1) {dataJsonEditor_729ee6af.expandAll();} var userFunction = function (nMode, oMode) {console.log(this, nMode, oMode);}; userFunction.call(this, newMode, oldMode);}}, {});
jQuery('#data').parents('form').submit(function() {jQuery('#data').val(dataJsonEditor_729ee6af.getText());});
dataJsonEditor_729ee6af.collapseAll();