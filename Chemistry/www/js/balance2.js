var myApp = new Framework7();

var $$ = Dom7;

function ale(){
  globalrandom=parseInt((Math.random() * (9+1)),10)
  return(globalrandom);
}
var globalrandom;
var equ = [
   {e1:'C2H6',e2:'O2',e3:'H2O',e4:'CO2',r1:'2',r2:'7',r3:'6',r4:'4'},
   {e1:'SnO2',e2:'H2',e3:'Sn',e4:'H2O',r1:'1',r2:'2',r3:'1',r4:'2'},
   {e1:'NH3',e2:'O2',e3:'NO',e4:'H2O',r1:'4',r2:'5',r3:'4',r4:'6'},
   {e1:'SeCl6',e2:'O2',e3:'SeO2',e4:'Cl2',r1:'1',r2:'1',r3:'1',r4:'3'},
   {e1:'CH4',e2:'O2',e3:'CO2',e4:'H2O',r1:'1',r2:'2',r3:'1',r4:'2'},
   {e1:'Al',e2:'HCl',e3:'AlCl3',e4:'H2',r1:'2',r2:'6',r3:'2',r4:'3'},
   {e1:'H3PO4',e2:'HCl',e3:'PCl5',e4:'H2O',r1:'1',r2:'5',r3:'1',r4:'4'},
   {e1:'As',e2:'NaOH',e3:'Na3AsO3',e4:'H2',r1:'2',r2:'6',r3:'2',r4:'3'},
   {e1:'Au2S3',e2:'H2',e3:'Au',e4:'H2S',r1:'1',r2:'3',r3:'2',r4:'3'},
   {e1:'Zn',e2:'HCl',e3:'ZnCl2',e4:'H2',r1:'1',r2:'2',r3:'1',r4:'1'}
];

function exeq(){
  var indexeq=ale();
  var text=equ[indexeq].r1+""+equ[indexeq].e1+" + "+equ[indexeq].r2+""+equ[indexeq].e2+" = "+equ[indexeq].r3+""+equ[indexeq].e3+" + "+equ[indexeq].r4+""+equ[indexeq].e4;
  var tx=equ[indexeq].e1+" + "+equ[indexeq].e2+" = "+equ[indexeq].e3+" + "+equ[indexeq].e4;
  //balance(tx);
  subs(tx);
}

function subs(ssub){
  var nsub;
  nsub = ssub.replace(/(\d+)/g, '<sub>$1</sub>');
	var messageElem = document.getElementById("message").innerHTML=nsub;
}

function ptf(){
  var indexeq=ale();
  document.getElementById("ee1").innerHTML=equ[indexeq].e1.replace(/(\d+)/g, '<sub>$1</sub>');
  document.getElementById("ee2").innerHTML=equ[indexeq].e2.replace(/(\d+)/g, '<sub>$1</sub>');
  document.getElementById("ee3").innerHTML=equ[indexeq].e3.replace(/(\d+)/g, '<sub>$1</sub>');
  document.getElementById("ee4").innerHTML=equ[indexeq].e4.replace(/(\d+)/g, '<sub>$1</sub>');
  limeq();
}

function blminus(atid){
  var vat = document.getElementById(atid).innerText;
  if(vat>1){
    document.getElementById(atid).innerHTML=(parseInt(vat)-1);
  }
}

function blplus(atid){
  var vat = document.getElementById(atid).innerText;
    document.getElementById(atid).innerHTML=(parseInt(vat)+1);
}

function checar(){
  var tx=document.getElementById("rr1").innerText+""+document.getElementById("ee1").innerText+" + "+document.getElementById("rr2").innerText+""+document.getElementById("ee2").innerText+" = "+document.getElementById("rr3").innerText+""+document.getElementById("ee3").innerText+" + "+document.getElementById("rr4").innerText+""+document.getElementById("ee4").innerText;
  tx = tx.replace('<sub>',"");
  tx = tx.replace('</sub>',"");
  tx = tx.replace('1',"");
  alert(tx);
  testeresposta(String(tx));
}

function checarv2(){
  var rt1=parseInt(document.getElementById("rr1").innerText);
  var rt2=parseInt(document.getElementById("rr2").innerText);
  var rt3=parseInt(document.getElementById("rr3").innerText);
  var rt4=parseInt(document.getElementById("rr4").innerText);
  if(equ[globalrandom].r1==rt1&&equ[globalrandom].r2==rt2&&equ[globalrandom].r3==rt3&&equ[globalrandom].r4==rt4){
    //alert("resposta correta");
    return 1;
  }else if ((rt1%equ[globalrandom].r1)==0&&(rt2%equ[globalrandom].r2)==0&&(rt3%equ[globalrandom].r3)==0&&(rt4%equ[globalrandom].r4)==0) {
    //alert("Multiplo do correto");
    return 2;
  }else{
    //alert("resposta incorreta");
    return 0;
  }
}

function checarv3(){
  abrmodal(checarv2());
}

function abrmodal(opc){
  if(opc==0){
    myApp.alert('Resposta incorreta!','');
  }else if (opc==1) {
    myApp.alert('Resposta correta!','');
    ptf();
  }else if (opc==2) {
    myApp.alert('Multiplo da resposta correta!','');
  }
}
function limeq(){
  document.getElementById("rr1").innerHTML=1;
  document.getElementById("rr2").innerHTML=1;
  document.getElementById("rr3").innerHTML=1;
  document.getElementById("rr4").innerHTML=1;
}

function finbaleq(){
  document.getElementById("rr1").innerHTML="";
  document.getElementById("rr2").innerHTML="";
  document.getElementById("rr3").innerHTML="";
  document.getElementById("rr4").innerHTML="";
  document.getElementById("ee1").innerHTML="";
  document.getElementById("ee2").innerHTML="";
  document.getElementById("ee3").innerHTML="";
  document.getElementById("ee4").innerHTML="";
}

$$(document).on('pageInit', '.page[data-page="balance"]', function (e) {
  ptf();
})
