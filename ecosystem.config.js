// PM2 process definition for AWS SAA-C03 Learning Hub.
//
// Usage:
//   npm run build                       (build once before starting)
//   pm2 start ecosystem.config.js       (start under PM2)
//   pm2 status                          (check it's running)
//   pm2 logs aws-saa-hub                (tail logs)
//   pm2 restart aws-saa-hub --update-env (after changing PORT below)
//   pm2 stop aws-saa-hub
//   pm2 delete aws-saa-hub
//
// Change the port: edit PORT below, then `pm2 restart aws-saa-hub --update-env`.
// Points directly at Next's CLI script (a plain Node file, no npm/npm.cmd
// shell resolution involved) so this config works unchanged on Windows and
// Linux.

const path = require("path");

module.exports = {
  apps: [
    {
      name: "aws-saa-hub",
      script: path.join("node_modules", "next", "dist", "bin", "next"),
      args: "start",
      interpreter: "node",
      cwd: __dirname,
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 8000, // <-- change this to the port you want, then `pm2 restart aws-saa-hub --update-env`
      },
    },
  ],
};
