// Aggregates all YAML content per language so pages can load the right set with
// getContent(lang). To edit content, change the files in src/data/<lang>/.
import type { Lang } from './ui';

import enSite from '../data/en/site.yaml';
import enProfile from '../data/en/profile.yaml';
import enAbout from '../data/en/about.yaml';
import enEducation from '../data/en/education.yaml';
import enPositions from '../data/en/positions.yaml';
import enResearch from '../data/en/research.yaml';
import enPublications from '../data/en/publications.yaml';
import enTeaching from '../data/en/teaching.yaml';
import enSupervision from '../data/en/supervision.yaml';
import enProjects from '../data/en/projects.yaml';
import enAwards from '../data/en/awards.yaml';
import enTestimonials from '../data/en/testimonials.yaml';
import enContact from '../data/en/contact.yaml';

import esSite from '../data/es/site.yaml';
import esProfile from '../data/es/profile.yaml';
import esAbout from '../data/es/about.yaml';
import esEducation from '../data/es/education.yaml';
import esPositions from '../data/es/positions.yaml';
import esResearch from '../data/es/research.yaml';
import esPublications from '../data/es/publications.yaml';
import esTeaching from '../data/es/teaching.yaml';
import esSupervision from '../data/es/supervision.yaml';
import esProjects from '../data/es/projects.yaml';
import esAwards from '../data/es/awards.yaml';
import esTestimonials from '../data/es/testimonials.yaml';
import esContact from '../data/es/contact.yaml';

const content = {
  en: {
    site: enSite,
    profile: enProfile,
    about: enAbout,
    education: enEducation,
    positions: enPositions,
    research: enResearch,
    publications: enPublications,
    teaching: enTeaching,
    supervision: enSupervision,
    projects: enProjects,
    awards: enAwards,
    testimonials: enTestimonials,
    contact: enContact,
  },
  es: {
    site: esSite,
    profile: esProfile,
    about: esAbout,
    education: esEducation,
    positions: esPositions,
    research: esResearch,
    publications: esPublications,
    teaching: esTeaching,
    supervision: esSupervision,
    projects: esProjects,
    awards: esAwards,
    testimonials: esTestimonials,
    contact: esContact,
  },
};

export function getContent(lang: Lang) {
  return content[lang];
}
