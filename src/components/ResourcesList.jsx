import './ResourcesStyle.css'

function ResourcesList() {
    return (
        <div className="bullet_list">
            <div className="entry">
                <ul>
                    <li><h3>LMI Data Challenge</h3></li>
                    <li> <a href="https://datascience.virginia.edu/news/lmi-and-uvas-school-data-science-challenge-student-teams-tackle-health-equity"> 🔗 Article </a></li>
                    <li><a href="https://docs.google.com/presentation/d/1iXpDX1uD1WDc7BlsdozSOdPmk2Vh0fZH9cZk5D6fglE/edit#slide=id.g29a63ecd084_0_162"> 📊 Presentation </a></li>
                </ul>
            </div>

            <div className="entry">
                <ul>
                    <li><h3>UVA iGEM 2022 Wins Gold!</h3></li>
                    <li> <a href="https://bio.as.virginia.edu/content/virginia-igem-team-f%C3%AAted-paris"> 🔗 Article </a></li>
                    <li><a href="https://2022.igem.wiki/virginia/index.html"> 💻 Website </a></li>
                </ul>
            </div>
      </div>
    )
}

export default ResourcesList