var MODEL = (function() {
    var _homeContent = `      <div class="slide-container">
    <div class="hero-home">
      <div class="callout">Tidy Seas<span>&#8482;</span></div>
    </div>
    </div>`;
    var _aboutContent = `<div class="slide-container">
    <div class="hero-about">
      <div class="about-container">
        <h1 id="about-head">What We Do</h1>
        <div class="about-content">
          <div class="about-image"></div>
          <div class="about-text">
            <h2>Tidying The Seas</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
              ratione atque? Corporis totam cupiditate ut molestiae ullam
              ipsum blanditiis, non voluptatem molestias, maxime quas
              maiores! Magni tempore, neque reprehenderit numquam est
              voluptates quam esse consectetur recusandae laudantium,
              nesciunt voluptatibus ullam voluptate molestiae nulla nostrum
              dignissimos vitae delectus aliquam nihil. Culpa.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>`;
    var _projectsContent = `<div class="slide-container">
    <div class="hero-projects">
      <div class="projects-container">
        <h1 id="projects-head">Our Projects</h1>
        <div class="projects-content">
          <div class="projects-image" id="volunteer"></div>
          <div class="projects-text">
            <h2>Volunteer Program</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quos, natus corrupti, hic voluptates incidunt eaque tempore
              repellat recusandae, iste rem velit eligendi sequi id eveniet.
            </p>
          </div>
        </div>
        <div class="projects-content">
          <div class="projects-image" id="beachReport"></div>
          <div class="projects-text">
            <h2>Beach Report</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, obcaecati modi! Debitis accusamus blanditiis
              voluptatem expedita illum, saepe minima animi obcaecati
              corporis iure ab a quae architecto asperiores repellendus
              enim.
            </p>
          </div>
        </div>
        <div class="projects-content">
          <div class="projects-image" id="helpFromHome"></div>
          <div class="projects-text">
            <h2>Help From Home</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              dignissimos deserunt, sit quasi repudiandae consectetur
              commodi beatae atque officia laborum animi quibusdam,
              excepturi sequi.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>`;
    var _contactContent = `<div class="slide-container">
    <div class="hero-contact">
      <div class="contact-container">
        <h1 id="contact-head">Contact Us</h1>
        <div class="contact-content">
          <div class="contact-text">
            <p>
              E-Mail: Lorem@ipsum.org
              <br />
              <br />
              Phone: (555)-555-5555
              <br />
              <br />
              1313 Mockingbird lane, Albany, NY
            </p>
          </div>
          <div class="contact-social">
            <h2 id="socMed">Check out our social media</h2>
            <div class="socImg">
              <img src="images/facebook.png" alt="Facebook Logo" />
              <img src="images/instagram.png" alt="Instagram Logo" />
              <img src="images/tik-tok.png" alt="TikTok Logo" />
              <img src="images/twitter.png" alt="Twitter Logo" />
              <img src="images/youtube.png" alt="YouTube Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>`;
    
    var _updateView = function(pageName){
        console.log("Model " + pageName);
        var pageContent = "_" + pageName;
        $("#app").html(eval(pageContent));
    };

    return {
        updateView: _updateView,
    }

}) ();