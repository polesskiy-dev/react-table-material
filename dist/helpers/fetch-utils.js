import fetch from 'isomorphic-fetch'

/**
 * Check http status.
 *
 * If not OK - resolve promise and throw server message text, else - return same response.
 *
 * @param res - server response
 */
const checkHttpStatus = (res) => (res.ok) ? res : res.text().then(err => {
    throw err;
});

/**
 * POST payload to url
 *
 * @param url
 * @param payload
 * @auth auth token
 */
export const httpPost = (url, payload, auth) =>
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": auth
        },
        body: JSON.stringify(payload)
    })
        .then(checkHttpStatus)
        .then(res => res.json());

/**
 * GET formFields from url
 *
 * @param url
 * @auth auth token
 */
export const httpGet = (url, auth) =>
    fetch(url,
        {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "Authorization": auth
            },
        })
        .then(checkHttpStatus)
        .then(res => res.json());