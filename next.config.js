const withCSS = require('@zeit/next-css')
const nextBuildId = require('next-build-id')

const config = {
  generateBuildId: async () => {
    const fromGit = await nextBuildId({ dir: __dirname })
    return fromGit.id
  }
}

module.exports = withCSS(config)
