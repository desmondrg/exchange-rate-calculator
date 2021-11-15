import {ContentSecurityPolicyOptions} from 'helmet/dist/middlewares/content-security-policy';

// Content Security Policy Config
export const cspConfig: ContentSecurityPolicyOptions = {
  useDefaults: true,
  directives: {
    manifestSrc: [
      "'self'",
    ],

    frameSrc: [
      "'self'",
      'accounts.google.com',
      'https://www.google.com',
      'https://tpc.googlesyndication.com'
    ],
    scriptSrc: [
      "'self'",
      "'unsafe-eval'",
      "'unsafe-inline'",
      'apis.google.com',
      'connect.facebook.net',
      'https://www.googletagmanager.com/gtag/js',
      'https://pagead2.googlesyndication.com',
      'https://www.googletagservices.com',
      'https://tpc.googlesyndication.com',
      'https://tpc.googlesyndication.com'
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'cdnjs.cloudflare.com',
      'fonts.googleapis.com',
      'https://maxcdn.bootstrapcdn.com/'
    ],
    fontSrc: [
      "'self'",
      'maxcdn.bootstrapcdn.com',
      'fonts.gstatic.com'
    ],
    mediaSrc: [
      "'self'",
      'storage.googleapis.com',
      'lh6.googleusercontent.com',
      'data:',
      'https:'
    ],
    imgSrc: [
      "'self'",
      'storage.googleapis.com',
      'lh6.googleusercontent.com',
      'data:',
      'https:'
    ],
    connectSrc: [
      "'self'",
      'https://www.paynow.co.zw',
      'https://shumba.herokuapp.com',
      'https://www.google-analytics.com/g/collect',
      'https://pagead2.googlesyndication.com'
    ]
  }
};
