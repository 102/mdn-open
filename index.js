#!/usr/bin/env node

const options = {
  dryRun: "--dry-run",
};

const args = process.argv.slice(2);

const isDryRun = args.includes(options.dryRun);

const url =
  "https://mdn.io/" +
  encodeURIComponent(
    args.filter((arg) => !Object.values(options).includes(arg)).join(" ")
  );

if (isDryRun) {
  process.stdout.write(url + "\n");
} else {
  require("open")(url);
}
