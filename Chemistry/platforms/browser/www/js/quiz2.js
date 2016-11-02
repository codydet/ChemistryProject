var myApp = new Framework7();

var $$ = Dom7;

function qui1que1 () {
  var popupHTML = '<div class="popup">'+
                    '<div class="content-block">'+
                      '<select id=1 name="q1" onchange="altq(this)">'+
                        '<option name="n1" value="n1">Numero 1</option>'+
                        '<option name="n2" value="n2">Numero 2</option>'+
                        '<option name="n3" value="n3">Numero 3</option>'+
                        '<option name="n4" value="n4">Numero 4</option>'+
                      '</select>'+
                    '</div>'+
                  '</div>'
  myApp.popup(popupHTML);
}
