let row = document.querySelector('.container .row');
let search=document.querySelector(".search")
let input=document.querySelector("input")
let button=document.querySelector("button")
let check=false;
let text;
axios.get("https://api.tvmaze.com/shows")
  .then(res => {
    for (let i = 0; i < res.data.length; i++) {
      button.addEventListener("click",()=>{                   
      
        if(input.value==res.data[i].name
          || input.value==res.data[i].name.toUpperCase()
          ||input.value==res.data[i].name.toLowerCase() 
           ){
             text=input.value
          row.innerHTML = `<div class="col-3 mt-2">
          <div class="card h-100" style="width: 18rem;">
              <img class="card-img-top" src="${res.data[i].image.medium}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${res.data[i].name}</h5>
                <p class="card-text">${res.data[i].summary}</p>
                <a href="index2.html" class="btn btn-primary  " onclick="saveId(${id})">Show more</a>
              </div>
            </div>
        </div>`;
       check=true         
      }
      if(text!=input.value){
        check=false
      }
        if(!check && i==res.data.length-1 && input.value!="" ){
            row.innerHTML=`
            <p class="notfound"><i style="padding:30px" class="fa-regular fa-face-sad-tear"></i> "${input.value}" Not Found</p>`
           }
    })

    
      if(res.data[i].summary.length>200){
        res.data[i].summary=res.data[i].summary.substring(0,198)
      }
      let id = res.data[i].id;
       
      row.innerHTML += `<div class="col-3 mt-2">
        <div class="card h-100" style="width: 18rem;">
            <img class="card-img-top" src="${res.data[i].image.medium}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${res.data[i].name}</h5>
              <p class="card-text">${res.data[i].summary}</p>
              <a href="index2.html" class="btn btn-primary  " onclick="saveId(${id})">Show more</a>
            </div>
          </div>
      </div>`;
     
    }
   
  });
  

  // function showtext(id)
  // {
  // var text=responseData[id].summary.substring(200)
  // document.querySelector(".card-text").innerHTML=text;
  // console.log(text)
  // }
function saveId(id) {
  localStorage.setItem('selectedId', id);
}



