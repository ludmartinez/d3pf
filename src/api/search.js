import { get } from 'axios'
import store from '@/store/index'
import { locales } from '@/utils/regions'

const protocol = 'https://'
const host = '.api.blizzard.com/'

/**
 * Returns the specified account profile.
 * GET – /d3/profile/{account}
 * @param region {String}
 * @param account {String}
 * @returns {Promise}
 */
function getApiAccount ({ region, account }) {
  const resource = `d3/profile/${account}/`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locales[region]

  const params = {
    locale,
    access_token: store.state.oauth.accessToken
  }

  return get(API_URL, { params })
}

export { getApiAccount }
