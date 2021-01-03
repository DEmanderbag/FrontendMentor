const projectCount = document.querySelector(".project__count");
const cardWrapper = document.querySelector(".card__wrapper");

fetch("projects.json")
  .then(response => response.json())
  .then(projects =>{
    let numberOfProjects = projects.length;
    projectCount.innerText = `I've complited ${numberOfProjects} so far`;
    const projectSection = document.querySelector("section.project");

  // Sort by project ID
  let projectDate = projects.sort((a, b) => b.id - a.id);

  for(project of projects){
      // Format date
      const d = new Date(project.date);
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
      const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
      displayDate = `${da} ${mo} ${ye}`;

      let card = `
        <div class="card">
          <div class="card__preview"><img src="${project.photo}" alt="Project preview image" loading="lazy"></div>
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
})