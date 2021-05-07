const { getOptions } = require("loader-utils");

module.exports = function (source) {
  const { name } = getOptions(this);
  console.log(name);

  source = source.replace(/[name]/g, name);

  console.log(source);

  return `export default ${JSON.stringify(source)}`;
};
