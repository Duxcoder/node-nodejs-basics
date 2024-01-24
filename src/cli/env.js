const parseEnv = () => {
  const PREFIX = 'RSS_';
  const env = [];
  for (let key in process.env) {
    if (key.startsWith(PREFIX)) env.push(`${key}=${process.env[key]}`);
  }
  console.log(env.join('; '));
};

parseEnv();
