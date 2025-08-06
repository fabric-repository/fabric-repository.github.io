/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = '/fabric-repository.github.io';

module.exports = {
  basePath: repoName,
  assetPrefix: repoName,
};
