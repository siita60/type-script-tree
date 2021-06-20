const meow = require('meow');
const { read } = require('./read');
const { format } = require('./format');

exports.main = (argv, stdout, stderr) => {
  const cli = meow(
    `
    Usage
      $ toy-tree <directory>
    Examples 
      $ toy-tree
      $ toy-tree path/to/dir
    `,
    {
      flags: {
        level: {
          type: 'number',
          alias: 'L',
          default: Infinity,
        },
      },
      argv,
    },
  );
  const options = {
    level: cli.flags.level,
  };
  if (options.level < 1){
    stderr('Error: Invalid level, must be greater than 0.');
    return 1;
  }

  // ディレクトリの指定を取得。何もなければカレントを示す.
  const dir = cli.input[0] || '.';
  let root;

  try{
    root = read(dir, options);
  } catch(e) {
    stderr(`Error: ${e.message}`);
    return 1;
  }

  const output = format(root);

  stdout(output);
  
  return 0;
};