const generateRedirects = require(`./generate-redirects`);

async function main() {
  const path = process.argv[2];

  generateRedirects({ path });
}

main().catch((err) => {
  console.error(`An error occurred while generating _redirects: ${err}`);
  process.exitCode = 1;
});
