const fs = require(`fs`);
const extract = require(`extract-zip`);
const Dropbox = require(`dropbox`).Dropbox;
const argv = require(`yargs`).argv;

if (!argv.fromDropbox) {
  console.error(`You must pass in the directory you want from Dropbox.`);
}

if (!argv.dest) {
  console.error(
    `You must pass in the directory where the directories from Dropbox should end up.`
  );
}

async function getDropboxContent({ fromDropbox, dest }) {
  const dbx = new Dropbox({
    accessToken: process.env.DROPBOX_FETCH_TOKEN,
    fetch: require(`isomorphic-fetch`),
  });
  await downloadZip({ dbx, path: fromDropbox })
    .then(setupExtractZip(dest))
    .catch((err) => {
      console.error(err);
      process.exitCode = 1;
    });
}

function makeZipPath(name) {
  return `tmp/${name.replace(`/`, ``).replace(/\//g, `+`)}.zip`;
}

async function downloadZip({ dbx, path }) {
  return dbx
    .filesDownloadZip({
      path,
    })
    .then(({ metadata: { path_lower }, fileBinary }) => {
      const zipPath = makeZipPath(path_lower);

      if (!fs.existsSync(`tmp`)) {
        fs.mkdirSync(`tmp`);
      } else if (fs.existsSync(zipPath)) {
        fs.unlinkSync(zipPath);
      }

      console.log(`downloading zip to ${zipPath}`);

      fs.writeFileSync(zipPath, fileBinary);
      return zipPath;
    });
}

function setupExtractZip(dest) {
  return async function extractZip(zipPath) {
    const extractPath = `${process.cwd()}/${dest}`;
    const fromPath = `${process.cwd()}/${zipPath}`;

    console.log(`extracting to ${extractPath} from ${fromPath}`);
    extract(fromPath, { dir: extractPath }, (err) => {
      if (err) {
        throw new Error(`could not extract zip: ${err}`);
      }
    });
  };
}

getDropboxContent({
  fromDropbox: argv.fromDropbox,
  dest: argv.dest,
});
