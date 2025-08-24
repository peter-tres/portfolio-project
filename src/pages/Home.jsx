import PNav from '.././components/PNav'
import PFooter from '.././components/PFooter';
import Intro from '.././components/Intro';
import ProjectsDisplay from '.././components/ProjectsDisplay'
import GamesData from '.././assets/game_showcases.json'
import SoftwareData from '.././assets/software_showcases.json'
import WebData from '.././assets/web_showcases.json'


function Home () {
  return (
    <>
        <PNav items={["Games", "Software Projects", "Web Projects"]}/>
        <main className="background">
        <Intro/>

        <hr className="mx-auto border-thickness"></hr>
        <ProjectsDisplay title="Games" json={GamesData}/>

        <hr className="mx-auto border-thickness"></hr>
        <ProjectsDisplay title="Software Projects" json={SoftwareData}/>

        <hr className="mx-auto border-thickness"></hr>
        <ProjectsDisplay title="Web Projects" json={WebData}/>

      </main>
      <PFooter/>
    </>
  )
}

export default Home
