//houses

const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];


  //variable for houses
  var result = document.querySelector(".properties");
  var counter = document.querySelector("#counter");
  // variable for search
  var quantity = document.querySelector(".total-room");
  var meter1 = document.querySelector(".since");
  var meter2 = document.querySelector(".until");
  //varible global
  let html = "";
  
  

// show all the properties
 function drawHouses (houses){
    
    html = ""
    for (let house of houses){
    html += 
    `<div class="propertie">
        <div class="img"><img src= "${house.src}"></div>
       <section>
         <h5>${house.name}</h5>
         <div class="d-flex justify-content-between">
         <p>Cuartos: ${house.rooms}</p>
         <p>Metros: ${house.m}</p>
         </div>
         <p class="my-3">${house.description}</p>
         <button class="btn btn-info ">Ver más</button>
       </section> 
     </div>`
     const elem = 
  document.querySelector(".properties")
  elem.innerHTML = html
  }
 }
  drawHouses(propiedadesJSON)
  
 
//search
let button = document.querySelector(".busqueda")

button.addEventListener("click", () => {
    filter(Number(quantity.value),Number(meter1.value), Number(meter2.value));
})

// alert for the search
  function filter(quantity, min, max){
    

    if (quantity === 0 || max === 0 || min === 0){
        alert("Por favor rellena todos los espacios")
    }
     
    //filters  
    let searchResult = propiedadesJSON.filter((house) => house.rooms >= quantity && house.m >= min && house.m <= max);
       console.log({searchResult})
       counter.innerHTML = searchResult.length

    if(searchResult.length==0){
        html+= `<h1>Sin resultados</h1>`;
       }
    drawHouses(searchResult)
  }

  



