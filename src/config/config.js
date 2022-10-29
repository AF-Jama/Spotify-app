let authScopes = [
    "user-read-email",
    "user-read-private",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-follow-read",
    "user-read-playback-position",
    "user-library-read"
]

let authScopesString = authScopes.join(',')

console.log(authScopes)

const BASE_URL = "https://api.spotify.com"
const CLIENT_ID = "1195821cc6eb4ef384b76ae74daaceb2"
const CLIENT_SECRET = "89490be0cbb64696afa32e9032d89af2"
const AUTH_URL = "https://accounts.spotify.com/authorize"
const ACCESS_URL = "https://accounts.spotify.com/api/token"

// export default authScopes;

// module.exports = {
//     authScopesString,
//     BASE_URL,
//     CLIENT_ID,
//     CLIENT_SECRET,
//     AUTH_URL,
//     ACCESS_URL
// }

export {
    authScopesString,
    BASE_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    AUTH_URL,
    ACCESS_URL
}
