
export const getProjects = () => {
  return new Promise((resolve, reject) => {
    let resp = {
      items: [
        {
          name: 'Maskit',
          systemName: 'maskit'
        },
        {
          name: 'Searchable dropdown',
          // systemName: 'autocomplite'
        },
        {
          name: 'Modal',
          systemName: true
        }
      ]
    };
    resolve(resp);
  });
};
