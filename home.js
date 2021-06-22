let loggedin = localStorage.getItem("loggedin");
if(loggedin == null){}
else{
  let navList = document.getElementById("navList");
  let list = document.createElement("li");
  list.innerText = "Log Out";
  navList.append(list);
  list.onclick = function (){
    localStorage.removeItem("loggedin");
    document.body.style.cursor = "progress";
    setTimeout(function (){
      document.body.style.cursor = "default";
      location.reload();
    },2000)
  }
    document.body.style.backgroundSize = "contain"
    let radioip = document.getElementById('slideNum');
    radioip.innerHTML = `<input type="radio" name="slideNum" value="0" id="myRadio1">
                         <input type="radio" name="slideNum" value="1" id="myRadio2">
                         <input type="radio" name="slideNum" value="2" id="myRadio3">
                         <input type="radio" name="slideNum" value="3" id="myRadio4">`;

    let sortbtn = document.getElementById("subHeading");
    sortbtn.innerHTML = `<h2>Top Picks</h2>
                          <div id="sort_btn">
                              <button class="btn1" onclick="sortLH()">Ratings Low to High</button>
                              <button class="btn2" onclick="sortHL()">Ratings High to Low</button>
                          </div>`;
    let div = document.getElementById("movies");
    let images = [
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6362/936362-h",
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1819/911819-h",
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5084/875084-h",
      "https://i1.wp.com/www.heyuguys.com/images/2015/10/star-wars-the-force-awakens-poster-landscape.jpg?fit=1536%2C864&ssl=1",
    ];
    let i=1;

    div.innerHTML = `<img id = "slideshow" src = "${images[0]}">`;
    document.getElementById("myRadio" + i).checked = true;

    let radio = document.getElementsByTagName('input');
    setInterval(function () {
        // console.log(radio[i].checked);
        document.getElementById("myRadio" + (i+1)).checked = true;
        div.innerHTML = `<img id = "slideshow" src = "${images[i]}">`;

        i++;
        if(i==4) i=0;
    },5000)
    console.log('hi')


 var moviesJSON = [
   {
     name: "Army of the Dead",
     date: 2021,
     url: "https://www.themoviedb.org/t/p/original/z8CExJekGrEThbpMXAmCFvvgoJR.jpg",
     rating: 5.8,
   },
   {
     name: "The Social Network",
     date: 2010,
     url: "https://www.themoviedb.org/t/p/original/4TZt6MwiLWQaLMGQ9a1nEbk1LIk.jpg",
     rating: 7.7,
   },
   {
     name: "Wanda-Vision",
     date: 2021,
     url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
     rating: 8.2,
   },
   {
     name: "Inception",
     date: 2010,
     url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
     rating: 8.7,
   },
   {
     name: "Avengers:Infinity war",
     date: 2019,
     url: "https://image.tmdb.org/t/p/w300/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
     rating: 8.4,
   },
   {
     name: "The Shawshank Redemption",
     date: 1994,
     url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
     rating: 9.3,
   },
   {
     name: "Vishwaroopam",
     date: 2013,
     url: "https://www.themoviedb.org/t/p/original/6j0ie6qImOH0ndS7uaZb4879PwC.jpg",
     rating: 8.1,
   },
   {
     name: "Interstellar",
     date: 2014,
     url: "https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
     rating: 8.6,
   },
   {
     name: "The Godfather",
     date: 1972,
     url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
     rating: 9.2,
   },
 ];

 function appendMovies(moviesJSON) {
 let topMovies = document.getElementById('topMovies');
 topMovies.innerHTML = null;
 moviesJSON.forEach(function (ele) {
     let div = document.createElement('div');

     div.innerHTML = `<div class="movie-card">
                        <img src="${ele.url}" alt = "Movies Poster">
                        <div class="desc">
                        <h3>${ele.name}</h3>
                        <div class="rating">
                            <p>${ele.date}</p>
                            <div id="points">
                            <img src="https://img.icons8.com/color/48/000000/imdb.png" alt="" style="width: 50px; height: 50px; border-radius: 90px;">
                            <p>&#11088; ${ele.rating}</p>  
                            </div>
                        </div>
                        </div>
                        </div>`;

          topMovies.append(div)
 })
 }
 
 appendMovies(moviesJSON);


 function sortLH() {
   moviesJSON = moviesJSON.sort(function(a,b){
     return a.rating - b.rating;
   });
   appendMovies(moviesJSON);
 }
 function sortHL() {
   moviesJSON = moviesJSON.sort(function (a, b) {
     return b.rating - a.rating;
   });
   appendMovies(moviesJSON);
 }
}