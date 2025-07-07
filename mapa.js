const mapa = L.map('map', {
  zoomControl: true,
  attributionControl: true
}).setView([13.7, -88.9], 4);

const orgubenamental = L.layerGroup();
const emprivada = L.layerGroup();
const ceninvestigacion = L.layerGroup();

const NoGubernamental = L.icon({
  iconUrl: 'img/gubernamental.png',     
  iconSize: [24, 24],          
  iconAnchor: [16, 32],        
  popupAnchor: [0, -32]        
});

const EmpresaPrivada = L.icon({
  iconUrl: 'img/privada.png',     
  iconSize: [24, 24],           
  iconAnchor: [16, 32],         
  popupAnchor: [0, -32]         
});

const CentroInvestigacion = L.icon({
  iconUrl: 'img/centro.png',     
  iconSize: [24, 24],          
  iconAnchor: [16, 32],        
  popupAnchor: [0, -32]    
});

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(mapa);

// Agregar un marcador de ejemplo
const marker = L.marker([14.692584, -89.349129], {icon: NoGubernamental}).addTo(orgubenamental);
marker.bindPopup(`<div style="max-width: 300px; text-align: left;">
    <b>Plan Trifinio Guatemala</b><br>Organizacion No Gubernamental</br>
    <h5>   </h5>
    <img src="img/trifinio.jpeg" 
         alt="" 
         style="width: 60%; border-radius: 5px;"/>

    <p>
      <b>Persona postulante:</b><br>José Ulises Alarcón Magaña</br>
    </p>

    <p>
      <b>Cargo:</b><br>Técnico de Apoyo al Desarrollo Integral de las Juventudes Rutrales de la Región.</br>
    </p>

    <p>
      <b>Problematica especifica:</b><br>El acceso limitado a la economia.</br>
    </p>
  </div>`);

// Otros marcadores
L.marker([12.149137, -86.163377], {icon: CentroInvestigacion})
  .addTo(ceninvestigacion)
  .bindPopup(`<div style="max-width: 300px; text-align: left;">
    <b>PROMARANGO</b><br>Academia/Centro de Investigación</br>
    <h5>   </h5>
    <img src="img/promarango.jpeg" 
         alt="" 
         style="width: 60%; border-radius: 5px;"/>

    <p>
      <b>Persona postulante:</b><br>Bryan Gustavo Mendieta Araica</br>
    </p>

    <p>
      <b>Cargo:</b><br>Consultor.</br>
    </p>

    <p>
      <b>Problematica especifica:</b><br>Las escasez cíclica de alimentos en cantidad y calidad para la ganadería genera pérdidas millonarias y atenta contra la seguridad alimentaria de la población, razón por la cual se buscaron alternativas de solución.</br>
    </p>
  </div>`);

L.marker([19.044177, -98.197503], {icon: CentroInvestigacion})
    .addTo(ceninvestigacion)
    .bindPopup(`<div style="max-width: 300px; text-align: left;">
    <b>CATIE</b><br>Academia/Centro de Investigación</br>
    <h5>   </h5>
    <img src="img/catie.jpeg" 
         alt="" 
         style="width: 60%; border-radius: 5px;"/>
    <p>
      <b>Persona postulante:</b><br>Anthony Gamboa Chavarría</br>
    </p>

    <p>
      <b>Cargo:</b><br>Especialista en Economía Agrícola y Agronegocios Sostenibles.</br>
    </p>

    <p>
      <b>Problematica especifica:</b><br>Débil capacidad técnica y metodológica de los técnicos extensionistas rurales en México, particularmente en los estados de Puebla y Oaxaca, para acompañar de forma efectiva a productores agropecuarios en la transición hacia agronegocios sostenibles, inclusivos y resilientes al cambio climático. Esta situación limitaba la adopción de tecnologías, el acceso a mercados diferenciados y la implementación de prácticas productivas sostenibles en cadenas de valor estratégicas como café, agave, cacao, maíz nativo, apicultura y pequeños rumiantes.</br>
    </p>
  </div>`);

L.marker([9.891159, -83.652109], {icon: CentroInvestigacion})
 .addTo(ceninvestigacion)
 .bindPopup(`<div style="max-width: 300px; text-align: left;">
    <b>CATIE</b><br>Academia/Centro de Investigación</br>
    <h5>   </h5>
    <img src="img/catie.jpeg" 
         alt="" 
         style="width: 60%; border-radius: 5px;"/>

    <p>
      <b>Persona postulante:</b><br>William Solano Sánchez</br>
    </p>

    <p>
      <b>Cargo:</b><br>Investigador.</br>
    </p>

    <p>
      <b>Problematica especifica:</b><br>Las variedades de café de la región centroamericana comparten una base genética muy reducida producto de cómo fue la dispersión del cultivo desde su origen. Esto causa una alta vulnerabilidad en la producción de café en la región, porque la tolerancia a plagas y enfermedades es igual en todos los materiales genéticos presentes en nuestros países.</br>
    </p>
  </div>`);

L.marker([13.30711, -87.861616], {icon: NoGubernamental})
 .addTo(orgubenamental)
 .bindPopup(`<div style="max-width: 300px; text-align: left;">
    <b>Visión Mundial El Salvador</b><br>Organizacion No Gubernamental</br>
    <h5>   </h5>
    <img src="img/mundial.png" 
         alt="" 
         style="width: 60%; border-radius: 5px;"/>

    <p>
      <b>Persona postulante:</b><br>Kenneth Rivera</br>
    </p>

    <p>
      <b>Cargo:</b><br>Gerente de Cambio Climático.</br>
    </p>

    <p>
      <b>Problematica especifica:</b><br>Acceso limitado a agua para cultivo y falta de aprovechamiento de los recursos existentes para la producción familiar.</br>
    </p>
  </div>`);

 L.marker([-41.017847, -73.272834], {icon:EmpresaPrivada})
 .addTo(emprivada)
 .bindPopup(`<div style="max-width: 300px; text-align: left;">
    <b>Viña Casa Klocker Prambs</b><br>Empresa Privada</br>
    <h5></h5>
    <img src="img/viña.jpg" 
         alt="" 
         style="width: 60%; border-radius: 5px;"/>

    <p>
      <b>Persona postulante:</b><br>Claudio López Klocker</br>
    </p>

    <p>
      <b>Cargo:</b><br>Viticultor.</br>
    </p>

    <p>
      <b>Problematica especifica:</b><br>La experiencia aborda la vulnerabilidad productiva y climática de pequeños agricultores frente al avance del cambio climático. En territorios como el Corredor Seco, la degradación de suelos, escasez hídrica y pérdida de oportunidades económicas agravan la migración rural. Esta iniciativa propone un modelo replicable de viticultura regenerativa, desarrollado en la cuenca del Llanquihue (Chile), que promueve prácticas sostenibles, diversificación productiva, asociatividad y adaptación climática mediante comunidades de práctica.</br>
    </p>
  </div>`);

 L.marker([15.91214, -88.448825], {icon: CentroInvestigacion})
 .addTo(ceninvestigacion)
 .bindPopup(`<div style="max-width: 300px; text-align: left;">
    <b>CATIE-WRI-BCIE</b><br>Academia/Centro de Investigación</br>
    <h5>   </h5>
    <img src="img/arbol.jpg" 
         alt="" 
         style="width: 60%; border-radius: 5px;"/>
  
    <p>
      <b>Persona postulante:</b><br>Estuardo Girón</br>
    </p>

    <p>
      <b>Cargo:</b><br>Coordinador Proyecto Refores-CATIE</br>
    </p>

    <p>
      <b>Problematica especifica:</b><br>La región se encuentra en el centro del corredor de huracanes de Centroamérica, donde las tormentas tropicales y los huracanes causan daños crecientes a los ecosistemas, los asentamientos y los medios de vida. Durante los últimos 60 años, unos 65 huracanes/tormentas tropicales y muchas más depresiones tropicales han afectado esta zona, y el número de veces que tocan tierra ha aumentado con el tiempo. La región también ha experimentado un proceso acelerado de degradación y pérdida de ecosistemas naturales. La pérdida de vegetación en esta región ha contribuido a altas tasas de erosión del suelo, causando deslizamientos de tierra e inundaciones durante períodos de fuertes lluvias, así como la sedimentación de ríos y manglares, lo que impacta directamente en los sectores del turismo, la agricultura y el comercio.</br>
    </p>
  </div>`);

// También puedes usar polígonos para zonas protegidas, por ejemplo:
const zonaProtegida = L.polygon([
  [12.8, -86.5],
  [12.7, -86.6],
  [12.75, -86.7]
]).addTo(mapa);
zonaProtegida.bindPopup("Zona Protegida Ejemplo");


const btnLeyenda = document.getElementById("toggle-leyenda");
const contenedorLeyenda = document.getElementById("leyenda");

btnLeyenda.addEventListener("click", () => {
  contenedorLeyenda.classList.toggle("oculto");
});

orgubenamental.addTo(mapa);
emprivada.addTo(mapa);
ceninvestigacion.addTo(mapa);

document.getElementById("togle-leyend").addEventListener("click", () => {
  document.getElementById("leyend").classList.toggle("ocult");
});

// Manejo de los checkboxes
document.getElementById("guber").addEventListener("change", function () {
  this.checked ? orgubenamental.addTo(mapa) : mapa.removeLayer(orgubenamental);
});

document.getElementById("priv").addEventListener("change", function () {
  this.checked ? emprivada.addTo(mapa) : mapa.removeLayer(emprivada);
});

document.getElementById("academia").addEventListener("change", function () {
  this.checked ? ceninvestigacion.addTo(mapa) : mapa.removeLayer(ceninvestigacion);
});


//L.control.measure({
  //primaryLengthUnit: 'kilometers',
  //secondaryLengthUnit: 'meters',
  //primaryAreaUnit: 'hectares',
  //secondaryAreaUnit: 'sqmeters',
  //activeColor: '#db4a29',
  //completedColor: '#2c7bb6',
  //position: 'topleft'
//}).addTo(mapa);

const capaMapa1 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

const capaMapa2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: '16'
});

const capaMapa3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

const capaMapa4 = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const miniaturas = document.querySelectorAll('.miniatura');

miniaturas.forEach(miniatura => {
  miniatura.addEventListener('click', () => {
    const mapaElegido = miniatura.getAttribute('data-map');


    mapa.removeLayer(capaMapa1);
    mapa.removeLayer(capaMapa2);
    mapa.removeLayer(capaMapa3);
    mapa.removeLayer(capaMapa4);


    if (mapaElegido === 'mapa1') mapa.addLayer(capaMapa1);
    else if (mapaElegido === 'mapa2') mapa.addLayer(capaMapa2);
    else if (mapaElegido === 'mapa3') mapa.addLayer(capaMapa3);
    else if (mapaElegido === 'mapa4') mapa.addLayer(capaMapa4);
    });
});


const centroInicial = [13.7, -88.9];
const zoomInicial = 6;

document.getElementById('btn-casita').addEventListener('click', () => {
 mapa.setView(centroInicial, zoomInicial);
});
