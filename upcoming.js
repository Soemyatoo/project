/*For ThorMovie*/
const bodyTag =  document.querySelector('body');
const thorMovieCardTag = document.querySelector('.thorMovieCard');
const batmanjsTag = document.querySelector('.batmanjs');





let HTMLElementTag = '';
const ThirdFunction = () => {
  const thorMovie = [
    {
    image:'thor-poster.jpg',
    moveTitle: 'THOR THE DARK WORLD',
    MovieInfo: {
       rating: 'ratings/rating-50.png',
       Count:'8.0(13.567) . 2020 | 1hour 50 minutes | Sci-fi'
    },
    MovieSummary: 'In ancient times, the gods of Asgard fought and won a war against an evil race known as the Dark Elves. The survivors were neutralized, and their ultimate weapon -- the Aether -- was buried in a secret location.'
  },
  ]
  
    bodyTag.classList.add('chg-bgForThor')
    thorMovie.forEach((movieInfo) => {
     HTMLElementTag += `
     <!--Header-->
     <div class="navbar-ContainerMother">
      <div class="navbar-container">
       <div>
        <a href="homePage.html"><img src="Image/photo_2025-01-19_21-02-24_processed.jpg" class="flimFlex-img"></a>
          
       </div>
       <div>
          <a href="createacc.html" class="aTag">
            <img src="Image/register-man.jpg" class="register-img">
            <span  class="register-span">Register</span>
          </a>
          <a href="loginPage.html"  class="second-Tag aTag">
            <img src="Image/login-user.webp" class="login-user">
             <span class="login-span">Login</span>
          </a>
       </div>
    </div>
    
    <div class="nextNavBar-Container">
      <div>
        <a href="homePage.html">
          <img src="Image/home-icon.png" class="home-icon">
        </a>
        
        
      </div>
        <div>
          <a href="cinemaPage.html" class="link">Cinemas</a>
          <a href="movies.html" class="link">Movies</a>
        
        <a href="upcomingPage/upcoming.html" class="link">Upcoming</a>
        <a href="contant.html" class="link">Contact Us</a>
        </div>
    </div>
    </div>
     <div class="body-ImageContainer">
        <div class="movieOFInfo">
            <h2 class="textForMovieName">${movieInfo.moveTitle}</h2>
          <img src="ratings/rating-50.png" alt="rating-05" class="rating-05">
          <span class="movieInfo-text">${movieInfo.MovieInfo.Count}</span>
  
          <div class="Spider-ManOFInfo">${movieInfo.MovieSummary}</div>
  
        </div>
        <!--Start Movie Card Container-->
       <div class="movie-card">
          <!--First Movie-->
           <div>
            <div>
              <img src="Image/Batman-card.jpg" style="width: 8rem;
              height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
           <!--Second Movie-->
           <div>
            <div>
              <img src="Image/DeaDPOOL-card.jpg" style="width: 8rem;
              height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
           <!--Third Movie-->
           <div>
            <div>
              <img src="Image/thor-card.jpg" style="width: 8rem;
              margin: 0px 30px;
              border-radius: 5px;" class="thorMovieCard hover-Tag">
            </div>
           </div>
           <!--Four Movie-->
           <div>
            <div>
              <img src="Image/spiderman-card.jfif" style="width: 8rem;
              height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
           <!--Five Movie-->
           <div>
            <div>
              <img src="Image/vikvinges-card.jpg" style="width: 8rem;
              height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
           <!--Six-->
           <div>
            <div>
              <img src="Image/topgun-card.jpg" style="width: 8rem;
              height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
           <!--seven-->
           
           <div>
            <div>
              <img src="Image/8 mile-card.jpg" style="width: 8rem;height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
        </div>`
      document.querySelector('body').innerHTML = HTMLElementTag
    })
}

thorMovieCardTag.addEventListener('click' , ThirdFunction);

/*For BatmanMovie*/

let HTMLElementTagTwo = '';
const Myfunction = () => {
  const BatmanMovieArr = [
    {
    image:'batman-poster.jpg',
    moveTitle: 'THE BATMAN',
    MovieInfo: {
       rating: 'ratings/rating-50.png',
       Count:'8.3(13.667) . 2022 | 2hour 56 minutes | Action/Crime'
    },
    MovieSummary: 'a young Bruce Wayne, still early in his Batman career, investigates a series of gruesome murders by a sadistic serial killer known as the Riddler, who targets corrupt Gotham City officials, forcing Batman to delve deep into.'
  },
  ]
    bodyTag.classList.add('chg-bgForBatman')
    BatmanMovieArr.forEach((movieInfo) => {
     HTMLElementTagTwo += `
     <!--Header-->
     <div class="navbar-ContainerMother">
      <div class="navbar-container">
       <div>
        <a href="homePage.html"><img src="Image/photo_2025-01-19_21-02-24_processed.jpg" class="flimFlex-img"></a>
          
       </div>
       <div>
          <a href="createacc.html" class="aTag">
            <img src="Image/register-man.jpg" class="register-img">
            <span  class="register-span">Register</span>
          </a>
          <a href="loginPage.html"  class="second-Tag aTag">
            <img src="Image/login-user.webp" class="login-user">
             <span class="login-span">Login</span>
          </a>
       </div>
    </div>
    
    <div class="nextNavBar-Container">
      <div>
        <a href="homePage.html">
          <img src="Image/home-icon.png" class="home-icon">
        </a>
        
        
      </div>
        <div>
          <a href="cinemaPage.html" class="link">Cinemas</a>
          <a href="movies.html" class="link">Movies</a>
        
        <a href="upcomingPage/upcoming.html" class="link">Upcoming</a>
        <a href="contant.html" class="link">Contact Us</a>
        </div>
    </div>
    </div>
     <div class="body-ImageContainer">
        <div class="movieOFInfo">
            <h2 class="textForMovieName">${movieInfo.moveTitle}</h2>
          <img src="ratings/rating-50.png" alt="rating-05" class="rating-05">
          <span class="movieInfo-text">${movieInfo.MovieInfo.Count}</span>
  
          <div class="Spider-ManOFInfo">${movieInfo.MovieSummary}</div>
  
        </div>
        <!--Start Movie Card Container-->
       <div class="movie-card">
          <!--First Movie-->
           <div>
            <div>
              <img src="Image/Batman-card.jpg" style="width: 8rem;
              height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
           <!--Second Movie-->
           <div>
            <div>
              <img src="Image/DeaDPOOL-card.jpg" style="width: 8rem;
              height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
           <!--Third Movie-->
           <div>
            <div>
              <img src="Image/thor-card.jpg" style="width: 8rem;
              margin: 0px 30px;
              border-radius: 5px;" class="thorMovieCard hover-Tag">
            </div>
           </div>
           <!--Four Movie-->
           <div>
            <div>
              <img src="Image/spiderman-card.jfif" style="width: 8rem;
              height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
           <!--Five Movie-->
           <div>
            <div>
              <img src="Image/vikvinges-card.jpg" style="width: 8rem;
              height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
           <!--Six-->
           <div>
            <div>
              <img src="Image/topgun-card.jpg" style="width: 8rem;
              height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
           <!--seven-->
           
           <div>
            <div>
              <img src="Image/8 mile-card.jpg" style="width: 8rem;height: 11.4rem;
              margin: 0px 30px;
              border-radius: 5px;" class="hover-Tag">
            </div>
           </div>
        </div>`
      document.querySelector('body').innerHTML = HTMLElementTagTwo;
    })
}

batmanjsTag.addEventListener('click' ,Myfunction );

