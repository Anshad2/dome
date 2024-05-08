

var countries=[]


// api
let url ="https://restcountries.com/v2/all/"

fetch(url).then(res=>res.json()).then(data=>{
// shadow copy
  countries=[...data]

  populateSelectBox(countries)

  populateRegion(countries)

  displayCountries(countries)

})


populateSelectBox(countries)

function populateSelectBox(countries){

    let selectBox=document.querySelector("#id_select")

    for(let c of countries){

        let countryName=c.name;
        // create option tag
        let tag=document.createElement("option")

        tag.value=countryName

        tag.text=countryName

        selectBox.appendChild(tag)
    }
}

function dispalyCountryByName(event){

  let countryNmae = event.target.value

  let data = countries.find(c=>c.name==countryNmae)

  console.log(data);

  let htmlData=`<div class="card" style="width: 100%;">
    <img src="${data.flag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Capital : ${data.capital}</li>
      <li class="list-group-item">Currencies : ${data.currencies && data.currencies[0].name}</li>
      <li class="list-group-item">Poppulation : ${data.population}</li>
    </ul>
  </div>`

document.querySelector("#root").innerHTML=htmlData

}


populateRegion(countries)

function populateRegion(countries){

  let allRegions=new Set(countries.map(c=>c.region))

  console.log(allRegions);

  let selectBox = document.querySelector("#id_region")

  for(let r of allRegions){

    let optionTag = document.createElement("option")

    optionTag.value=r

    optionTag.text=r

    selectBox.appendChild(optionTag)
  }


}


function dispalyCountryByRegion(event){

  let regionName = event.target.value

  let data =countries.filter(c=>c.region==regionName)

  displayCountries(data)


}

function displayCountries(data){

  let htmlData=``
      
  for(let c of data){

        htmlData+=`
            <div class="col-4 mt-3">
            <div class="card" style="width: 18rem;">
                <img src="${c.flag}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${c.name}</h5>
                </div>
              </div>
            </div>
        `
  }
  document.querySelector("#root").innerHTML=htmlData 
}