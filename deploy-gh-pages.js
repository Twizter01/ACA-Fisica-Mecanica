// This script deploys the contents of the dist folder to the gh-pages branch for GitHub Pages hosting.

import ghpages from 'gh-pages';

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/Twizter01/skate-energy-explorer-report.git',
  user: {
    name: 'github-actions[bot]',
    email: 'github-actions[bot]@users.noreply.github.com'
  },
  message: 'Deploy to GitHub Pages',
}, (err) => {
  if (err) {
    console.error('Deploy failed:', err);
    process.exit(1);
  } else {
    console.log('Deploy complete!');
  }
});
