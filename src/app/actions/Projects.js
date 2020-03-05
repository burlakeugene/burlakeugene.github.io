
export const getProjects = () => {
  return new Promise((resolve, reject) => {
    let resp = {
      items: [
        {
          name: 'Comming soon',
          systemName: ''
        }
      ]
    };
    resolve(resp);
  });
};
