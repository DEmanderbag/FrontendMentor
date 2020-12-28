const projects = [
  {
    "title": "Fylo data storage component",
    "description": "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
    "date": new Date("2020-06-03"),
    "photo": "FyloDataStorageComponent/design/desktop-preview.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/FyloDataStorageComponent",
    "demo": "https://frontend-mentor-challenges-beta.now.sh/"
  },
  {
    "title": "Single price grid component",
    "description": "In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.",
    "date": new Date("2020-06-04"),
    "photo": "SinglePriceGridComponent/design/desktop-preview.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/SinglePriceGridComponent",
    "demo": "https://single-price-grid-component-black.now.sh/"
  },
  {
    "title": "Four card feature section",
    "description": "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
    "date": new Date("2020-06-05"),
    "photo": "FourCardFeatureSection/design/desktop-preview.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/FourCardFeatureSection",
    "demo": "https://four-card-section-frontend-mentor.now.sh/"
  },
  {
    "title": "Huddle landing page with a single introductory section",
    "description": "A perfect challenge for beginners, this project will get you working with a two column layout.",
    "date": new Date("2020-06-06"),
    "photo": "HuddleLandingPageHero/design/desktop-preview.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/HuddleLandingPageHero",
    "demo": "https://huddle-landing-page-nine-omega.now.sh/"
  },
  {
    "title": "Huddle landing page with alternating feature blocks",
    "description": "This challenge is perfect if you're wanting to practice your layout skills. If you're starting to get a bit more confident laying out a web page, give this project a go.",
    "date": new Date("2020-06-07"),
    "photo": "HuddleLandingPageFeatureBlocks/design/desktop-preview.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/HuddleLandingPageFeatureBlocks",
    "demo": "https://huddle-landing-page-version2.now.sh/"
  },
  {
    "title": "Clipboard landing page",
    "description": "Put your layout skills to the test with this HTML & CSS landing page challenge. This challenge includes a design for hover states.",
    "date": new Date("2020-06-09"),
    "photo": "ClipboardLandingPage/design/desktop-preview.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/ClipboardLandingPage",
    "demo": "https://clipboard-landing-page-theta-one.now.sh/"
  },
  {
    "title": "Fylo dark theme landing page",
    "description": "This design has some nice layout challenges in it. A perfect training ground to practice your Flexbox and/or Grid skills.",
    "date": new Date("2020-06-10"),
    "photo": "FyloDarkThemeLandingPage/design/desktop-preview.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/FyloDarkThemeLandingPage",
    "demo": "https://fylo-dark-theme-landing-page-drab.now.sh/"
  },
  {
    "title": "Intro component with sign-up form",
    "description": "Practice building out a sign-up form complete with client-side validation using JavaScript.",
    "date": new Date("2020-09-13"),
    "photo": "SignUpForm/design/desktop-preview.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/SignUpForm",
    "demo": "https://signup-component-mu.vercel.app/"
  },
  {
    "title": "Base Apparel coming soon page",
    "description": "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
    "date": new Date("2020-09-22"),
    "photo": "BaseApperelCommingSoon/design/desktop-preview.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/BaseApperelCommingSoon",
    "demo": "https://baseapperal.vercel.app/"
  },
  {
    "title": "Ping single column coming soon page",
    "description": "This challenge is great for beginners and offers a chance to practice basic client-side form validation.",
    "date": new Date("2020-09-24"),
    "photo": "PingComingSoon/design/desktop-preview.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/PingComingSoon",
    "demo": "https://pingcomingsoon.vercel.app/"
  },
  {
    "title": "Article preview component",
    "description": "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
    "date": new Date("2020-09-27"),
    "photo": "ArticlePreviewComponent/design/desktop-preview.jpg",
    "code": "https://github.com/DEmanderbag/FrontendMentor/tree/master/ArticlePreviewComponent",
    "demo": "https://articlepreviewcomponent-qa0mwjx7p.vercel.app/"
  },
]

const projectCount = document.querySelector(".project__count");
const cardWrapper = document.querySelector(".card__wrapper");
let numberOfProjects = projects.length;
projectCount.innerText = `I've complited ${numberOfProjects} so far`;

const projectSection = document.querySelector("section.project");

// Sort by date from newest to oldest
let project = projects.sort((a, b) => b.date - a.date);

for(project of projects){
  // Format date
  const d = new Date(project.date);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  displayDate = `${da} ${mo} ${ye}`;

  let card = `
    <div class="card">
      <div class="card__preview"><img src="${project.photo}" alt="Project preview image"></div>
      <div class="card__info">
        <h1 class="info__title">${project.title}</h1>
        <p class="info__about">${project.description}</p>
        <p class="info__date">${displayDate}</p>
        <div class="cta">
          <a href="${project.code}"><button class="cta--secondary">Code</button></a>
          <a href="${project.demo}"><button class="cta--primary">Live preview</button></a>
        </div>
      </div>
    </div>`

    projectSection.insertAdjacentHTML("beforeend", card);
}