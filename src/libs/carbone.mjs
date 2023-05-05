import carbone from 'carbone';

export function render(templatePath, data, options) {
  return new Promise((resolve, reject) => {
    carbone.render(templatePath, data, options, (err, res) => {
      if (err) {
        // console.log('error', err)
        reject(err);
      }

      resolve(res);
    });
  });
}
