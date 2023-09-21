



const div =document.createElement("div");
div.setAttribute("id","FisrtDiv");

div.innerHTML=` <div class="p-3 mb-2 bg-success text-white container-fluid ">
<h1 id="heading">Get the Nationality Based On The Name</h1>
<div id="inputbox">
<div class=" input-group  "id="input">
  <span class="input-group-text" id="basic-addon1" id="Search"  style="color: black;background-color: orange;" onclick="searchHandler()" >Search</span>
  <input type="text" class="form-control text-dark text-primary class="fs-6""  placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1"id="searchInput" >
</div>
</div>
<div id="text " class="text-center text-sm-left ">
<h5 id="country1" class="p-3 "></h5>
<h5 id="country2" class="p-3"></h5>
</div>
<div>
  <img style="height:510px" src="https://th.bing.com/th/id/R.98be59118a65cefdf258425d8747b0bb?rik=2%2b5RNP26Vb0EKA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fworld_map%2fworld_map_PNG14.png&ehk=PkuPqhVxvUQl1R1LrF%2bw8luyCSQlC6dyH5osC%2brFOBw%3d&risl=&pid=ImgRaw&r=0" alt="">
</div>
</div>`


document.body.appendChild(div);

const FirstCcuntry= document.getElementById('country1')
const secondCountry = document.getElementById('country2')

let searchName= '';


searchHandler= async()=> {
    
    try {
        searchName = document.getElementById('searchInput').value
       
const allCountryUrl="https://api.nationalize.io?name="
        let url = await fetch(`${allCountryUrl}${searchName}`)
        let response = await url.json();

        for (let i = 0; i <  response.country.length - 3; i++) {
            getAllRecord( response.country[i].country_id,  response.country[i].probability)

        }
        res.length = 0;
        probability.length = 0;
        inputchecking();
    }
    catch (err) {
        console.log(err)
    }
}

let res = [];
let probability = [];




const getAllRecord=async(id,prob) =>{

    const allCountryUrl="https://restcountries.com/v3.1/all";
    let countryNames = await fetch(`${allCountryUrl}`)
    let response = await countryNames.json();

   
    let marray = response.map((response) => {
        return response.cca2
    })
    
  
    probability.push(prob)
   
  
    for (let i = 0; i <  marray .length; i++) {
        if (id==  marray [i]) {
            res.push(response[i].name.common)
        }
    }

    FirstCcuntry.innerHTML = `The person Name is <mark id="marks">${searchName.toUpperCase()}</mark> from ${res[0].toUpperCase()} with the Probability of ${probability[0]}`;
    secondCountry.innerHTML = `and from ${res[1]} with the Probability of ${probability[1]}`;   
};

const inputchecking=()=>{

const getInput=document.getElementById("searchInput").value
if(!isNaN(getInput)){

    alert("Enter your Valid Name First")
}
    if(getInput.includes(" ")){
        alert("Enter Your Name Without Space")
    };

}
