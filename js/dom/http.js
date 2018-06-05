/**
 *  @file       http.js
 *  @brief      The http module of the HTTP subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/18/2017 created.
 *  @date       06/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2017-2018 Yiwei Chiao
 *  @details
 *
 *  The http module of the HTTP subsystem.
 */
'use strict';

const get_headers = (token) => {
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  });

  if (token.hasOwnProperty('auth')) {
    headers.append('Authorization', token.auth);
  } // fi

  if (token.hasOwnProperty('account')) {
    headers.append('Account-ID', token.account);
  } // fi

  return headers;
}; // get_headers()

const get_url = (url, args={}) => {
  const query = [];

  for (const key in args) {
    if (args.hasOwnProperty(key)) {
      const k = encodeURIComponent(key);
      const v = encodeURIComponent(args[key]);

      query.push(`${k}=${v}`);
    } // fi
  } // od

  url += (query.length) ? `?${  query.join('&')}` : '';

  return url;
}; // get_url()

const HTTP = Object.create({
  token: {},

  HTTP_OK: 200,

  HTTP_203: 203,

  HTTP_204: 204,
});

HTTP.seal = function (token, auth, account) {
  token.auth = auth;
  token.account = account;
};

HTTP.get = function (url, args={}, token={}) {
  return fetch(
    get_url(url, args),
    {
      method: 'GET',
      headers: get_headers(token),
    }
  );
};

HTTP.head = function (url, token={}) {
  return fetch(
    url,
    {
      method: 'HEAD',
      headers: get_headers(token),
    }
  );
};

HTTP.patch = function (url, data={}, token={}) {
  return fetch(
    url,
    {
      method: 'PATCH',
      headers: get_headers(token),
      body: JSON.stringify(data)
    }
  );
};

HTTP.post = function (url, dat={}, token={}) {
  console.log(`token: ${  token.auth}`);

  return fetch(
    url,
    {
      method: 'POST',
      headers: get_headers(token),
      body: JSON.stringify(data)
    }
  );
};

HTTP.put = function (url, data={}, token={}) {
  return fetch(
    url,
    {
      method: 'PUT',
      headers: get_headers(token),
      body: JSON.stringify(data)
    }
  );
};

HTTP.query = function (url, data={}, token={}) {
  console.log(`query => token: ${  token.auth}`);

  return fetch(
    url,
    {
      method: 'POST',
      headers: get_headers(token),
      body: JSON.stringify(data)
    }
  )
  .then(response => {
    let json = {};

    if (response.status === 200) {
      json = response.json();
    }

    return json;
  })
};

export default (() => {
  return Object.create(HTTP);
})();

// http.js
