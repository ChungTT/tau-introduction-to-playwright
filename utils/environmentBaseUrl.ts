
/**
 * CI: tạo dynamic URL cho từng branch build → test automation/CD.
 * Local: dành cho dev chạy trên máy cá nhân.
 * Staging: môi trường test gần giống production.
 * Production: hệ thống chính thức cho khách hàng.
 */
export default {
  ci: {
    prefix: 'https://dev-myapp-',
    suffix: '.mydomain.com',
  },
  local: {
    api: 'https://local-myapp.mydomain.com/api',
    home: 'https://local-myapp.mydomain.com',
  },
  production: {
    api: 'https://myapp.mydomain.com/api',
    home: 'https://myapp.mydomain.com',
  },
  staging: {
    api: 'https://staging-myapp.mydomain.com/api',
    home: 'https://staging-myapp.mydomain.com',
  },
};