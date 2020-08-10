import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';


const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <TitleContainer>
              <ProjectTitle>{project.name}</ProjectTitle>
              
              <SiteButton href={project.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Site</span>
          </SiteButton>
          <CodeButton href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Code</span>
          </CodeButton>
      </TitleContainer>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;