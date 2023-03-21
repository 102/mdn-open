#!/usr/bin/env node

const options = {
  dryRun: "--dry-run",
  help: "--help",
};

const args = process.argv.slice(2);

const help = `NAME
        mdn-open - open MDN web docs with help of https://mdn.io

SYNOPSIS
        mdn-open [--help] [--dry-run] term ...

DESCRIPTION
        mdn-open generates an mdn.io search URL for given terms and opens the
        result URL in the default browser.

        The following options are available:
        
        --dry-run   Do not open the generated URL in browser; output the URL to
                    stdout.

        --help      Show this help entry.
`;

const isDryRun = args.includes(options.dryRun);
const isHelp = args.includes(options.help);

if (isHelp) {
  process.stdout.write(help);
  process.exit();
}

const url =
  "https://mdn.io/" +
  encodeURIComponent(
    args.filter((arg) => !Object.values(options).includes(arg)).join(" ")
  );

if (isDryRun) {
  process.stdout.write(url + "\n");
} else {
  const { default: open } = await import("open");
  open(url)
}
