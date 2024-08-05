import styles from './ProjectsStyles.module.css';
import todoApp from '../../assets/todo.png';
import nasa from '../../assets/nasa.png';
import fitLift from '../../assets/fitlift.png';
import location from '../../assets/location.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todoApp}
          link="https://kaizenlist.vercel.app/"
          h3="TaskMaster"
          p="Todo List"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/adeisaac7/Kaizen-Fit.git"
          h3="Kaizen Fit"
          p="Fitness App"
        />
        <ProjectCard
          src={nasa}
          link="https://spacevision.vercel.app/"
          h3="Space Vision"
          p="NASA-React-App"
        />
        <ProjectCard
          src={location}
          link="https://github.com/adeisaac7/Craftshub.git"
          h3="Craftshub"
          p="Location Recommendation System"
        />
      </div>
    </section>
  );
}

export default Projects;
