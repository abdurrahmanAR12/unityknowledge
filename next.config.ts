import type { NextConfig } from 'next';

const repoSlug = process.env.GITHUB_REPOSITORY ?? '';
const [owner, repository] = repoSlug.split('/');
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgSite = Boolean(owner && repository && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`);
const basePath = isGitHubPagesBuild && repository && !isUserOrOrgSite ? `/${repository}` : '';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
