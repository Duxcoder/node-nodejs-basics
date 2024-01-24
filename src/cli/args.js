const createPrettyFormat = (val, i) => `${val[i].slice(2)} is ${val[i + 1]}`;

const parseArgs = () => {
  const PREFIX = '--';
  const result = [];
  const { argv } = process;
  for (let i = 0; i < argv.length - 1; i++) {
    if (argv[i].startsWith(PREFIX)) result.push(createPrettyFormat(argv, i));
  }
  console.log(result.join(', '));
};

parseArgs();
