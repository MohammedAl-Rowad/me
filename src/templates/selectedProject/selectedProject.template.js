import { html, render } from 'lit-html'
import '@fortawesome/fontawesome-free/js/all'
const selectedProjectsSection = document.getElementById('selected-projects')
const info = [
  {
    name: 'Yedua',
    link: 'https://mohammedal-rowad.github.io/Yedua/',
    about: 'A recursive web scraper that visualizes the DOM',
    ul: [
      { name: 'Express', link: 'https://expressjs.com/' },
      { name: 'Cheeriojs', link: 'https://github.com/cheeriojs/cheerio' },
      { name: 'Angular', link: 'https://angular.io/' },
      { name: 'Video', link: 'https://www.youtube.com/watch?v=gd95R18BwJw' },
    ],
  },
  {
    name: 'Vexpest',
    link: 'https://mohammedal-rowad.github.io/vexpest_V2/',
    about:
      'React app that creates a dashboard based on your GitHub public data',
    ul: [
      { name: 'React', link: 'https://reactjs.org/' },
      { name: 'Echarts', link: 'https://echarts.apache.org/' },
      { name: 'Wired Elements', link: 'https://wiredjs.com/' },
      {
        name: 'Video',
        link: 'https://youtu.be/NwS7zRBCdnA',
      },
    ],
  },
  {
    name: 'AReS',
    link: 'https://github.com/MohammedAl-Rowad/AReS',
    about: 'Explorer tool utilizing Dublin Core and CG Core metadata schemas',
    ul: [
      { name: 'Angular', link: 'https://angular.io/' },
      { name: 'Elasticsearch', link: 'https://www.elastic.co/' },
      { name: 'NGRX', link: 'https://ngrx.io/' },
      {
        name: 'Video',
        link: '#',
      },
    ],
  },
  {
    name: 'Pollux',
    link: 'https://mohammedal-rowad.github.io/pollux',
    about:
      'React/Redux app that generates fake data based on prototypes you define',
    ul: [
      { name: 'React', link: 'https://reactjs.org/' },
      { name: 'Redux', link: 'https://redux.js.org/' },
      { name: 'Rsuitejs', link: 'https://rsuitejs.com/en/' },
      {
        name: 'Video',
        link: 'https://www.youtube.com/watch?v=Vh0M0oNo7Gc',
      },
    ],
  },
]

const infoHTML = info.map(
  ({ name, link, about, ul }) => html`<div
    class="center selected-projects three columns"
  >
    <h3>
      <a href="${link}" target="_blank">${name}</a>
    </h3>
    <p><b>${about}</b></p>
    <ul>
      ${ul.map(
        ({ link, name }) =>
          html`<li><a href="${link}" target="_blank">${name}</a></li>`
      )}
    </ul>
  </div>`
)

const disaplySelectedProjects = () => html`
  <div class="row">
    <h1 class="center">
      <i class="far fa-sun icon-header"></i>
      <span class="shadow">Some Selected Projects</span>
      <i class="far fa-sun icon-header"></i>
    </h1>
    <div class="flex-container p">
      ${infoHTML}
    </div>
  </div>
`

render(disaplySelectedProjects(), selectedProjectsSection)

export default disaplySelectedProjects
