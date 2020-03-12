import project from 'data/project.js';

export const getProjects = () => {
  return new Promise((resolve, reject) => {
    let resp = {
      items: project
    };
    resolve(resp);
  });
};
