const projects = [
  {
    "title": "Fylo data storage component",
    "description": "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
    "date": "3rd June 2020",
    "photo": "FyloDataStorageComponent/design/desktop-design.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/FyloDataStorageComponent",
    "demo": "https://frontend-mentor-challenges-beta.now.sh/"
  },
  {
    "title": "Single price grid component",
    "description": "In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.",
    "date": "4th June 2020",
    "photo": "SinglePriceGridComponent/design/desktop-design.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/SinglePriceGridComponent",
    "demo": "https://single-price-grid-component-black.now.sh/"
  },
  {
    "title": "Four card feature section",
    "description": "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
    "date": "5th June 2020",
    "photo": "FourCardFeatureSection/design/desktop-design.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/FourCardFeatureSection",
    "demo": "https://four-card-section-frontend-mentor.now.sh/"
  },
  {
    "title": "Huddle landing page with a single introductory section",
    "description": "A perfect challenge for beginners, this project will get you working with a two column layout.",
    "date": "6th June 2020",
    "photo": "HuddleLandingPageHero/design/desktop-design.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/HuddleLandingPageHero",
    "demo": "https://huddle-landing-page-nine-omega.now.sh/"
  },
  {
    "title": "Huddle landing page with alternating feature blocks",
    "description": "This challenge is perfect if you're wanting to practice your layout skills. If you're starting to get a bit more confident laying out a web page, give this project a go.",
    "date": "7th June 2020",
    "photo": "HuddleLandingPageFeatureBlocks/design/desktop-design.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/HuddleLandingPageFeatureBlocks",
    "demo": "https://huddle-landing-page-version2.now.sh/"
  },
  {
    "title": "Clipboard landing page",
    "description": "Put your layout skills to the test with this HTML & CSS landing page challenge. This challenge includes a design for hover states.",
    "date": "4th June 2020",
    "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/ClipboardLandingPage",
    "demo": "https://clipboard-landing-page-theta-one.now.sh/"
  },
  {
    "title": "Fylo dark theme landing page",
    "description": "This design has some nice layout challenges in it. A perfect training ground to practice your Flexbox and/or Grid skills.",
    "date": "10th June 2020",
    "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/FyloDarkThemeLandingPage",
    "demo": "https://fylo-dark-theme-landing-page-drab.now.sh/"
  },
  {
    "title": "Intro component with sign-up form",
    "description": "Practice building out a sign-up form complete with client-side validation using JavaScript.",
    "date": "13th September 2020",
    "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/SignUpForm",
    "demo": "https://signup-component-mu.vercel.app/"
  },
  {
    "title": "Base Apparel coming soon page",
    "description": "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
    "date": "22nd September 2020",
    "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/BaseApperelCommingSoon",
    "demo": "https://baseapperal.vercel.app/"
  },
  {
    "title": "Ping single column coming soon page",
    "description": "This challenge is great for beginners and offers a chance to practice basic client-side form validation.",
    "date": "24th September 2020",
    "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/PingComingSoon",
    "demo": "https://pingcomingsoon.vercel.app/"
  },
  {
    "title": "Article preview component",
    "description": "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
    "date": "27th September 2020",
    "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/ArticlePreviewComponent",
    "demo": "https://articlepreviewcomponent-qa0mwjx7p.vercel.app/"
  },
]

const projectCount = document.querySelector(".project__count");
let numberOfProjects = projects.length;
projectCount.innerText = `I've complited ${numberOfProjects} so far`;

const projectSection = document.querySelector("section.project");
console.log(projectSection);

for(let project of projects){
  let card = `
    <div class="card">
      <div class="card__preview"><img src="${project.photo}" alt=""></div>
      <div class="card__info">
        <h1 class="info__title">${project.title}</h1>
        <p class="info__about">${project.description}</p>
        <p class="info__date">${project.date}</p>
        <div class="cta">
          <a href="${project.code}"><button class="cta--secondary">Code</button></a>
          <a href="${project.demo}"><button class="cta--primary">Live preview</button></a>
        </div>
      </div>
    </div>`

    projectSection.insertAdjacentHTML("beforeend", card);
}