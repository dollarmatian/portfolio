import styled from 'styled-components'
import { white } from '@carbon/colors'

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`
export const TitleContainer = styled.li`
  display: flex;
  align-items: center;
  `

export const ProjectTitle = styled.h4`
  font-weight: bold;
  margin-right: 10px;
`

export const SiteButton = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  align-items: center;
  margin: 10px 5px 10px 10px;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;
  &:hover {
    background-color: #2ecc40;
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;
export const CodeButton = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  align-items: center;
  margin: 10px 10px 10px 5px;
  border: 2px solid #ffcc2f;
  background-color: rgba(240,173,78, 0.3);
  transition: background-color 250ms ease;
  &:hover {
    background-color: #ffcc2f;
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`
