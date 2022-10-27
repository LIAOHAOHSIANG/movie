export default {
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]
    },
    env: {
        TMDB_API_BASE_URL: process.env.TMDB_API_BASE_URL,
        TMDB_API_KEY: process.env.TMDB_API_KEY,
    }
}