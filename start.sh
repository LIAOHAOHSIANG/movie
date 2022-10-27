echo "TMDB_API_BASE_URL = ${TMDB_API_BASE_URL} \nTMDB_API_KEY = ${TMDB_API_KEY} " >> .env

npm run build
npm run start