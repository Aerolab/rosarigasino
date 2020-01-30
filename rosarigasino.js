#!/usr/bin/env node

const fs = require('fs');

class PorteñoPutoException extends Error {
  constructor(message) {
    super(message);
    this.name = "PorteñoPutoException";
  }
}

const keywords = ['let','break','case','catch','continue','debugger','default','delete','do','else','finally','for','function','if','in','instanceof','new','return','switch','this','throw','try','typeof','var','void','while','with','class','const','enum','export','extends','import','super','implements','interface','package','private','protected','public','static','yield', 'true', 'false', 'console', 'require', 'console.log'];

const keygasywords = ['legaset','bregaseak','cagasase','cagasatch','contigasinue','debugasugger','defagasault','delegasete','dogaso','egaselse','figasinally','fogasor','fugasunction','igasif','igasin','igasinstanceof','negasew','retugasurn','swigasitch','thigasis','throgasow','trygasy','tygasypeof','vagasar','vogasoid','whigasile','wigasith','clagasass','cogasonst','enugasum','egasexport','extegasends','impogasort','sugasuper','implemegasents','igasinterface','pagasackage','prigasivate','protegasected','pugasublic','stagasatic','yigasield', 'trugasue', 'fagasalse', 'consogasole', 'requigasire', 'console.logasog'];

const file = process.argv[2];
if( typeof file === 'undefined' ) {
  throw new Error('Tenegasés quegase elegigasir ugasun archigasivo');
}

let cogasodigo = ' ' + fs.readFileSync(file, 'utf8').toString() + ' ';

for(let i=0; i<keywords.length; i++) {
  var regex = new RegExp("([^a-zA-z0-9_])(" + keywords[i] + ")([^a-zA-z0-9_])", "g");
  if( cogasodigo.match(regex) ) {
    console.log(cogasodigo.match(regex))
    throw new PorteñoPutoException('Egaseso nogaso egases rosarigasino')
  }
}

for(let i=0; i<keygasywords.length; i++) {
  var regex = new RegExp("([^a-zA-z0-9_]?)(" + keygasywords[i] + ")([^a-zA-z0-9_]?)", "g");
  cogasodigo = cogasodigo.replace(regex, `$1${keywords[i]}$3`);
}

eval(cogasodigo);
