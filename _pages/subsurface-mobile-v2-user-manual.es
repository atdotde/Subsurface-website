---
ID: 3787
post_title: >
  Manual de usuario de Subsurface-mobile
  2.0
author: hohndel
post_excerpt: ""
layout: page
permalink: >
  https://subsurface-divelog.org/es/documentation/manual-de-usuario-de-subsurface-mobile-2-0/
published: true
post_date: 2017-10-24 11:36:43
post_language: e
---
<style type="text/css">
/*
 * compact_subsurface.css, a special style sheet for Subsurface,
 * modified by Willem Ferguson and derived from:
 *		compact.css, version 1.3 by Alex Efros <powerman@powerman.name>
 * Licence: Public Domain
 *
 * Usage: asciidoc -a theme=compact_subsurface ...
 */

*  { padding: 0; margin: 0; }
img { border: 0; }

/*** Layout ***/

body            { margin: 10px 20px; }
#header br         { display: none; }
#revnumber         { display: block; }
#toc            { margin: 1em 0; }
.toclevel2         { margin-left: 1em; }
.toclevel3		  { margin-left: 2em; }
#footer           { margin-top: 2em; }

#preamble .sectionbody,
h2,
h3,
h4,
h5             { margin: 1em 0 0 0; }

.admonitionblock,
.listingblock,
.sidebarblock,
.exampleblock,
.tableblock,
.literalblock        { margin: 1em 0; }
.admonitionblock td.icon  { padding-right: 0.5em; }
.admonitionblock td.content { padding-left: 0.5em; }
.listingblock .content   { padding: 0.5em; }
.sidebarblock > .content  { padding: 0.5em; }
.exampleblock > .content  { padding: 0 0.5em; }
.tableblock caption     { padding: 0 0 0.5em 0; }
.tableblock thead th,
.tableblock tbody td,
.tableblock tfoot td    { padding: 0 0.5em; }
.quoteblock         { padding: 0 2.0em; }

.paragraph         { margin: 1em 0 0 0; }
.sidebarblock .paragraph:first-child,
.exampleblock .paragraph:first-child,
.admonitionblock .paragraph:first-child { margin: 0; }

  .ulist,  .olist,  .dlist,  .hdlist,  .qlist  { margin: 1em 0; }
li .ulist, li .olist, li .dlist, li .hdlist, li .qlist,
dd .ulist, dd .olist, dd .dlist, dd .hdlist, dd .qlist  { margin: 0; }
ul             { margin-left: 1.5em; }
ol             { margin-left: 2em; }
dd             { margin-left: 3em; }
td.hdlist1         { padding-right: 1em; }

/*** Fonts ***/

body            { font-family: Verdana, sans-serif; }
#header           { font-family: Arial,  sans-serif; }
#header h1         { font-family: Arial,  sans-serif; }
#footer           { font-family: Georgia, serif;   }
#email           { font-size: 0.85em; }
#revnumber         { font-size: 0.75em; }
#toc            { font-size: 0.9em; }
#toctitle          { font-weight: bold; }
#footer           { font-size: 0.8em; }

h2, h3, h4, h5, .title   { font-family: Arial,  sans-serif; }
h2             { font-size: 1.5em; }
.sectionbody        { font-size: 0.85em; }
.sectionbody .sectionbody  { font-size: inherit; }
h3             { font-size: 159%; } /* 1.35em */
h4             { font-size: 141%; } /* 1.2em */
h5             { font-size: 118%; } /* 1em */
.title           { font-size: 106%;  /* 0.9em */
			   font-weight: bold;
			  }

tt, .monospaced       { font-family: monospace; font-size: 106%; } /* 0.9em */
dt, td.hdlist1, .qlist em  { font-family: Times New Roman, serif;
			   font-size: 118%;  /* 1em */
			   font-style: italic;
			  }
.tableblock tfoot td    { font-weight: bold; }

/*** Colors and Backgrounds ***/

h1             { color: #527bbd; border-bottom: 2px solid silver; }
#footer           {         border-top:  2px solid silver; }

h2             { color: #527bbd; border-bottom: 2px solid silver; }
h3             { color: #5D7EAE; border-bottom: 2px solid silver; }
h3             { display: inline-block; }
h4,h5            { color: #5D7EAE; }

.admonitionblock td.content { border-left: 2px solid silver; }
.listingblock .content   { background: #f4f4f4;  border: 1px solid silver; border-left: 5px solid #e0e0e0; }
.sidebarblock > .content  { background: #ffffee;  border: 1px solid silver; border-left: 5px solid #e0e0e0; }
.exampleblock > .content  {          border-left: 2px solid silver; }
.quoteblock         {          border-left: 5px solid #e0e0e0; }
.tableblock table {
  border-collapse: collapse;
  border-width: 3px;
  border-color: #527bbd;
}
.tableblock table[frame=hsides] { border-style: solid none; }
.tableblock table[frame=border] { border-style: solid;   }
.tableblock table[frame=void]  { border-style: none;    }
.tableblock table[frame=vsides] { border-style: none solid; }
.tableblock table[rules=all] tbody tr *,
.tableblock table[rules=rows] tbody tr * {
  border-top: 1px solid #527bbd;
}
.tableblock table[rules=all] tr *,
.tableblock table[rules=cols] tr * {
  border-left: 1px solid #527bbd;
}
.tableblock table tbody tr:first-child * {
  border-top: 1px solid white; /* none don't work here... %-[] */
}
.tableblock table tr *:first-child {
  border-left: none;
}
.tableblock table[frame] thead tr *,
.tableblock table[frame] thead tr * {
  border-top: 1px solid white;
  border-bottom: 2px solid #527bbd;
}
.tableblock table tr td p.table,
.tableblock table tr td p.table * {
  border: 0px;
}

tt, .monospaced       { color: navy; }

li             { color: #a0a0a0; }
li > *           { color: black; }

span.aqua { color: aqua; }
span.black { color: black; }
span.blue { color: blue; }
span.fuchsia { color: fuchsia; }
span.gray { color: gray; }
span.green { color: green; }
span.lime { color: lime; }
span.maroon { color: maroon; }
span.navy { color: navy; }
span.olive { color: olive; }
span.purple { color: purple; }
span.red { color: red; }
span.silver { color: silver; }
span.teal { color: teal; }
span.white { color: white; }
span.yellow { color: yellow; }

span.aqua-background { background: aqua; }
span.black-background { background: black; }
span.blue-background { background: blue; }
span.fuchsia-background { background: fuchsia; }
span.gray-background { background: gray; }
span.green-background { background: green; }
span.lime-background { background: lime; }
span.maroon-background { background: maroon; }
span.navy-background { background: navy; }
span.olive-background { background: olive; }
span.purple-background { background: purple; }
span.red-background { background: red; }
span.silver-background { background: silver; }
span.teal-background { background: teal; }
span.white-background { background: white; }
span.yellow-background { background: yellow; }

span.big { font-size: 2em; }
span.small { font-size: 0.6em; }

span.underline { text-decoration: underline; }
span.overline { text-decoration: overline; }
span.line-through { text-decoration: line-through; }

/*** Misc ***/

.admonitionblock td.icon  { vertical-align: top; }
.attribution        { text-align: right; }

ul             { list-style-type: disc; }
ol.arabic          { list-style-type: decimal; }
ol.loweralpha        { list-style-type: lower-alpha; }
ol.upperalpha        { list-style-type: upper-alpha; }
ol.lowerroman        { list-style-type: lower-roman; }
ol.upperroman        { list-style-type: upper-roman; }
.hdlist td         { vertical-align: top; }


</style>
<script type="text/javascript">
/*<![CDATA[*/
var asciidoc = { // Namespace.

/////////////////////////////////////////////////////////////////////
// Table Of Contents generator
/////////////////////////////////////////////////////////////////////

/* Author: Mihai Bazon, September 2002
 * http://students.infoiasi.ro/~mishoo
 *
 * Table Of Content generator
 * Version: 0.4
 *
 * Feel free to use this script under the terms of the GNU General Public
 * License, as long as you do not remove or alter this notice.
 */

 /* modified by Troy D. Hanson, September 2006. License: GPL */
 /* modified by Stuart Rackham, 2006, 2009. License: GPL */

// toclevels = 1..4.
toc: function (toclevels) {

 function getText(el) {
  var text = "";
  for (var i = el.firstChild; i != null; i = i.nextSibling) {
   if (i.nodeType == 3 /* Node.TEXT_NODE */) // IE doesn't speak constants.
    text += i.data;
   else if (i.firstChild != null)
    text += getText(i);
  }
  return text;
 }

 function TocEntry(el, text, toclevel) {
  this.element = el;
  this.text = text;
  this.toclevel = toclevel;
 }

 function tocEntries(el, toclevels) {
  var result = new Array;
  var re = new RegExp('[hH]([1-'+(toclevels+1)+'])');
  // Function that scans the DOM tree for header elements (the DOM2
  // nodeIterator API would be a better technique but not supported by all
  // browsers).
  var iterate = function (el) {
   for (var i = el.firstChild; i != null; i = i.nextSibling) {
    if (i.nodeType == 1 /* Node.ELEMENT_NODE */) {
     var mo = re.exec(i.tagName);
     if (mo && (i.getAttribute("class") || i.getAttribute("className")) != "float") {
      result[result.length] = new TocEntry(i, getText(i), mo[1]-1);
     }
     iterate(i);
    }
   }
  }
  iterate(el);
  return result;
 }

 var toc = document.getElementById("toc");
 if (!toc) {
  return;
 }

 // Delete existing TOC entries in case we're reloading the TOC.
 var tocEntriesToRemove = [];
 var i;
 for (i = 0; i < toc.childNodes.length; i++) {
  var entry = toc.childNodes[i];
  if (entry.nodeName.toLowerCase() == 'div'
   && entry.getAttribute("class")
   && entry.getAttribute("class").match(/^toclevel/))
   tocEntriesToRemove.push(entry);
 }
 for (i = 0; i < tocEntriesToRemove.length; i++) {
  toc.removeChild(tocEntriesToRemove[i]);
 }

 // Rebuild TOC entries.
 var entries = tocEntries(document.getElementById("content"), toclevels);
 for (var i = 0; i < entries.length; ++i) {
  var entry = entries[i];
  if (entry.element.id == "")
   entry.element.id = "_toc_" + i;
  var a = document.createElement("a");
  a.href = "#" + entry.element.id;
  a.appendChild(document.createTextNode(entry.text));
  var div = document.createElement("div");
  div.appendChild(a);
  div.className = "toclevel" + entry.toclevel;
  toc.appendChild(div);
 }
 if (entries.length == 0)
  toc.parentNode.removeChild(toc);
},


/////////////////////////////////////////////////////////////////////
// Footnotes generator
/////////////////////////////////////////////////////////////////////

/* Based on footnote generation code from:
 * http://www.brandspankingnew.net/archive/2005/07/format_footnote.html
 */

footnotes: function () {
 // Delete existing footnote entries in case we're reloading the footnodes.
 var i;
 var noteholder = document.getElementById("footnotes");
 if (!noteholder) {
  return;
 }
 var entriesToRemove = [];
 for (i = 0; i < noteholder.childNodes.length; i++) {
  var entry = noteholder.childNodes[i];
  if (entry.nodeName.toLowerCase() == 'div' && entry.getAttribute("class") == "footnote")
   entriesToRemove.push(entry);
 }
 for (i = 0; i < entriesToRemove.length; i++) {
  noteholder.removeChild(entriesToRemove[i]);
 }

 // Rebuild footnote entries.
 var cont = document.getElementById("content");
 var spans = cont.getElementsByTagName("span");
 var refs = {};
 var n = 0;
 for (i=0; i<spans.length; i++) {
  if (spans[i].className == "footnote") {
   n++;
   var note = spans[i].getAttribute("data-note");
   if (!note) {
    // Use [\s\S] in place of . so multi-line matches work.
    // Because JavaScript has no s (dotall) regex flag.
    note = spans[i].innerHTML.match(/\s*\[([\s\S]*)]\s*/)[1];
    spans[i].innerHTML =
     "[<a id='_footnoteref_" + n + "' href='#_footnote_" + n +
     "' title='View footnote' class='footnote'>" + n + "</a>]";
    spans[i].setAttribute("data-note", note);
   }
   noteholder.innerHTML +=
    "<div class='footnote' id='_footnote_" + n + "'>" +
    "<a href='#_footnoteref_" + n + "' title='Return to text'>" +
    n + "</a>. " + note + "</div>";
   var id =spans[i].getAttribute("id");
   if (id != null) refs["#"+id] = n;
  }
 }
 if (n == 0)
  noteholder.parentNode.removeChild(noteholder);
 else {
  // Process footnoterefs.
  for (i=0; i<spans.length; i++) {
   if (spans[i].className == "footnoteref") {
    var href = spans[i].getElementsByTagName("a")[0].getAttribute("href");
    href = href.match(/#.*/)[0]; // Because IE return full URL.
    n = refs[href];
    spans[i].innerHTML =
     "[<a href='#_footnote_" + n +
     "' title='View footnote' class='footnote'>" + n + "</a>]";
   }
  }
 }
},

install: function(toclevels) {
 var timerId;

 function reinstall() {
  asciidoc.footnotes();
  if (toclevels) {
   asciidoc.toc(toclevels);
  }
 }

 function reinstallAndRemoveTimer() {
  clearInterval(timerId);
  reinstall();
 }

 timerId = setInterval(reinstall, 500);
 if (document.addEventListener)
  document.addEventListener("DOMContentLoaded", reinstallAndRemoveTimer, false);
 else
  window.onload = reinstallAndRemoveTimer;
}

}
asciidoc.install(3);
/*]]>*/
</script>
<div id="header">
</div>
<div id="content">
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/Banner.jpg" alt="Banner" />
</div>
</div>
<div class="paragraph"><p><span class="big">Subsurface-mobile para Android: MANUAL DE USUARIO</span></p></div>
<div class="paragraph"><p><strong>Autores</strong>: Willem Ferguson, Dirk Hohndel</p></div>
<div class="paragraph"><p><span class="blue"><em>Versión 2.0, Octubre 2017</em></span></p></div>
<div class="paragraph"><p>Bienvenido a <em>Subsurface</em> y <em>Subsurface-mobile</em> un avanzado programa de registro de inmersiones con extensa infraestructura para describir, organizar e interpretar inmersiones, con botella o a pulmón. <em>Subsurface</em> ofrece muchas ventajas sobre otras soluciones de software similares, entre ellas se incluye la compatibilidad con Windows, Mac-OS/X, Linux (muchas distribuciones) y también Android e iOS. Además, <em>Subsurface</em> es un software de código abierto que permite descargar información de inmersiones desde la mayoría de los ordenadores de buceo.</p></div>
<div class="sect1">
<h2 id="_presentación_de_subsurface_mobile">1. Presentación de Subsurface-mobile</h2>
<div class="sectionbody">
<div class="paragraph"><p><em>Subsurface-mobile</em> es una versión limitada de <em>Subsurface</em>, dirigida a smartphones y tablets con Android o iOS, que permite ver, incorporar, compartir y almacenar información de buceo en los mismos lugares de la inmersión, donde un ordenador no sería práctico. Aunque la versión para ordenador muestra una información mucho más detallada de cada inmersión, la versión para móvil nos permite tener esta información más accesible durante un viaje, lo que puede resultar util para demostrar nuestra experiencia de buceo en tiendas o centros, o simplemente revisar inmersiones anteriores. <em>Subsurface-mobile</em> para Android permite la recogida de posiciones GPS en el mismo lugar del buceo (Subsurface-mobile para iOS aún no tiene la funcionalidad completa).</p></div> <div class="paragraph"><p>Los usuarios de <em>Subsurface-mobile</em> habitualmente usan la app como accesorio de la versión de ordenador de <em>Subsurface</em>, compartiendo información entre las versiones móvil y de escritorio. Sin embargo, <em>Subsurface-mobile</em> también puede utilizarse independientemente de la versión de escritorio y no requiere el uso de almacenamiento en la nube.</p></div>
<div class="paragraph"><p><em>Subsurface-mobile</em> nos permite:</p></div>
<div class="ulist"><ul>
<li>
<p>
Descargar la información del divelog utilizando la nube de <em>Subsurface</em>.
</p>
</li>
<li>
<p>
Visualizar esta información en un dispositivo móvil.
</p>
</li>
<li>
<p>
Editar muchos de los campos de datos del registro, por ejemplo, el dive-master, el compañero, las anotaciones, etc.
</p>
</li>
<li>
<p>
Crear y añadir nuevas inmersiones a nuestro divelog. Guardar el divelog actualizado en Internet.
</p>
</li>
<li>
<p>
Registrar y aplicar las posiciones GPS de las inmersiones (solo Android).
</p>
</li>
<li>
<p>
Visualizar las localizaciones de las posiciones GPS en un mapa.
</p>
</li>
</ul></div>
<div class="paragraph"><p>Todas estas posibilidades se comentan con más detalle en el texto siguiente.</p></div>
<div class="paragraph"><p><em>Subsurface-mobile</em> no soporta, todavía, descargar datos de todos los ordenadores de buceo de los que sí se puede en la versión de escritorio. Solo aquellos ordenadores de utilizan interfaces FTDI USB o Bluetooth/BLE pueden accederse desde <em>Subsurface-mobile</em>.</p></div>
</div>
</div>
<div class="sect1">
<h2 id="_instalar_em_subsurface_mobile_em_en_tu_dispositivo_android">2. Instalar <em>Subsurface-mobile</em> en tu dispositivo Android</h2>
<div class="sectionbody">
<div class="paragraph"><p>Encuentra <em>Subsurface-mobile</em> en el <em>Play Store</em> de Google o en el <em>iTunes Store</em> e instálalo. Hay que tener en cuenta que ambos repositorios también contienen la app <em>Subsurface companion</em> (utilizada sola para recoger las posiciones GPS). Asegúrate de que instalas <em>Subsurface-mobile</em>.</p></div>
</div>
</div>
<div class="sect1">
<h2 id="_utilizar_em_subsurface_mobile_em_por_primera_vez">3. Utilizar <em>Subsurface-mobile</em> por primera vez</h2>
<div class="sectionbody">
<div class="paragraph"><p>Al iniciar <em>Subsurface-mobile</em> se muestra una pantalla de presentación mientras se carga el programa. En algunos dispositivos esto puede llevar algunos segundos. Tras haber cargado, aparecerá una <em>pantalla de credenciales de la nube</em> (ver la imagen de la izquierda, a continuación).</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/Credentials.jpg" alt="FIGURA: Pantalla de credenciales" />
</div>
</div>
<div class="sect2">
<h3 id="_si_no_se_utiliza_almacenamiento_en_la_nube">3.1. Si NO se utiliza almacenamiento en la nube</h3>
<div class="paragraph"><p>Pulsa el botón "Sin conexión a la nube". La app no accederá al servidor en la nube de <em>Subsurface</em> para obtener la información del divelog. Esto significa que la información solo se guarda en el dispositivo móvil. Si no se han introducido inmersiones todavía en el divelog (el caso más habitual), se creará uno vacío.</p></div>
</div>
<div class="sect2">
<h3 id="_si_se_utiliza_el_almacenamiento_en_la_nube">3.2. Si se utiliza el almacenamiento en la nube</h3>
<div class="paragraph"><p>Se puede utilizar una cuenta gratuita para guardar la información del divelog.  Esta cuenta puede crearse, tanto desde <em>Subsurface</em> en un ordenador, como desde <em>Subsurface-mobile</em> utilizando un dispositivo móvil; de hecho se puede mantener un registro de inmersiones solo con <em>Subsurface-mobile</em>. Por otro lado, si compartes credenciales entre <em>Subsurface-mobile</em> y <em>Subsurface</em> a través de la nube, tu divelog también podrá compartirse entre dispositivos.</p></div>
<div class="paragraph"><p>Los datos de buceo se guardan también en el dispositivo móvil y en el ordenador (desde el ordenador es muy fácil crear copias de seguridad, por ejemplo en formato XML), por lo que información se puede acceder sin conexión a internet. El equipo de Subsurface nunca accede a los datos de buceo de un usuario sin su autorización explícita, los datos proporcionados no se utilizan para otra cosa que facilitárselos al usuario que los creó. No hay anuncios ni recolección o análisis de los datos guardados en la nube de <em>Subsurface</em>.</p></div>
<div class="paragraph"><p>1) Introduce un e-mail y una password en los campos indicados en la pantalla.  La dirección de correo debe estar en minúsculas y la password debe contener una colección de caracteres del alfabeto (mayúsculas o minúsculas) y/o números.  Pulsa el botón "Conectarse o registrarse". Y ya has creado una cuenta desde la aplicación de escritorio <em>Subsurface</em>, introduce las mismas credenciales aquí.  Una vez que la lista de inmersiones se ha descargado de la nube, <em>Subsurface-mobile</em> funciona solo con la copia local del dispositivo móvil.  Esto evita esperas o incluso fallos operativos si hay una mala conexión a internet, una situación bastante habitual en muchos lugares de buceo.</p></div>
<div class="paragraph"><p>2) Si estamos creando una cuenta nueva, se abrirá una pantalla para un PIN (ver la imagen anterior de la derecha). Se recibirá un PIN por correo electrónico en la dirección indicada en el paso anterior. Introduce este PIN y pulsa el botón <em>Registrar</em>. La información del usuario se guardará en la nube y el acceso quedará habilitado. En este caso la lista de inmersiones estará inicialmente vacía. Comienza a introducir buceos en el divelog o descarga la información desde un ordenador de buceo soportado.</p></div>
<div class="paragraph"><p>El divelog puede actualizarse automáticamente. Si hay conexión a internet, <em>Subsurface-mobile</em> accederá al almacenamiento en la nube para verificar que la copia local del divelog es igual que la del servidor. Si no es así, la copia local y la de la nube se sincronizarán.</p></div>
</div>
<div class="sect2">
<h3 id="_modificar_las_credenciales_existentes_en_la_nube_de_em_subsurface_em">3.3. Modificar las credenciales existentes en la nube de <em>Subsurface</em></h3>
<div class="paragraph"><p>Las credenciales de acceso pueden modificarse para, por ejemplo, trabajar con cuentas diferentes. Visita la sección en <a href="#S_ChangeCloudAccount">Cambiar a una cuenta en la nube diferente</a>.</p></div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_estructura_de_menús_e_interfaz_de_usuario">4. Estructura de menús e interfaz de usuario</h2>
<div class="sectionbody">
<div class="paragraph"><p>En la parte inferior de muchas de las pantallas de <em>Subsurface-mobile</em> hay un botón redondo que permite acceder a diversas acciones (ver imagen a continuación). La selección más habitual se indica en un botón redondo de color (en el caso mostrado a continuación, editar una inmersión). Acciones alternativas se muestran en una barra de acciones blanca.  En dispositivos Android, utiliza el botón "atrás" para las acciones "cancelar", "descartar" o "atrás". Por ejemplo, al editar la información de una inmersión, pulsar el botón de acciones guarda los cambios, mientras que el botón de retroceso de Android se puede utilizar para cancelar la edición sin guardar los cambios.</p></div>
<div class="paragraph"><p>En dispositivos iOS, en las pantallas donde está habilitada la acción de retroceso, se muestra una flecha "atrás" en la esquina superior izquierda de la pantalla.</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/Actionbutton.jpg" alt="FIGURA: Botón de acciones" />
</div>
</div>
<div class="paragraph"><p>Para poder tener una experiencia de usuario consistente entre dispositivos iOS y Android, <em>Subsurface-mobile</em> no utiliza la tradicional "hamburguesa" de la esquina superior derecha o izquierda para desplegar menús. En su lugar, <em>Subsurface-mobile</em> usa una filosofía basada la herramienta <em>Kirigami</em>, creada por los desarrolladores del escritorio Plasma. Hay tres formas de desplegar el menú principal:</p></div>
<div class="ulist"><ul>
<li>
<p>
Pulsar el símbolo de "hamburguesa" de la esquina inferior izquierda de la pantalla (fácil de alcanzar en dispositivos de una sola mano)
</p>
</li>
<li>
<p>
Desplazar hacia la derecha desde el borde de la pantalla.
</p>
</li>
<li>
<p>
Arrastrar hacia la derecha el <em>botón de acciones</em> visible en la mayoría de pantallas.
</p>
</li>
</ul></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/Menusystem.jpg" alt="FIGURA: Sub-panel de gestión de inmersiones" />
</div>
</div>
<div class="paragraph"><p>Las imágenes anteriores muestran algunas de las características más importantes del sistema de menús. A la izquierda está el menú principal que se activa como se ha explicado antes. A la derecha, las opciones accesibles de los submenús.</p></div>
<div class="paragraph"><p>Todas las capturas de pantalla de este manual de usuario son de la versión para Android. Como se indicó anteriormente, la versión iOS tiene soporte para las opciones de <em>GPS</em>.</p></div>
</div>
</div>
<div class="sect1">
<h2 id="_la_lista_de_inmersiones">5. La Lista de Inmersiones</h2>
<div class="sectionbody">
<div class="paragraph"><p>La mayoría de las acciones de <em>Subsurface-mobile</em> se centran alrededor de las inmersiones de la lista. Mientras se carga la lista desde la nube, aparece un mensaje en la parte inferior de la pantalla, indicando que se está accediendo a la misma (ver imagen izquierda a continuación). Una vez que la lista se ha cargado, nos podemos desplazar arriba y abajo.  Para descargar inmersiones desde un ordenador de buceo, pulsa el botón azul.  Si deseas añadir manualmente un buceo, pulsa el botón "+" de la barra de acciones (descrita más adelante).  Al pulsar una inmersión de la lista aparecerá una pantalla de <em>Vista de Detalles</em> para dicho buceo (ver imagen derecha a continuación). En ella se incluye el perfil de la inmersión, información adicional y notas.</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/Divelist2.jpg" alt="FIGURA: Pantalla de lista de inmersiones" />
</div>
</div>
<div class="paragraph"><p>Se pueden visualizar otras inmersiones desplazando la <em>Vista de Detalles</em> hacia la derecha, para el buceo posterior, o hacia la izquierda para el anterior.  Utilizando la <em>Barra de acciones</em> también se puede borrar una inmersión (pulsando la papelera) o visualizar la ubicación en un mapa (Google Maps en Android o el sitio web de Google Maps en iOS) pulsando el icono de GPS.</p></div>
</div>
</div>
<div class="sect1">
<h2 id="S_Edit_Dive">6. Editar los detalles de la inmersión.</h2>
<div class="sectionbody">
<div class="paragraph"><p>En la parte inferior de la pantalla, el <em>Botón de Acciones</em> es un lápiz (imagen anterior derecha).  Pulsar el botón hará que se muestre un panel con casillas de edición que nos permitirán modificar la información existente, p.e. añadiendo texto a las notas o cambiando nombres o valores en otras casillas (ver imagen a continuación). Puede ser necesario desplazar la ventana para poder acceder a toda la información. En la parte inferior de la pantalla de edición, el <em>Botón de Acciones</em> mostrará un icono de <em>Guardar</em>. Púlsalo para guardar los cambios efectuados, tras lo cual la lista de inmersiones se actualizará y mostrará. Si se desea cancelar la edición se pulsa el botón "Volver" de Android.</p></div>
<div class="paragraph"><p>Cuando se muestra el teclado virtual, para evitar congestionar la pantalla, el botón de acciones se oculta. Una vez cierras el teclado, se muestra de nuevo.</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/Editdive.jpg" alt="FIGURA: Pantalla de edición de inmersiones" />
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="S_Add_Dive">7. Añadir manualmente una nueva inmersión a la lista</h2>
<div class="sectionbody">
<div class="paragraph"><p>También es posible añadir manualmente una inmersión a la lista de inmersiones.  Desde la lista de inmersiones, pulsa el el símbolo "+" de la barra de acciones, o usando el menú principal, pulsa <em>Gestión de inmersiones &#8594; Añadir inmersión manualmente</em>. Esto abrirá una pantalla idéntica a la de edición comentada anteriormente. Al añadir manualmente una inmersión, no se puede añadir un perfil del ordenador de buceo. Sin embargo, si no se usa un ordenador de buceo, la duración, profundidad y varias otras informaciones pueden ser introducidas.  El <em>Botón de acciones</em>, en la parte inferior de la pantalla, contendrá el icono de un disco. Púlsalo para guardar la nueva inmersión. Para cancelar las ediciones pulsa el botón "Volver" de Android.  La imagen de la izquierda, a continuación, muestra una captura de pantalla de una inmersión que está siendo creada, y la imagen de la derecha muestra la misma inmersión en la <em>Vista de detalles</em>.</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/Manualdive.jpg" alt="FIGURA: Pantalla de introducción manual" />
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_borrar_una_inmersión">8. Borrar una inmersión</h2>
<div class="sectionbody">
<div class="paragraph"><p>La <em>Vista de detalles</em> de una inmersión tiene una Barra de Acciones, que incluye una papelera. Si se pulsa, la inmersión mostrada en la <em>Vista de detalles</em> se borrará. Se dispone de una breve posibilidad de anular el borrado pulsando el botón <em>Deshacer</em> en el mensaje que aparecerá en la parte inferior de la pantalla (ver imagen a continuación).</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/Delete_undo.jpg" alt="FIGURA: Deshacer borrado" />
</div>
</div>
<div class="paragraph"><p>También se puede borrar un buceo desde la lista manteniéndolo pulsado hasta que aparezca una papelera roja a la derecha (ver imagen a continuación). Pulsa la papelera. La inmersión se borrará sin pedir confirmación ya que <em>Subsurface-mobile</em> asume que la combinación de pulsaciones citada elimina cualquier ambigüedad posible.</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/RedDustbin.jpg" alt="FIGURA: Borrar inmersión de la lista" />
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="S_Download">9. Descargar inmersiones desde un ordenador de buceo</h2>
<div class="sectionbody">
<div class="paragraph"><p>Es posible descargar inmersiones desde ordenadores de buceo con interfaz FTDI USB o con Bluetooth/BTLE.</p></div>
<div class="paragraph"><p>En primer lugar, establece una conexión entre el dispositivo móvil y el ordenador de buceo.</p></div>
<div class="paragraph"><p>Para ordenadores con USB, los cables que se utilizan habitualmente para descargar a ordenadores de sobremesa o portátiles no sirven: estos cables suelen tener un contacto USB "macho" de "tipo A" que se conecta al puerto del PC. Para descargar a un dispositivo móvil se necesita un cable USB-OTG (USB on the go), el cual se conecta al puerto mini-USB (en ocasiones USB "tipo C") del dispositivo móvil. El cable OTG suele tener una terminación hembra en la que se insertará el macho tipo A del cable "habitual" (ver imagen a continuación).  Esto supone que serán necesarios dos cables para conectar el ordenador de buceo con el dispositivo móvil.</p></div>
<div class="paragraph"><p>Hay que resaltar que no todos los dispositivos móviles soportan los cables OTG, e incluso en algunos dispositivos que soportan, en general, dichos cables puede que <em>Subsurface-mobile</em> no pueda conectarse por puertos serie.</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/USB-OTG.jpg" alt="FIGURA: USB-OTG cable" />
</div>
</div>
<div class="paragraph"><p>Para ordenadores de buceo equipados con Bluetooth, conéctalos al dispositivo móvil usando las herramientas habituales de este para conseguir un emparejamiento entre ambos. En dispositivos Android suele ser <em>Ajustes &#8594; Bluetooth</em>.  <em>Subsurface-mobile</em> se comunica utilizando tanto Bluetooth como Bluetooth-low-energy (BTLE). La selección del protocolo adecuado la efectúa el software y el usuario no necesita ocuparse de ello.</p></div>
<div class="paragraph"><p>Con el emparejamiento efectuado, la descarga es fácil. Desde el menú principal, pulsa <em>Gestión de inmersiones &#8594; Descargar desde el ordenador</em>. Se mostrará una pantalla requiriendo que se especifiquen marca y modelo del ordenador de buceo. Por ejemplo, si se está utilizando un Shearwater Petrel 2, la marca será <em>Shearwater</em> y el modelo <em>Petrel 2</em>. Selecciónalos de las listas desplegables (ver imagen izquierda a continuación).</p></div>
<div class="paragraph"><p>Luego pulsa el botón etiquetado <em>Descargar</em>. Las inmersiones descargadas aparecerán en la parte inferior de la pantalla, las más recientes arriba (ver imagen de la derecha a continuación). Ten paciencia, la descarga puede llevar algunos minutos. Se ha comprobado que la primera descarga en algunos ordenadores ha tardado hasta 45 minutos (e incluso más) en completarse.</p></div>
<div class="paragraph"><p>Tras la descarga, cada inmersión tendrá una casilla seleccionable a su izquierda, utilízala para elegir que inmersiones quieres que se añadan a la lista de buceos de <em>Subsurface-mobile</em>; las inmersiones que no se seleccionen serán ignoradas. Una vez hayas seleccionado las inmersiones deseadas, pulsa el botón de la izquierda etiquetado <em>Aceptar</em>. Todos los buceos seleccionados aparecerán en la lista. Ahora podrás editar la información descargada como se explicó en la sección anterior <a href="#S_Edit_Dive">Editar los detalles de una inmersión</a>.</p></div>
<div class="imageblock">
<div class="content">
<img src="/mobile-images/DC-Download.jpg" alt=""FIGURA: Pantalla de descarga del ordenador" />
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_visualizar_el_punto_de_buceo_en_google_maps">10. Visualizar el punto de buceo en Google Maps</h2>
<div class="sectionbody">
<div class="paragraph"><p>En la <em>Vista detallada</em>, la barra de acciones de abajo tiene un icono GPS en el lado izquierdo. Pulsa este icono y el lugar del buceo se mostrará en Google Maps. Cierra el mapa usando el botón "atrás" de Android.</p></div>
<div class="paragraph"><p>Otra posibilidad, en la <em>Vista detallada</em> es el botón etiquetado <em>Mapa</em>, situado en la esquina superior derecha.</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/Map.jpg" alt="FIGURA: Mapa del punto de buceo" />
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_gestión_del_divelog">11. Gestión del divelog</h2>
<div class="sectionbody">
<div class="paragraph"><p>Una parte central de <em>Subsurface-mobile</em> es su capacidad para guardar la información de buceo haciendo uso del almacenamiento en la nube de <em>Subsurface</em>. Esto proporciona seguridad frente a los daños o la perdida de la copia del divelog guardada locálmente y permite a la versión de sobremesa de <em>Subsurface</em> acceder a los cambios realizados con el dispositivo móvil.  Se accede a esta capacidad a través del menú principal (arrastrando el <em>Botón de acciones</em> hacia la derecha, o pulsando la "hamburguesa" en la parte inferior izquierda de la pantalla).  Pulsa la opción <em>Gestión de inmersiones</em> que nos permitirá un nuevo número de acciones:</p></div>
<div class="sect2">
<h3 id="_añadir_manualmente_una_nueva_inmersión">11.1. Añadir manualmente una nueva inmersión</h3>
<div class="paragraph"><p>Se ha descrito anteriormente en la sección <a href="#S_Add_Dive">Añadir manualmente una nueva inmersión a la lista</a>.</p></div>
</div>
<div class="sect2">
<h3 id="_descargar_desde_el_ordenador">11.2. Descargar desde el ordenador</h3>
<div class="paragraph"><p>Se ha descrito anteriormente en la sección <a href="#S_Download">Descargar inmersiones desde un ordenador de buceo</a>.</p></div>
</div>
<div class="sect2">
<h3 id="_aplicar_posiciones_gps">11.3. Aplicar posiciones GPS</h3>
<div class="paragraph"><p>Se describirá a continuación en la próxima sección principal.</p></div>
</div>
<div class="sect2">
<h3 id="_sincronización_manual_con_la_nube">11.4. Sincronización manual con la nube</h3>
<div class="paragraph"><p>Sube las inmersiones guardadas en el dispositivo móvil al almacenamiento en la nube de <em>Subsurface</em>. Esta opción sincronizará los cambios locales con el divelog de la nube. También descarga los cambios al divelog que pudieran haberse hecho desde otro dispositivo u ordenador de sobremesa y se hubieran almacenado en la nube.</p></div>
</div>
<div class="sect2">
<h3 id="_activar_sincronizado_automático_con_la_nube">11.5. Activar sincronizado automático con la nube</h3>
<div class="paragraph"><p>Por defecto, <em>Subsurface-mobile</em> se ejecuta desconectado y solo sincroniza la lista de inmersiones con el almacenamiento en la nube cuando se le pide explícitamente (apartado anterior).  Puedes elegir que siempre se sincronice con la nube después de cada modificación de la lista. Esta opción no se recomienda, a menos que te encuentres en un área con una conexión a internet rápida y fiable, ya que, de otra manera, puede parecer que <em>Subsurface-mobile</em> se cuelga entre operaciones mientras intenta conectarse al servidor de la nube. Seleccionar <em>Activar sincronizado automático con la nube</em> hace que el divelog local se sincronice con la copia en la nube cada vez que se cierra <em>Subsurface-mobile</em>.</p></div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_registrar_puntos_de_buceo_usando_el_gps_solo_android">12. Registrar puntos de buceo usando el GPS (solo Android)</h2>
<div class="sectionbody">
<div class="paragraph"><p>El hecho de que la mayoría de smartphones dispongan de GPS nos permite registrar las ubicaciones de las inmersiones. Se puede llevar el teléfono en el barco de buceo durante la inmersión y se registrarán automáticamente posiciones a intervalos regulares.  Estas posiciones pueden ser aplicadas a inmersiones de la lista. A continuación se explica como:</p></div>
<div class="sect2">
<h3 id="S_ConfigureGPS">12.1. Configurar el servicio GPS</h3>
<div class="paragraph"><p>Desde el menú principal pulsa <em>Ajustes</em>. La pantalla de ajustes tiene una sección para configurar el servicio GPS (imagen a continuación). Los datos de posiciones GPS se recogen a intervalos regulares, p.e. cada 10 minutos, o a distancias regulares, p.e. después de que el barco se haya desplazado más de 200 metros, o una combinación de ambas opciones. Introduce los parámetros deseados y pulsa el botón "Retroceder" de Android. La app está preparada para recoger posiciones GPS.</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/GPS-config.jpg" alt="FIGURA: Configuración del GPS" />
</div>
</div>
</div>
<div class="sect2">
<h3 id="_recoger_posiciones_gps">12.2. Recoger posiciones GPS</h3>
<div class="paragraph"><p>Asegúrate de que el GPS del dispositivo Android está activado.  Abre el menú principal y selecciona <em>GPS &#8594; Activar el servicio de posicionamiento</em>. Con ello se inicia la grabación de posiciones GPS.</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/GPSstart.jpg" alt="FIGURA: Inicio del GPS" />
</div>
</div>
<div class="paragraph"><p><em>Subsurface-mobile</em> comenzará a tomar lecturas de las posiciones GPS siguiendo las indicaciones guardadas en las preferencias, como se ha indicado anteriormente. Mientras se esté ejecutando el servicio, todos los menús tienen un símbolo de GPS en la parte de debajo del menú indicando que el servicio está activo. Al regresar del viaje de buceo, desactiva la recogida de datos pulsando la opción <em>Deshabilitar servicio de posicionamiento</em>. El símbolo de GPS en la parte inferior de los menús desaparecerá.</p></div>
</div>
<div class="sect2">
<h3 id="_guardar_los_datos_del_gps_en_la_nube_de_em_subsurface_em">12.3. Guardar los datos del GPS en la nube de <em>Subsurface</em></h3>
<div class="paragraph"><p>Activa el menú principal y selecciona la opción <em>GPS</em> que despliega el menú de acciones relacionadas con el GPS . Pulsa <em>Subir datos GPS</em> con ello, los datos recogidos en el dispositivo móvil se guardarán en la nube de <em>Subsurface</em>.  Estas posiciones GPS se guardan <strong>separadamente</strong> del resto de datos del divelog.  Todas las posiciones GPS recogidas se conservan en el dispositivo móvil, independientemente de que se hayan subido o no.</p></div>
</div>
<div class="sect2">
<h3 id="_descargar_datos_gps_de_la_nube_de_em_subsurface_em">12.4. Descargar datos GPS de la nube de <em>Subsurface</em></h3> <div class="paragraph"><p>Descarga los datos GPS que se hayan guardado en la nube (posiblemente desde un dispositivo diferente) seleccionando <em>Descargar datos GPS</em> en el subpanel GPS.</p></div>
</div>
<div class="sect2">
<h3 id="_visualizar_datos_gps">12.5. Visualizar datos GPS</h3>
<div class="paragraph"><p>Desde el menú GPS selecciona <em>Mostrar posiciones GPS</em>.  Esto mostrará una lista de posiciones GPS recogidas usando en servicio de ubicación (imagen a continuación). Se pueden efectuar dos acciones para cada una de las posiciones, habilitadas arrastrando el asa (la matriz de puntos de la derecha). Esta acción muestra dos opciones. Pulsar la papelera borra esta posición GPS en concreto. Pulsar el icono con forma de lágrima (un pin de Google maps) abre Google Maps en el navegador con un pin que indica la posición exacta en el mapa de las coordenadas GPS que se están visualizando.  Las dos opciones indicadas, pueden ocultarse de nuevo arrastrando el asa hacia la derecha.</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/gpsmanagement.jpg" alt="FIGURA: Gestión del GPS" />
</div>
</div>
</div>
<div class="sect2">
<h3 id="_aplicar_los_datos_gps_a_las_inmersiones_del_divelog">12.6. Aplicar los datos GPS a las inmersiones del divelog</h3>
<div class="paragraph"><p>Suponiendo que se hayan introducido a mano o descargado desde la nube de <em>Subsurface</em> todas las inmersiones del divelog, se pueden aplicar las posiciones GPS a dichas inmersiones. Las posiciones GPS solo pueden aplicarse a inmersiones que estén en la lista de inmersiones.  Desde el subpanel <em>Gestión de inmersiones</em>, pulsar <em>Aplicar posiciones GPSs</em>.  La lista de inmersiones contiene la hora de inicio y fin de cada inmersión.  <em>Subsurface-mobile</em> aplicará la primera posición que se encuentre dentro del periodo de duración del buceo, o la inmediatamente anterior al inicio si no hubiera ninguna dentro del periodo.</p></div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_usar_los_ajustes_de_em_subsurface_mobile_em">13. Usar los ajustes de <em>Subsurface-mobile</em></h2>
<div class="sectionbody">
<div class="paragraph"><p>La pantalla de ajustes permite la personalización de <em>Subsurface-mobile</em>.  Muchos de los ajustes requieren desplazar un "interruptor" para activar o desactivar un ajuste concreto.</p></div>
<div class="sect2">
<h3 id="S_ChangeCloudAccount">13.1. Cambiar a una cuenta distinta en la nube</h3>
<div class="paragraph"><p>Algunos usuarios tienen más de una cuenta en la nube y necesitan cambiar entre ellas. Pulsa <em>Ajustes</em> en el menú principal y desplázate a la sección llamada <em>Estado de conexión a la nube</em> (ver imagen a continuación).  Pulsa el botón cambiar. Esto abrirá la pantalla de <em>Credenciales de la nube</em>.  Cambia la información de las credenciales y pulsa el botón <em>Registrarse o entrar</em>. Se mostrará la nueva lista de inmersiones.</p></div>
<div class="imageblock" style="text-align:center;">
<div class="content">
<img src="/mobile-images/SettingsCloudTheme.jpg" alt="FIGURA: Ajustes: Nube y Tema" />
</div>
</div>
</div>
<div class="sect2">
<h3 id="_cambiar_los_colores_de_em_subsurface_mobile_em">13.2. Cambiar los colores de <em>Subsurface-mobile</em></h3>
<div class="paragraph"><p><em>Subsurface-mobile</em> tiene tres esquemas de colores para complacer a usuarios con diferentes gustos. En este manual se muestra el esquema por defecto, que es el azul. Cambia al esquema rosa o al oscuro pulsando <em>Ajustes</em> en el menú principal y desplazándote a la sección con el encabezamiento <em>Tema</em> (ver imagen anterior). Selecciona el esquema de colores que prefieras arrastrando el deslizador de la derecha que corresponda.</p></div>
</div>
<div class="sect2">
<h3 id="_configurar_el_servicio_web_de_gps">13.3. Configurar el servicio web de GPS</h3>
<div class="paragraph"><p>La pantalla de ajustes permite configurar la forma en que se recogen las posiciones GPS durante el buceo. Visita la sección <a href="#S_ConfigureGPS">Configurar el servicio GPS</a> de este manual.</p></div>
</div>
<div class="sect2">
<h3 id="_guardar_un_registro_detallado_del_ordenador_de_buceo">13.4. Guardar un registro detallado del ordenador de buceo</h3>
<div class="paragraph"><p>Bajo el encabezamiento <em>Ordenador de buceo</em>, encontrarás un interruptor para guardar un registro detallado cada vez que se descarguen inmersiones desde el ordenador de buceo. Cuando contactes con los desarrolladores con algún problema, se te pedirá habitualmente que facilites la información contenida en este registro, el cual se puede encontrar en la carpeta raíz del almacenamiento local de tu dispositivo con el nombre <code>libdivecomputer.log</code>. En la misma localización puedes encontrar <code>subsurface.log</code> que se crea siempre y que puede contener otra información útil para depurar problemas con <em>Subsurface-mobile</em>.</p></div>
</div>
<div class="sect2">
<h3 id="_activar_el_submenú_de_desarrollador">13.5. Activar el submenú de Desarrollador</h3>
<div class="paragraph"><p>La información en subsurface.log y alguna información adicional para comprender como se muestra en pantalla y como <em>Subsurface-mobile</em> procesó la información en alguna ocasión concreta se encuentra disponible en tiempo de ejecución desde un menú de Desarrollador. Activa o desactiva esta opción de menú arrastrando el deslizador de la pantalla de <em>Ajustes</em>.</p></div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_el_submenú_desarrollador">14. El submenú Desarrollador</h2>
<div class="sectionbody">
<div class="paragraph"><p>Si se ha activado el submenú de Desarrollador en la pantalla de ajustes, el menú principal mostrará una opción <em>Desarrollador</em>. Pulsándola aparecerán dos opciones que resultan útiles en el contexto de desarrollo y depuración del programa.</p></div>
<div class="sect2">
<h3 id="_registro_de_la_app">14.1. Registro de la app</h3>
<div class="paragraph"><p>Esta opción muestra los mensajes que genera <em>Subsurface-mobile</em> al ejecutarse.  Aunque carecen de utilidad para la mayoría de usuarios, a menudo resultan cruciales para detectar cualquier comportamiento anormal de la app. El registro de la app puede encontrarse en la carpeta raíz del dispositivo móvil.</p></div>
</div>
<div class="sect2">
<h3 id="_información_del_tema">14.2. Información del Tema</h3>
<div class="paragraph"><p>Esta opción proporciona un cúmulo de información acerca de las características de la pantalla del dispositivo móvil y de las fuentes de texto usadas por <em>Subsurface-mobile</em></p></div>
</div>
</div>
</div>
</div>
<div id="footnotes"><hr /></div>
<div id="footer">
<div id="footer-text">
Last updated 2017-10-18 14:44:27 AST
</div>
</div>