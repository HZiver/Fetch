// index2.js
let detail = document.querySelector('div');
let selectedId = localStorage.getItem('selectedId');

axios.get("https://api.tvmaze.com/shows/" + selectedId)
  .then(res => {
    console.log(res.data)
    detail.innerHTML += `<div>
        <img src="${res.data.image.original}">
          <table>
          <tr>
          <td class="field">Name</td>
          <td class="data">${res.data.name}</td>
          </tr>
          <tr>
          <td class="field">Country</td>
          <td class="data">${res.data.network.country.name}</td>
          </tr>
          <tr>
          <td class="field">Average runtime</td>

          <td class="data">${res.data.averageRuntime}</td>
          </tr>
          <tr>
          <td class="field">Schedule</td>
          <td class="data">${res.data.schedule.days}, ${res.data.schedule.time}</td>
          </tr>
          <tr>
          <td class="field">Ended</td>
          <td class="data">${res.data.ended}</td>
          </tr>
          <tr>
          <td class="field">Genres</td>
          <td class="data">${res.data.genres}</td>
          </tr>
          <tr>
          <td class="field">Language</td>
          <td class="data">${res.data.language}</td>
          </tr>
          <tr>
          <td class="field">Rating</td>
          <td class="data">${res.data.rating.average}</td>
          </tr>
          <tr>
          <td class="field">Status</td>
          <td class="data">${res.data.status}</td>
          </tr>
          <tr>
          <td class="field">Premiered</td>
          <td class="data">${res.data.premiered}</td>
          </tr>
          </table>
         <br>
         <p class="summary">${res.data.summary} </p>
        </div>`;

        // if(res.data.summary.length<140){
        //  summary=document.querySelector('.summary')
        //  summary.style.fontSize ="xx-large"
        // }
  });
