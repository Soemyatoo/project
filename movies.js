const theMegFunction = () => {
    const movieINfo = [{
      image: 'Image/MovieInfo-the meg2.jpg',
      movieName: 'THE MEG2',
      MovieOfSummary: `Summaries. A research team's journey into the depths of the ocean turns into chaos when a mining operation forces them into a battle for survival, facing off against Megalodons and relentless environmental marauders.`,
    }]
    let HTMLGenterated = '';
    movieINfo.forEach((movies) => {
      HTMLGenterated += `<div class="navbar-ContainerMother">
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
    <!--Body-->

  <div class="movie-info-Container">
      <div class="Movie-Card-Info">
        <div>
          <img src="${movies.image}" class="card-img-top cut-Info" >
        </div>
      </div>
        <div class="adjust-cardINFO">
          <div class="info-Container">
              <div>
                  <div class="adjust-width">
                    <div class="changeStyle-Title">${movies.movieName}</div>

                    <div class="movie-INFO">${movies.MovieOfSummary}</div>

                              <div class="Movie-Div-Container">
                                <!--TimeLine-->
                                <div class="time-LineCon">
                                  <div>Sci-fi/Action</div>
                                  <div>1hr 56min</div>
                                </div>

                                <!--Cast-->
                                <div class="center">
                                  <div class="cc One">Cast</div>
                                  <div class="cc">-CLiff Curtis</div>
                                  <div class="cc">-Jason Statham </div>
                                  <div class="cc">-Wu Jing</div>
                                </div>

                                <!--Director-->
                                <div>
                                  <div class="director">Director - The Trench</div>
                                </div>
                              </div>     
                    
                  <div>
                      
                    
                    
                    
                  </div>

                </div>
              </div>
          </div>
        </div>
      </div>
    
      <!--Cineme List-->
    
    <div class="headerOfCinemas">Cinemas List</div>
    
    <div class="cinema-card-gird">
     <!--Yangon-JC-->
          <div class="cinemasOfContainer ">
            <div class="leftRightContainer">
                <div class="cinemaPhoto">
                    <div class="cinemaImageContainer">
                      <!--Juncity-Cinema-->
                      <img src="Image/juncity-cinema.jpg" class="cinema-Image">
                    </div>
                </div>
                <div class="cinemasOfInfo">
                  <div>
                    <div class="cinemaofTitle">
                      <div>Yangon</div>
                    <div class="website-name">FILM FLEX [Junction City]</div>
                    </div>
                    
                    <div class="bookBtnContainer">
                      <a href="BookSeatForTheMeg2.html">
                              <button type="button" class="btn btn-danger bookBtn">Book</button>
                      <button type="button" class="btn btn-danger bookBtn">Buy</button>
                      </a>
                  
                     
                       
                    </div>
                   
                  </div>
                </div>
            </div>
            <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Yangon</div>
                  <div class="website-name">FILM FLEX [Junction Square]</div>
                  </div>
                  
    
                  <div class="bookBtnContainer">

                    <a href="BookSeatForTheMeg2JS.html">               
                      <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button> </a>
 
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
    
    
      <!--Yangon-JS-->  
           <div class="cinemasOfContainer">
           <div class="leftRightContainer">
                <div class="cinemaPhoto">
                    <div class="cinemaImageContainer">
                      <!--Juncity-Cinema-->
                      <img src="Image/mwlamyine-cinema.jpg" class="cinema-Image">
                    </div>
                </div>
                <div class="cinemasOfInfo">
                  <div>
                    <div class="cinemaofTitle">
                      <div>Mawlamyine</div>
                    <div class="website-name">FILM FLEX [Ocean Center Mawlamyine]</div>
                    </div>
                    
      
                    <div class="bookBtnContainer">
                      <a href="BookSeatForTheMeg2OCM.html">  
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                      <button type="button" class="btn btn-danger bookBtn">Buy</button>
                      </a>
                   
                    </div>
                   
                  </div>
                </div>
            </div>
          <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/yg-city Mall.jpg" class="cinema-Image">
                      </div>
                  </div>
                  <div class="cinemasOfInfo">
                    <div>
                      <div class="cinemaofTitle">
                        <div>Yangon</div>
                      <div class="website-name">FILM FLEX [City Mall St.John]</div>
                      </div>
                      
        
                      <div class="bookBtnContainer">
                        <a href="BookSeatForTheMeg2CMSJ.html"> 
                                   <button type="button" class="btn btn-danger bookBtn">Book</button>
                        <button type="button" class="btn btn-danger bookBtn">Buy</button>
                        </a>
                
                      </div>
                     
                    </div>
                  </div>
              </div>
           </div>
      <!--Mawlamyine-Ocean-->
           <div class="cinemasOfContainer">
            <div class="leftRightContainer">
                    <div class="cinemaPhoto">
                        <div class="cinemaImageContainer">
                          <!--Juncity-Cinema-->
                          <img src="Image/ny-cinema.jpg" class="cinema-Image">

                        </div>
                      </div>
                      <div class="cinemasOfInfo">
                        <div>
                          <div class="cinemaofTitle">
                            <div>NayPyiTaw</div>
                          <div class="website-name">FILM FLEX [Ocean Center Ottarathiri]</div>
                          </div>
                          
            
                          <div class="bookBtnContainer">

                            <a href="BookSeatForTheMeg2OCO.html">  
                              
                                  <button type="button" class="btn btn-danger bookBtn">Book</button>
                            <button type="button" class="btn btn-danger bookBtn">Buy</button>
                              
                             
                            </a>
                            
                          </div>
                         
                        </div>
                      </div>
                  </div>
                  <div class="leftRightContainer">
                    <div class="cinemaPhoto">
                        <div class="cinemaImageContainer">
                          <!--Juncity-Cinema-->
                          <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                        </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>Mandalay</div>
                        <div class="website-name">FILM FLEX [Ocean Center Mingalar Mandalay]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">
                          <a href="BookSeatForTheMeg2OCMM.html">
                                 <button type="button" class="btn btn-danger bookBtn">Book</button>
                          <button type="button" class="btn btn-danger bookBtn">Buy</button>
                          </a>
                      
                        </div>
                       
                      </div>
                    </div>


                </div>
               </div>
               <div class="cinemasOfContainer">
                <div class="leftRightContainer">
                        <div class="cinemaPhoto">
                            <div class="cinemaImageContainer">
                              <!--Juncity-Cinema-->
                              <img src="Image/lannmadaw-mawtin.jpg" class="cinema-Image">
                            </div>
                        </div>
                        <div class="cinemasOfInfo">
                          <div>
                            <div class="cinemaofTitle">
                              <div>Yangon</div>
                            <div class="website-name">FILM FLEX [Maw Tin]</div>
                            </div>
                            
              
                            <div class="bookBtnContainer">
                              <a href="BookSeatForTheMeg2MT.html">
                                <button type="button" class="btn btn-danger bookBtn">Book</button>
                              
                                <button type="button" class="btn btn-danger bookBtn">Buy</button>
                              </a>
                            </div>
                           
                          </div>
                        </div>
                    </div>
                    <div class="leftRightContainer">
                      <div class="cinemaPhoto">
                          <div class="cinemaImageContainer">
                            <!--Juncity-Cinema-->
                            <img src="Image/ny-cinema.jpg" class="cinema-Image">
                          </div>
                      </div>
                      <div class="cinemasOfInfo">
                        <div>
                          <div class="cinemaofTitle">
                            <div>NayPyiTaw</div>
                          <div class="website-name">FILM FLEX [Junction Centre Nay Pyi Taw]</div>
                          </div>
                          
            
                          <div class="bookBtnContainer">
                            <a href="BookSeatForTheMeg2CNPT.html">
                              <button type="button" class="btn btn-danger bookBtn">Book</button>
                             
                              <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            </a>
                          </div>
                         
                        </div>
                      </div>
                  </div>
                 </div>
    `
    document.querySelector('.Mother-container').innerHTML = HTMLGenterated;
    })
}

const theNunFunction = () => {
  const movieINfo = [{
    image: 'Image/MovieINFO-the nun.jpg',
    movieName: 'THE Nun',
    MovieOfSummary: `When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together, they uncover the order's unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of a demonic nun.`,
  }]
  let HTMLGenterated = '';
  movieINfo.forEach((movies) => {
    HTMLGenterated += `<div class="navbar-ContainerMother">
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
  <!--Body-->

<div class="movie-info-Container">
    <div class="Movie-Card-Info">
      <div>
        <img src="${movies.image}" class="card-img-top cut-Info" >
      </div>
    </div>
      <div class="adjust-cardINFO">
        <div class="info-Container">
            <div>
                <div class="adjust-width">
                  <div class="changeStyle-Title">${movies.movieName}</div>

                  <div class="movie-INFO">${movies.MovieOfSummary}</div>

                            <div class="Movie-Div-Container">
                              <!--TimeLine-->
                              <div class="time-LineCon">
                                <div>Horror/Mystery</div>
                                <div>1hr 36min</div>
                              </div>

                              <!--Cast-->
                              <div class="center">
                                <div class="cc One">Cast</div>
                                <div class="cc">-Taissa Farmiga</div>
                                <div class="cc">-Bonnie Aarons </div>
                                <div class="cc">-Vera Farmiga </div>
                              </div>

                              <!--Director-->
                              <div>
                                <div class="director">Director - Corin Hardy</div>
                              </div>
                            </div>     
                  
                <div>
                    
                  
                  
                  
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  
    <!--Cineme List-->
  
  <div class="headerOfCinemas">Cinemas List</div>
  
  <div class="cinema-card-gird">
   <!--Yangon-JC-->
        <div class="cinemasOfContainer ">
          <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/juncity-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Yangon</div>
                  <div class="website-name">FILM FLEX [Junction City]</div>
                  </div>
                  
                  <div class="bookBtnContainer">
                    <a href="BookSeatForTheNun.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                
                   
                     
                  </div>
                 
                </div>
              </div>
          </div>
          <div class="leftRightContainer">
            <div class="cinemaPhoto">
                <div class="cinemaImageContainer">
                  <!--Juncity-Cinema-->
                  <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                </div>
            </div>
            <div class="cinemasOfInfo">
              <div>
                <div class="cinemaofTitle">
                  <div>Yangon</div>
                <div class="website-name">FILM FLEX [Junction Square]</div>
                </div>
                
  
                <div class="bookBtnContainer">

                  <a href="BookSeatForTheNumForJS.html">               
                    <button type="button" class="btn btn-danger bookBtn">Book</button>
                  <button type="button" class="btn btn-danger bookBtn">Buy</button> </a>

                </div>
               
              </div>
            </div>
          </div>
        </div>
  
  
    <!--Yangon-JS-->  
         <div class="cinemasOfContainer">
         <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/mwlamyine-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Mawlamyine</div>
                  <div class="website-name">FILM FLEX [Ocean Center Mawlamyine]</div>
                  </div>
                  
    
                  <div class="bookBtnContainer">
                    <a href="BookSeatForTheNumForMaw.html">  
                          <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                 
                  </div>
                 
                </div>
              </div>
          </div>
        <div class="leftRightContainer">
                <div class="cinemaPhoto">
                    <div class="cinemaImageContainer">
                      <!--Juncity-Cinema-->
                      <img src="Image/yg-city Mall.jpg" class="cinema-Image">
                    </div>
                </div>
                <div class="cinemasOfInfo">
                  <div>
                    <div class="cinemaofTitle">
                      <div>Yangon</div>
                    <div class="website-name">FILM FLEX [City Mall St.John]</div>
                    </div>
                    
      
                    <div class="bookBtnContainer">
                      <a href="BookSeatForTheNumForCMSJ.html"> 
                                 <button type="button" class="btn btn-danger bookBtn">Book</button>
                      <button type="button" class="btn btn-danger bookBtn">Buy</button>
                      </a>
              
                    </div>
                   
                  </div>
                </div>
            </div>
         </div>
    <!--Mawlamyine-Ocean-->
         <div class="cinemasOfContainer">
          <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/ny-cinema.jpg" class="cinema-Image">

                      </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Ocean Center Ottarathiri]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">

                          <a href="BookSeatForTheNumOCO.html">  
                            
                                <button type="button" class="btn btn-danger bookBtn">Book</button>
                          <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            
                           
                          </a>
                          
                        </div>
                       
                      </div>
                    </div>
                </div>
                <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                      </div>
                  </div>
                  <div class="cinemasOfInfo">
                    <div>
                      <div class="cinemaofTitle">
                        <div>Mandalay</div>
                      <div class="website-name">FILM FLEX [Ocean Center Mingalar Mandalay]</div>
                      </div>
                      
        
                      <div class="bookBtnContainer">
                        <a href="BookSeatForTheNumForOCMM.html">
                               <button type="button" class="btn btn-danger bookBtn">Book</button>
                        <button type="button" class="btn btn-danger bookBtn">Buy</button>
                        </a>
                    
                      </div>
                     
                    </div>
                  </div>


              </div>
             </div>
             <div class="cinemasOfContainer">
              <div class="leftRightContainer">
                      <div class="cinemaPhoto">
                          <div class="cinemaImageContainer">
                            <!--Juncity-Cinema-->
                            <img src="Image/lannmadaw-mawtin.jpg" class="cinema-Image">
                          </div>
                      </div>
                      <div class="cinemasOfInfo">
                        <div>
                          <div class="cinemaofTitle">
                            <div>Yangon</div>
                          <div class="website-name">FILM FLEX [Maw Tin]</div>
                          </div>
                          
            
                          <div class="bookBtnContainer">
                            <a href="BookSeatForTheNumMT.html">
                              <button type="button" class="btn btn-danger bookBtn">Book</button>
                          
                              <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            </a>
                          </div>
                         
                        </div>
                      </div>
                  </div>
                  <div class="leftRightContainer">
                    <div class="cinemaPhoto">
                        <div class="cinemaImageContainer">
                          <!--Juncity-Cinema-->
                          <img src="Image/ny-cinema.jpg" class="cinema-Image">
                        </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Junction Centre Nay Pyi Taw]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">
                          <a href="BookSeatForTheNumJCNPT.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                           
                            <button type="button" class="btn btn-danger bookBtn">Buy</button>
                          </a>
                        </div>
                       
                      </div>
                    </div>
                </div>
               </div>
  `
  document.querySelector('.Mother-container').innerHTML = HTMLGenterated;
  })
}

const slitherFunction = () => {
  const movieINfo = [{
    image: 'Image/MovieInfo-Slither.jpg',
    movieName: 'Slither',
    MovieOfSummary: `Plot. A meteorite brings a malevolent, sentient extraterrestrial parasite to Earth. The parasite enters the town of Wheelsy, South Carolina, where it infects wealthy resident Grant by taking over his body and absorbing his mind.`,
  }]
  let HTMLGenterated = '';
  movieINfo.forEach((movies) => {
    HTMLGenterated += `<div class="navbar-ContainerMother">
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
  <!--Body-->

<div class="movie-info-Container">
    <div class="Movie-Card-Info">
      <div>
        <img src="${movies.image}" class="card-img-top cut-Info" >
      </div>
    </div>
      <div class="adjust-cardINFO">
        <div class="info-Container">
            <div>
                <div class="adjust-width">
                  <div class="changeStyle-Title">${movies.movieName}</div>

                  <div class="movie-INFO">${movies.MovieOfSummary}</div>

                            <div class="Movie-Div-Container">
                              <!--TimeLine-->
                              <div class="time-LineCon">
                                <div>Horror/Sci-fi</div>
                                <div>1hr 35min</div>
                              </div>

                              <!--Cast-->
                              <div class="center">
                                <div class="cc One">Cast</div>
                                <div class="cc">-Gregg Henry</div>
                                <div class="cc">-Brenda James</div>
                                <div class="cc">-Don Thompson </div>
                              </div>

                              <!--Director-->
                              <div>
                                <div class="director">Director -James Gunn </div>
                              </div>
                            </div>     
                  
                <div>
                    
                  
                  
                  
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  
    <!--Cineme List-->
  
  <div class="headerOfCinemas">Cinemas List</div>
  
  <div class="cinema-card-gird">
   <!--Yangon-JC-->
        <div class="cinemasOfContainer ">
          <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/juncity-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Yangon</div>
                  <div class="website-name">FILM FLEX [Junction City]</div>
                  </div>
                  
                  <div class="bookBtnContainer">
                    <a href="BookSeatForSlither.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                
                   
                     
                  </div>
                 
                </div>
              </div>
          </div>
          <div class="leftRightContainer">
            <div class="cinemaPhoto">
                <div class="cinemaImageContainer">
                  <!--Juncity-Cinema-->
                  <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                </div>
            </div>
            <div class="cinemasOfInfo">
              <div>
                <div class="cinemaofTitle">
                  <div>Yangon</div>
                <div class="website-name">FILM FLEX [Junction Square]</div>
                </div>
                
  
                <div class="bookBtnContainer">

                  <a href="BookSeatForSlitherJS.html">               
                    <button type="button" class="btn btn-danger bookBtn">Book</button>
                  <button type="button" class="btn btn-danger bookBtn">Buy</button> </a>

                </div>
               
              </div>
            </div>
          </div>
        </div>
  
  
    <!--Yangon-JS-->  
         <div class="cinemasOfContainer">
         <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/mwlamyine-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Mawlamyine</div>
                  <div class="website-name">FILM FLEX [Ocean Center Mawlamyine]</div>
                  </div>
                  
    
                  <div class="bookBtnContainer">
                    <a href="BookSeatForSlitherOCM.html">  
                          <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                 
                  </div>
                 
                </div>
              </div>
          </div>
        <div class="leftRightContainer">
                <div class="cinemaPhoto">
                    <div class="cinemaImageContainer">
                      <!--Juncity-Cinema-->
                      <img src="Image/yg-city Mall.jpg" class="cinema-Image">
                    </div>
                </div>
                <div class="cinemasOfInfo">
                  <div>
                    <div class="cinemaofTitle">
                      <div>Yangon</div>
                    <div class="website-name">FILM FLEX [City Mall St.John]</div>
                    </div>
                    
      
                    <div class="bookBtnContainer">
                      <a href="BookSeatForSlitherCMSJ.html"> 
                                 <button type="button" class="btn btn-danger bookBtn">Book</button>
                      <button type="button" class="btn btn-danger bookBtn">Buy</button>
                      </a>
              
                    </div>
                   
                  </div>
                </div>
            </div>
         </div>
    <!--Mawlamyine-Ocean-->
         <div class="cinemasOfContainer">
          <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/ny-cinema.jpg" class="cinema-Image">

                      </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Ocean Center Ottarathiri]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">

                          <a href="BookSeatForSlitherOCO.html">  
                            
                                <button type="button" class="btn btn-danger bookBtn">Book</button>
                          <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            
                           
                          </a>
                          
                        </div>
                       
                      </div>
                    </div>
                </div>
                <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                      </div>
                  </div>
                  <div class="cinemasOfInfo">
                    <div>
                      <div class="cinemaofTitle">
                        <div>Mandalay</div>
                      <div class="website-name">FILM FLEX [Ocean Center Mingalar Mandalay]</div>
                      </div>
                      
        
                      <div class="bookBtnContainer">
                        <a href="BookSeatForSlitherOCMM.html">
                               <button type="button" class="btn btn-danger bookBtn">Book</button>
                        <button type="button" class="btn btn-danger bookBtn">Buy</button>
                        </a>
                    
                      </div>
                     
                    </div>
                  </div>


              </div>
             </div>
             <div class="cinemasOfContainer">
              <div class="leftRightContainer">
                      <div class="cinemaPhoto">
                          <div class="cinemaImageContainer">
                            <!--Juncity-Cinema-->
                            <img src="Image/lannmadaw-mawtin.jpg" class="cinema-Image">
                          </div>
                      </div>
                      <div class="cinemasOfInfo">
                        <div>
                          <div class="cinemaofTitle">
                            <div>Yangon</div>
                          <div class="website-name">FILM FLEX [Maw Tin]</div>
                          </div>
                          
            
                          <div class="bookBtnContainer">
                            <a href="BookSeatForSlitherMT.html">
                              <button type="button" class="btn btn-danger bookBtn">Book</button>
                            
                              <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            </a>
                          </div>
                         
                        </div>
                      </div>
                  </div>
                  <div class="leftRightContainer">
                    <div class="cinemaPhoto">
                        <div class="cinemaImageContainer">
                          <!--Juncity-Cinema-->
                          <img src="Image/ny-cinema.jpg" class="cinema-Image">
                        </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Junction Centre Nay Pyi Taw]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">
                          <a href="BookSeatForSlitherJCPT.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                        
                            <button type="button" class="btn btn-danger bookBtn">Buy</button>
                          </a>
                        </div>
                       
                      </div>
                    </div>
                </div>
               </div>
  `
  document.querySelector('.Mother-container').innerHTML = HTMLGenterated;
  })
}

const unlockedFunction = () => {
  const movieINfo = [{
    image: 'Image/Unlocked-movie-info.jpg',
    movieName: 'Unlocked',
    Cast : {
      firstName : 'Park Ho-San',
      secondName: 'Kim Ye-Won',
      thirdName : 'JJeon Jin-Oh',
      fourName : 'Oh Hyun-Kyung ',
    },
    feeling: 'Thriller/Crime',
    timeLine : '1hr 57min',
    Director : 'Kim Tae-joon',
    MovieOfSummary: `Unlocked tells us the story of a woman called Na Mi. She is drunk one day and loses her phone on the bus. A man called Jun Yeong picks up her phone and informs Na Mi about the incident the next day. After this encounter, a series of horrific incidents follow Na Mi both in her personal life and in her professional life.`,
  }]
  let HTMLGenterated = '';
  movieINfo.forEach((movies) => {
    HTMLGenterated += `<div class="navbar-ContainerMother">
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
  <!--Body-->

<div class="movie-info-Container">
    <div class="Movie-Card-Info">
      <div>
        <img src="${movies.image}" class="card-img-top cut-Info" >
      </div>
    </div>
      <div class="adjust-cardINFO">
        <div class="info-Container">
            <div>
                <div class="adjust-width">
                  <div class="changeStyle-Title">${movies.movieName}</div>

                  <div class="movie-INFO">${movies.MovieOfSummary}</div>

                            <div class="Movie-Div-Container">
                              <!--TimeLine-->
                              <div class="time-LineCon">
                                <div>${movies.feeling}</div>
                                <div>${movies.timeLine}</div>
                              </div>

                              <!--Cast-->
                              <div class="center">
                                <div class="cc One">Cast</div>
                                <div class="cc">-${movies.Cast.firstName}</div>
                                <div class="cc">-${movies.Cast.secondName} </div>
                                <div class="cc">-${movies.Cast.thirdName} </div>
                              </div>

                              <!--Director-->
                              <div>
                                <div class="director">Director - ${movies.Director}</div>
                              </div>
                            </div>     
                  
                <div>
                    
                  
                  
                  
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  
    <!--Cineme List-->
  
  <div class="headerOfCinemas">Cinemas List</div>
  
  <div class="cinema-card-gird">
   <!--Yangon-JC-->
        <div class="cinemasOfContainer ">
          <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/juncity-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Yangon</div>
                  <div class="website-name">FILM FLEX [Junction City]</div>
                  </div>
                  
                  <div class="bookBtnContainer">
                    <a href="BookSeatForUnlocked.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                
                   
                     
                  </div>
                 
                </div>
              </div>
          </div>
          <div class="leftRightContainer">
            <div class="cinemaPhoto">
                <div class="cinemaImageContainer">
                  <!--Juncity-Cinema-->
                  <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                </div>
            </div>
            <div class="cinemasOfInfo">
              <div>
                <div class="cinemaofTitle">
                  <div>Yangon</div>
                <div class="website-name">FILM FLEX [Junction Square]</div>
                </div>
                
  
                <div class="bookBtnContainer">

                  <a href="BookSeatForUnlockedJS.html">               
                    <button type="button" class="btn btn-danger bookBtn">Book</button>
                  <button type="button" class="btn btn-danger bookBtn">Buy</button> </a>

                </div>
               
              </div>
            </div>
          </div>
        </div>
  
  
    <!--Yangon-JS-->  
         <div class="cinemasOfContainer">
         <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/mwlamyine-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Mawlamyine</div>
                  <div class="website-name">FILM FLEX [Ocean Center Mawlamyine]</div>
                  </div>
                  
    
                  <div class="bookBtnContainer">
                    <a href="BookSeatForUnlockedOCM.html">  
                          <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                 
                  </div>
                 
                </div>
              </div>
          </div>
        <div class="leftRightContainer">
                <div class="cinemaPhoto">
                    <div class="cinemaImageContainer">
                      <!--Juncity-Cinema-->
                      <img src="Image/yg-city Mall.jpg" class="cinema-Image">
                    </div>
                </div>
                <div class="cinemasOfInfo">
                  <div>
                    <div class="cinemaofTitle">
                      <div>Yangon</div>
                    <div class="website-name">FILM FLEX [City Mall St.John]</div>
                    </div>
                    
      
                    <div class="bookBtnContainer">
                      <a href="BookSeatForUnlockedCMSJ.html"> 
                                 <button type="button" class="btn btn-danger bookBtn">Book</button>
                      <button type="button" class="btn btn-danger bookBtn">Buy</button>
                      </a>
              
                    </div>
                   
                  </div>
                </div>
            </div>
         </div>
    <!--Mawlamyine-Ocean-->
         <div class="cinemasOfContainer">
          <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/ny-cinema.jpg" class="cinema-Image">

                      </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Ocean Center Ottarathiri]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">

                          <a href="BookSeatForUnlockedOCO.html">  
                            
                                <button type="button" class="btn btn-danger bookBtn">Book</button>
                          <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            
                           
                          </a>
                          
                        </div>
                       
                      </div>
                    </div>
                </div>
                <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                      </div>
                  </div>
                  <div class="cinemasOfInfo">
                    <div>
                      <div class="cinemaofTitle">
                        <div>Mandalay</div>
                      <div class="website-name">FILM FLEX [Ocean Center Mingalar Mandalay]</div>
                      </div>
                      
        
                      <div class="bookBtnContainer">
                        <a href="BookSeatForUnlockedOCMM.html">
                               <button type="button" class="btn btn-danger bookBtn">Book</button>
                        <button type="button" class="btn btn-danger bookBtn">Buy</button>
                        </a>
                    
                      </div>
                     
                    </div>
                  </div>


              </div>
             </div>
             <div class="cinemasOfContainer">
              <div class="leftRightContainer">
                      <div class="cinemaPhoto">
                          <div class="cinemaImageContainer">
                            <!--Juncity-Cinema-->
                            <img src="Image/lannmadaw-mawtin.jpg" class="cinema-Image">
                          </div>
                      </div>
                      <div class="cinemasOfInfo">
                        <div>
                          <div class="cinemaofTitle">
                            <div>Yangon</div>
                          <div class="website-name">FILM FLEX [Maw Tin]</div>
                          </div>
                          
            
                          <div class="bookBtnContainer">
                            <a href="BookSeatForUnlockedMT.html">
                              <button type="button" class="btn btn-danger bookBtn">Book</button>
                            
                              <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            </a>
                          </div>
                         
                        </div>
                      </div>
                  </div>
                  <div class="leftRightContainer">
                    <div class="cinemaPhoto">
                        <div class="cinemaImageContainer">
                          <!--Juncity-Cinema-->
                          <img src="Image/ny-cinema.jpg" class="cinema-Image">
                        </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Junction Centre Nay Pyi Taw]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">
                          <a href="BookSeatForUnlockedJCNPT.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                          
                            <button type="button" class="btn btn-danger bookBtn">Buy</button>
                          </a>
                        </div>
                       
                      </div>
                    </div>
                </div>
               </div>
  `
  document.querySelector('.Mother-container').innerHTML = HTMLGenterated;
  })
}

const terrifierFunction = () => {
  const movieINfo = [{
    image: 'Image/Terrifier-movie-info.jpg',
    movieName: 'Terrifier 2',
    Cast : {
      firstName : 'David Howard Thornton',
      secondName: 'Elliott Fullam',
      thirdName : 'Sarah Voigt',
      fourName : 'Lauren LaVera ',
      fiveName : 'Samantha Scaffidi'
    },
    feeling: 'Horror/Slasher',
    timeLine : '2hr 18min',
    Director : 'Damien Leone',
    MovieOfSummary: `Resurrected by a sinister entity, Art the Clown returns to Miles County to terrorize a teenage girl and her younger brother on Halloween night. Resurrected by a sinister entity, Art the Clown returns to Miles County to terrorize a teenage girl and her younger brother on Halloween night.`,
  }]
  let HTMLGenterated = '';
  movieINfo.forEach((movies) => {
    HTMLGenterated += `<div class="navbar-ContainerMother">
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
  <!--Body-->

<div class="movie-info-Container">
    <div class="Movie-Card-Info">
      <div>
        <img src="${movies.image}" class="card-img-top cut-Info" >
      </div>
    </div>
      <div class="adjust-cardINFO">
        <div class="info-Container">
            <div>
                <div class="adjust-width">
                  <div class="changeStyle-Title">${movies.movieName}</div>

                  <div class="movie-INFO">${movies.MovieOfSummary}</div>

                            <div class="Movie-Div-Container">
                              <!--TimeLine-->
                              <div class="time-LineCon">
                                <div>${movies.feeling}</div>
                                <div>${movies.timeLine}</div>
                              </div>

                              <!--Cast-->
                              <div class="center">
                                <div class="cc One">Cast</div>
                                <div class="cc">-${movies.Cast.firstName}</div>
                                <div class="cc">-${movies.Cast.secondName} </div>
                                <div class="cc">-${movies.Cast.thirdName}</div>
                              </div>

                              <!--Director-->
                              <div>
                                <div class="director">Director - ${movies.Director}</div>
                              </div>
                            </div>     
                  
                <div>
                    
                  
                  
                  
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  
    <!--Cineme List-->
  
  <div class="headerOfCinemas">Cinemas List</div>
  
  <div class="cinema-card-gird">
   <!--Yangon-JC-->
        <div class="cinemasOfContainer ">
          <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/juncity-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Yangon</div>
                  <div class="website-name">FILM FLEX [Junction City]</div>
                  </div>
                  
                  <div class="bookBtnContainer">
                    <a href="BookSeatForTerrifier.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                
                   
                     
                  </div>
                 
                </div>
              </div>
          </div>
          <div class="leftRightContainer">
            <div class="cinemaPhoto">
                <div class="cinemaImageContainer">
                  <!--Juncity-Cinema-->
                  <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                </div>
            </div>
            <div class="cinemasOfInfo">
              <div>
                <div class="cinemaofTitle">
                  <div>Yangon</div>
                <div class="website-name">FILM FLEX [Junction Square]</div>
                </div>
                
  
                <div class="bookBtnContainer">

                  <a href="BookSeatForTerrifierJS.html">               
                    <button type="button" class="btn btn-danger bookBtn">Book</button>
                  <button type="button" class="btn btn-danger bookBtn">Buy</button> </a>

                </div>
               
              </div>
            </div>
          </div>
        </div>
  
  
    <!--Yangon-JS-->  
         <div class="cinemasOfContainer">
         <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/mwlamyine-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Mawlamyine</div>
                  <div class="website-name">FILM FLEX [Ocean Center Mawlamyine]</div>
                  </div>
                  
    
                  <div class="bookBtnContainer">
                    <a href="BookSeatForTerrifierOCM.html">  
                          <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                 
                  </div>
                 
                </div>
              </div>
          </div>
        <div class="leftRightContainer">
                <div class="cinemaPhoto">
                    <div class="cinemaImageContainer">
                      <!--Juncity-Cinema-->
                      <img src="Image/yg-city Mall.jpg" class="cinema-Image">
                    </div>
                </div>
                <div class="cinemasOfInfo">
                  <div>
                    <div class="cinemaofTitle">
                      <div>Yangon</div>
                    <div class="website-name">FILM FLEX [City Mall St.John]</div>
                    </div>
                    
      
                    <div class="bookBtnContainer">
                      <a href="BookSeatForTerrifierCMSJ.html"> 
                                 <button type="button" class="btn btn-danger bookBtn">Book</button>
                      <button type="button" class="btn btn-danger bookBtn">Buy</button>
                      </a>
              
                    </div>
                   
                  </div>
                </div>
            </div>
         </div>
    <!--Mawlamyine-Ocean-->
         <div class="cinemasOfContainer">
          <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/ny-cinema.jpg" class="cinema-Image">

                      </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Ocean Center Ottarathiri]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">

                          <a href="BookSeatForTerrifierOCO.html">  
                            
                                <button type="button" class="btn btn-danger bookBtn">Book</button>
                          <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            
                           
                          </a>
                          
                        </div>
                       
                      </div>
                    </div>
                </div>
                <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                      </div>
                  </div>
                  <div class="cinemasOfInfo">
                    <div>
                      <div class="cinemaofTitle">
                        <div>Mandalay</div>
                      <div class="website-name">FILM FLEX [Ocean Center Mingalar Mandalay]</div>
                      </div>
                      
        
                      <div class="bookBtnContainer">
                        <a href="BookSeatForTerrifierOCMM.html">
                               <button type="button" class="btn btn-danger bookBtn">Book</button>
                        <button type="button" class="btn btn-danger bookBtn">Buy</button>
                        </a>
                    
                      </div>
                     
                    </div>
                  </div>


              </div>
             </div>
             <div class="cinemasOfContainer">
              <div class="leftRightContainer">
                      <div class="cinemaPhoto">
                          <div class="cinemaImageContainer">
                            <!--Juncity-Cinema-->
                            <img src="Image/lannmadaw-mawtin.jpg" class="cinema-Image">
                          </div>
                      </div>
                      <div class="cinemasOfInfo">
                        <div>
                          <div class="cinemaofTitle">
                            <div>Yangon</div>
                          <div class="website-name">FILM FLEX [Maw Tin]</div>
                          </div>
                          
            
                          <div class="bookBtnContainer">
                            <a href="BookSeatForTerrifierMT.html">
                              <button type="button" class="btn btn-danger bookBtn">Book</button>
                            
                              <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            </a>
                          </div>
                         
                        </div>
                      </div>
                  </div>
                  <div class="leftRightContainer">
                    <div class="cinemaPhoto">
                        <div class="cinemaImageContainer">
                          <!--Juncity-Cinema-->
                          <img src="Image/ny-cinema.jpg" class="cinema-Image">
                        </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Junction Centre Nay Pyi Taw]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">
                          <a href="BookSeatForTerrifierCNPT.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                          
                            <button type="button" class="btn btn-danger bookBtn">Buy</button>
                          </a>
                        </div>
                       
                      </div>
                    </div>
                </div>
               </div>
  `
  document.querySelector('.Mother-container').innerHTML = HTMLGenterated;
  })
}

const WhoamIFunction = () => {
  const movieINfo = [{
    image: 'Image/MovieInfo-whoami.jpg',
    movieName: 'Who Am I',
    Cast : {
      firstName : 'Tom Schilling',
      secondName: 'Wotan Wilke Mohring',
      thirdName : `Elyas M'Barek`,
      fourName : 'Lauren LaVera ',
      fiveName : 'Antoine Monot Jr'
    },
    feeling: 'Thriller/Crime',
    timeLine : '1hr 42min',
    Director : 'Baran bo Odar',
    MovieOfSummary: `The story follows a loner computer whiz and hacker who gets entangled in a series of events connected to the dark web. The film has fantastic non-linear storytelling, and the simplified depiction of the darknet is quite creative. The cast has Tom Schilling, Elyas M'Barek and Trine Dyrholm in leading roles`,
  }]
  let HTMLGenterated = '';
  movieINfo.forEach((movies) => {
    HTMLGenterated += `<div class="navbar-ContainerMother">
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
  <!--Body-->

<div class="movie-info-Container">
    <div class="Movie-Card-Info">
      <div>
        <img src="${movies.image}" class="card-img-top cut-Info" >
      </div>
    </div>
      <div class="adjust-cardINFO">
        <div class="info-Container">
            <div>
                <div class="adjust-width">
                  <div class="changeStyle-Title">${movies.movieName}</div>

                  <div class="movie-INFO">${movies.MovieOfSummary}</div>

                            <div class="Movie-Div-Container">
                              <!--TimeLine-->
                              <div class="time-LineCon">
                                <div>Horror/Mystery</div>
                                <div>1hr 36min</div>
                              </div>

                              <!--Cast-->
                              <div class="center">
                                <div class="cc One">Cast</div>
                                <div class="cc">-Taissa Farmiga</div>
                                <div class="cc">-Bonnie Aarons </div>
                                <div class="cc">-Vera Farmiga </div>
                              </div>

                              <!--Director-->
                              <div>
                                <div class="director">Director - Corin Hardy</div>
                              </div>
                            </div>     
                  
                <div>
                    
                  
                  
                  
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  
    <!--Cineme List-->
  
  <div class="headerOfCinemas">Cinemas List</div>
  
  <div class="cinema-card-gird">
   <!--Yangon-JC-->
        <div class="cinemasOfContainer ">
          <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/juncity-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Yangon</div>
                  <div class="website-name">FILM FLEX [Junction City]</div>
                  </div>
                  
                  <div class="bookBtnContainer">
                    <a href="BookSeatForWhoAmI.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                
                   
                     
                  </div>
                 
                </div>
              </div>
          </div>
          <div class="leftRightContainer">
            <div class="cinemaPhoto">
                <div class="cinemaImageContainer">
                  <!--Juncity-Cinema-->
                  <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                </div>
            </div>
            <div class="cinemasOfInfo">
              <div>
                <div class="cinemaofTitle">
                  <div>Yangon</div>
                <div class="website-name">FILM FLEX [Junction Square]</div>
                </div>
                
  
                <div class="bookBtnContainer">

                  <a href="BookSeatForWhoamiJS.html">               
                    <button type="button" class="btn btn-danger bookBtn">Book</button>
                  <button type="button" class="btn btn-danger bookBtn">Buy</button> </a>

                </div>
               
              </div>
            </div>
          </div>
        </div>
  
  
    <!--Yangon-JS-->  
         <div class="cinemasOfContainer">
         <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/mwlamyine-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Mawlamyine</div>
                  <div class="website-name">FILM FLEX [Ocean Center Mawlamyine]</div>
                  </div>
                  
    
                  <div class="bookBtnContainer">
                    <a href="BookSeatForWhoamiOCM.html">  
                          <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                 
                  </div>
                 
                </div>
              </div>
          </div>
        <div class="leftRightContainer">
                <div class="cinemaPhoto">
                    <div class="cinemaImageContainer">
                      <!--Juncity-Cinema-->
                      <img src="Image/yg-city Mall.jpg" class="cinema-Image">
                    </div>
                </div>
                <div class="cinemasOfInfo">
                  <div>
                    <div class="cinemaofTitle">
                      <div>Yangon</div>
                    <div class="website-name">FILM FLEX [City Mall St.John]</div>
                    </div>
                    
      
                    <div class="bookBtnContainer">
                      <a href="BookSeatForWhoamiCMSJ.html"> 
                                 <button type="button" class="btn btn-danger bookBtn">Book</button>
                      <button type="button" class="btn btn-danger bookBtn">Buy</button>
                      </a>
              
                    </div>
                   
                  </div>
                </div>
            </div>
         </div>
    <!--Mawlamyine-Ocean-->
         <div class="cinemasOfContainer">
          <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/ny-cinema.jpg" class="cinema-Image">

                      </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Ocean Center Ottarathiri]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">

                          <a href="BookSeatForWhoamiOCO.html">  
                            
                                <button type="button" class="btn btn-danger bookBtn">Book</button>
                          <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            
                           
                          </a>
                          
                        </div>
                       
                      </div>
                    </div>
                </div>
                <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                      </div>
                  </div>
                  <div class="cinemasOfInfo">
                    <div>
                      <div class="cinemaofTitle">
                        <div>Mandalay</div>
                      <div class="website-name">FILM FLEX [Ocean Center Mingalar Mandalay]</div>
                      </div>
                      
        
                      <div class="bookBtnContainer">
                        <a href="BookSeatForWhoamiOCMM.html">
                               <button type="button" class="btn btn-danger bookBtn">Book</button>
                        <button type="button" class="btn btn-danger bookBtn">Buy</button>
                        </a>
                    
                      </div>
                     
                    </div>
                  </div>


              </div>
             </div>
             <div class="cinemasOfContainer">
              <div class="leftRightContainer">
                      <div class="cinemaPhoto">
                          <div class="cinemaImageContainer">
                            <!--Juncity-Cinema-->
                            <img src="Image/lannmadaw-mawtin.jpg" class="cinema-Image">
                          </div>
                      </div>
                      <div class="cinemasOfInfo">
                        <div>
                          <div class="cinemaofTitle">
                            <div>Yangon</div>
                          <div class="website-name">FILM FLEX [Maw Tin]</div>
                          </div>
                          
            
                          <div class="bookBtnContainer">
                            <a href="BookSeatForWhoamiMT.html">
                              <button type="button" class="btn btn-danger bookBtn">Book</button>
                          
                              <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            </a>
                          </div>
                         
                        </div>
                      </div>
                  </div>
                  <div class="leftRightContainer">
                    <div class="cinemaPhoto">
                        <div class="cinemaImageContainer">
                          <!--Juncity-Cinema-->
                          <img src="Image/ny-cinema.jpg" class="cinema-Image">
                        </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Junction Centre Nay Pyi Taw]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">
                          <a href="BookSeatForWhoamiJCNPT.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                          
                            <button type="button" class="btn btn-danger bookBtn">Buy</button>
                          </a>
                        </div>
                       
                      </div>
                    </div>
                </div>
               </div>
  `
  document.querySelector('.Mother-container').innerHTML = HTMLGenterated;
  })
}

const Redhearts = () => {
  const movieINfo = [{
    image: 'Image/redheart-poster.jpg',
    movieName: 'Heart eye',
    Cast : {
      firstName : 'Olivia Holt',
      secondName: 'Mason Gooding',
      thirdName : `Josh Ruben`,
      fourName : 'Jordana Brewster ',
      fiveName : 'Devon Sawa'
    },
    feeling: 'horror/mashup',
    timeLine : '1hr 30min',
    Director : 'Josh Ruben',
    MovieOfSummary: `A masked maniac with glowing, red eyes returns every Valentine's Day to slaughter unsuspecting couples. When a cynical ad executive and her hopelessly romantic colleague become the next target, they decide to fight back and end the reign of terror.`,
  }]
  let HTMLGenterated = '';
  movieINfo.forEach((movies) => {
    HTMLGenterated += `<div class="navbar-ContainerMother">
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
  <!--Body-->

<div class="movie-info-Container">
    <div class="Movie-Card-Info">
      <div>
        <img src="${movies.image}" class="card-img-top cut-Info" >
      </div>
    </div>
      <div class="adjust-cardINFO">
        <div class="info-Container">
            <div>
                <div class="adjust-width">
                  <div class="changeStyle-Title">${movies.movieName}</div>

                  <div class="movie-INFO">${movies.MovieOfSummary}</div>

                            <div class="Movie-Div-Container">
                              <!--TimeLine-->
                              <div class="time-LineCon">
                                <div>${movies.feeling}</div>
                                <div>${movies.timeLine}</div>
                              </div>

                              <!--Cast-->
                              <div class="center">
                                <div class="cc One">Cast</div>
                                <div class="cc">-${movies.Cast.firstName}</div>
                                <div class="cc">-${movies.Cast.secondName} </div>
                                <div class="cc">-${movies.Cast.thirdName} </div>
                              </div>

                              <!--Director-->
                              <div>
                                <div class="director">Director - ${movies.Director}</div>
                              </div>
                            </div>     
                  
                <div>
                    
                  
                  
                  
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  
    <!--Cineme List-->
  
  <div class="headerOfCinemas">Cinemas List</div>
  
  <div class="cinema-card-gird">
   <!--Yangon-JC-->
        <div class="cinemasOfContainer ">
          <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/juncity-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Yangon</div>
                  <div class="website-name">FILM FLEX [Junction City]</div>
                  </div>
                  
                  <div class="bookBtnContainer">
                    <a href="BookSeatForRedHeart.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                
                   
                     
                  </div>
                 
                </div>
              </div>
          </div>
          <div class="leftRightContainer">
            <div class="cinemaPhoto">
                <div class="cinemaImageContainer">
                  <!--Juncity-Cinema-->
                  <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                </div>
            </div>
            <div class="cinemasOfInfo">
              <div>
                <div class="cinemaofTitle">
                  <div>Yangon</div>
                <div class="website-name">FILM FLEX [Junction Square]</div>
                </div>
                
  
                <div class="bookBtnContainer">

                  <a href="BookSeatForRedHeartJS.html">               
                    <button type="button" class="btn btn-danger bookBtn">Book</button>
                  <button type="button" class="btn btn-danger bookBtn">Buy</button> </a>

                </div>
               
              </div>
            </div>
          </div>
        </div>
  
  
    <!--Yangon-JS-->  
         <div class="cinemasOfContainer">
         <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/mwlamyine-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Mawlamyine</div>
                  <div class="website-name">FILM FLEX [Ocean Center Mawlamyine]</div>
                  </div>
                  
    
                  <div class="bookBtnContainer">
                    <a href="BookSeatForRedHeartOCM.html">  
                          <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                 
                  </div>
                 
                </div>
              </div>
          </div>
        <div class="leftRightContainer">
                <div class="cinemaPhoto">
                    <div class="cinemaImageContainer">
                      <!--Juncity-Cinema-->
                      <img src="Image/yg-city Mall.jpg" class="cinema-Image">
                    </div>
                </div>
                <div class="cinemasOfInfo">
                  <div>
                    <div class="cinemaofTitle">
                      <div>Yangon</div>
                    <div class="website-name">FILM FLEX [City Mall St.John]</div>
                    </div>
                    
      
                    <div class="bookBtnContainer">
                      <a href="BookSeatForRedHeartCMSJ.html"> 
                                 <button type="button" class="btn btn-danger bookBtn">Book</button>
                      <button type="button" class="btn btn-danger bookBtn">Buy</button>
                      </a>
              
                    </div>
                   
                  </div>
                </div>
            </div>
         </div>
    <!--Mawlamyine-Ocean-->
         <div class="cinemasOfContainer">
          <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/ny-cinema.jpg" class="cinema-Image">

                      </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Ocean Center Ottarathiri]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">

                          <a href="BookSeatForRedHeartOCO.html">  
                            
                                <button type="button" class="btn btn-danger bookBtn">Book</button>
                          <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            
                           
                          </a>
                          
                        </div>
                       
                      </div>
                    </div>
                </div>
                <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                      </div>
                  </div>
                  <div class="cinemasOfInfo">
                    <div>
                      <div class="cinemaofTitle">
                        <div>Mandalay</div>
                      <div class="website-name">FILM FLEX [Ocean Center Mingalar Mandalay]</div>
                      </div>
                      
        
                      <div class="bookBtnContainer">
                        <a href="BookSeatForRedHeartOCMM.html">
                               <button type="button" class="btn btn-danger bookBtn">Book</button>
                        <button type="button" class="btn btn-danger bookBtn">Buy</button>
                        </a>
                    
                      </div>
                     
                    </div>
                  </div>


              </div>
             </div>
             <div class="cinemasOfContainer">
              <div class="leftRightContainer">
                      <div class="cinemaPhoto">
                          <div class="cinemaImageContainer">
                            <!--Juncity-Cinema-->
                            <img src="Image/lannmadaw-mawtin.jpg" class="cinema-Image">
                          </div>
                      </div>
                      <div class="cinemasOfInfo">
                        <div>
                          <div class="cinemaofTitle">
                            <div>Yangon</div>
                          <div class="website-name">FILM FLEX [Maw Tin]</div>
                          </div>
                          
            
                          <div class="bookBtnContainer">
                            <a href="BookSeatForRedHeartMT.html">
                              <button type="button" class="btn btn-danger bookBtn">Book</button>
                            
                              <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            </a>
                          </div>
                         
                        </div>
                      </div>
                  </div>
                  <div class="leftRightContainer">
                    <div class="cinemaPhoto">
                        <div class="cinemaImageContainer">
                          <!--Juncity-Cinema-->
                          <img src="Image/ny-cinema.jpg" class="cinema-Image">
                        </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Junction Centre Nay Pyi Taw]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">
                          <a href="BookSeatForRedHeartJCNPT.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                         
                            <button type="button" class="btn btn-danger bookBtn">Buy</button>
                          </a>
                        </div>
                       
                      </div>
                    </div>
                </div>
               </div>
  `
  document.querySelector('.Mother-container').innerHTML = HTMLGenterated;
  })
}

const avatar = () => {
  const movieINfo = [{
    image: 'Image/avatar-poster.jpg',
    movieName: 'Avatar',
    MovieOfSummary: `On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora.`,
    Cast : {
      firstName : 'Sam Worthington',
      secondName: 'Zoe Saldana',
      thirdName : `Sigourney Weaver`,
      fourName : 'cliff curtis ',
      
    },
    feeling: 'Sci-fi/Action',
    timeLine : '2hr 43min',
    Director : 'James Cameron',
  }]
  let HTMLGenterated = '';
  movieINfo.forEach((movies) => {
    HTMLGenterated += `<div class="navbar-ContainerMother">
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
  <!--Body-->

<div class="movie-info-Container">
    <div class="Movie-Card-Info">
      <div>
        <img src="${movies.image}" class="card-img-top cut-Info" >
      </div>
    </div>
      <div class="adjust-cardINFO">
        <div class="info-Container">
            <div>
                <div class="adjust-width">
                  <div class="changeStyle-Title">${movies.movieName}</div>

                  <div class="movie-INFO">${movies.MovieOfSummary}</div>

                            <div class="Movie-Div-Container">
                              <!--TimeLine-->
                              <div class="time-LineCon">
                                <div>${movies.feeling}</div>
                                <div>${movies.timeLine}</div>
                              </div>

                              <!--Cast-->
                              <div class="center">
                                <div class="cc One">Cast</div>
                                <div class="cc">-${movies.Cast.firstName}</div>
                                <div class="cc">-${movies.Cast.secondName} </div>
                                <div class="cc">-${movies.Cast.thirdName} </div>
                                <div class="cc">-${movies.Cast.fourName} </div>
                              </div>

                              <!--Director-->
                              <div>
                                <div class="director">Director - ${movies.Director}</div>
                              </div>
                            </div>     
                  
                <div>
                    
                  
                  
                  
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  
    <!--Cineme List-->
  
  <div class="headerOfCinemas">Cinemas List</div>
  
  <div class="cinema-card-gird">
   <!--Yangon-JC-->
        <div class="cinemasOfContainer ">
          <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/juncity-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Yangon</div>
                  <div class="website-name">FILM FLEX [Junction City]</div>
                  </div>
                  
                  <div class="bookBtnContainer">
                  <a href="BookSeatForAvatar.html">  
                            <button type="button" class="btn btn-danger bookBtn" onclick="defultFunction()">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    
                </a>
                   
                     
                  </div>
                 
                </div>
              </div>
          </div>
          <div class="leftRightContainer">
            <div class="cinemaPhoto">
                <div class="cinemaImageContainer">
                  <!--Juncity-Cinema-->
                  <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                </div>
            </div>
            <div class="cinemasOfInfo">
              <div>
                <div class="cinemaofTitle">
                  <div>Yangon</div>
                <div class="website-name">FILM FLEX [Junction Square]</div>
                </div>
                
  
                <div class="bookBtnContainer">

                  <a href="BookSeatForAvatarJS.html">               
                    <button type="button" class="btn btn-danger bookBtn">Book</button>
                  <button type="button" class="btn btn-danger bookBtn">Buy</button> </a>

                </div>
               
              </div>
            </div>
          </div>
        </div>
  
  
    <!--Yangon-JS-->  
         <div class="cinemasOfContainer">
         <div class="leftRightContainer">
              <div class="cinemaPhoto">
                  <div class="cinemaImageContainer">
                    <!--Juncity-Cinema-->
                    <img src="Image/mwlamyine-cinema.jpg" class="cinema-Image">
                  </div>
              </div>
              <div class="cinemasOfInfo">
                <div>
                  <div class="cinemaofTitle">
                    <div>Mawlamyine</div>
                  <div class="website-name">FILM FLEX [Ocean Center Mawlamyine]</div>
                  </div>
                  
    
                  <div class="bookBtnContainer">
                    <a href="BookSeatForAvatarOCM.html">  
                          <button type="button" class="btn btn-danger bookBtn">Book</button>
                    <button type="button" class="btn btn-danger bookBtn">Buy</button>
                    </a>
                 
                  </div>
                 
                </div>
              </div>
          </div>
        <div class="leftRightContainer">
                <div class="cinemaPhoto">
                    <div class="cinemaImageContainer">
                      <!--Juncity-Cinema-->
                      <img src="Image/yg-city Mall.jpg" class="cinema-Image">
                    </div>
                </div>
                <div class="cinemasOfInfo">
                  <div>
                    <div class="cinemaofTitle">
                      <div>Yangon</div>
                    <div class="website-name">FILM FLEX [City Mall St.John]</div>
                    </div>
                    
      
                    <div class="bookBtnContainer">
                      <a href="BookSeatForAvatarCMSJ.html"> 
                                 <button type="button" class="btn btn-danger bookBtn">Book</button>
                      <button type="button" class="btn btn-danger bookBtn">Buy</button>
                      </a>
              
                    </div>
                   
                  </div>
                </div>
            </div>
         </div>
    <!--Mawlamyine-Ocean-->
         <div class="cinemasOfContainer">
          <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/ny-cinema.jpg" class="cinema-Image">

                      </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Ocean Center Ottarathiri]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">

                          <a href="BookSeatForAvatarOCO.html">  
                            
                                <button type="button" class="btn btn-danger bookBtn">Book</button>
                          <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            
                           
                          </a>
                          
                        </div>
                       
                      </div>
                    </div>
                </div>
                <div class="leftRightContainer">
                  <div class="cinemaPhoto">
                      <div class="cinemaImageContainer">
                        <!--Juncity-Cinema-->
                        <img src="Image/juncity-square-image.jpg" class="cinema-Image">
                      </div>
                  </div>
                  <div class="cinemasOfInfo">
                    <div>
                      <div class="cinemaofTitle">
                        <div>Mandalay</div>
                      <div class="website-name">FILM FLEX [Ocean Center Mingalar Mandalay]</div>
                      </div>
                      
        
                      <div class="bookBtnContainer">
                        <a href="BookSeatForAvatarOCMM.html">
                               <button type="button" class="btn btn-danger bookBtn">Book</button>
                        <button type="button" class="btn btn-danger bookBtn">Buy</button>
                        </a>
                    
                      </div>
                     
                    </div>
                  </div>


              </div>
             </div>
             <div class="cinemasOfContainer">
              <div class="leftRightContainer">
                      <div class="cinemaPhoto">
                          <div class="cinemaImageContainer">
                            <!--Juncity-Cinema-->
                            <img src="Image/lannmadaw-mawtin.jpg" class="cinema-Image">
                          </div>
                      </div>
                      <div class="cinemasOfInfo">
                        <div>
                          <div class="cinemaofTitle">
                            <div>Yangon</div>
                          <div class="website-name">FILM FLEX [Maw Tin]</div>
                          </div>
                          
            
                          <div class="bookBtnContainer">
                            <a href="BookSeatForAvatarMT.html">
                              <button type="button" class="btn btn-danger bookBtn">Book</button>
                           
                              <button type="button" class="btn btn-danger bookBtn">Buy</button>
                            </a>
                          </div>
                         
                        </div>
                      </div>
                  </div>
                  <div class="leftRightContainer">
                    <div class="cinemaPhoto">
                        <div class="cinemaImageContainer">
                          <!--Juncity-Cinema-->
                          <img src="Image/ny-cinema.jpg" class="cinema-Image">
                        </div>
                    </div>
                    <div class="cinemasOfInfo">
                      <div>
                        <div class="cinemaofTitle">
                          <div>NayPyiTaw</div>
                        <div class="website-name">FILM FLEX [Junction Centre Nay Pyi Taw]</div>
                        </div>
                        
          
                        <div class="bookBtnContainer">
                          <a href="BookSeatForAvatarJCNPT.html">
                            <button type="button" class="btn btn-danger bookBtn">Book</button>
                           
                            <button type="button" class="btn btn-danger bookBtn">Buy</button>
                          </a>
                        </div>
                       
                      </div>
                    </div>
                </div>
               </div>
  `
  document.querySelector('.Mother-container').innerHTML = HTMLGenterated;
  })
}
