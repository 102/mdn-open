#!/usr/bin/env node

require("open")(
  `https://mdn.io/${encodeURIComponent(process.argv.slice(2).join(" "))}`
);
