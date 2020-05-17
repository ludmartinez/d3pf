import { post } from 'axios'

const clientId = '1b065739f2b847738e54b438ba22991b'
const clientSecret = '53tZBjAis9ou5qyrCuwH3XDxVb0C9RCS'

const region = 'us'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()

  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export { getToken }
