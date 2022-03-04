require('dotenv').config();
const { createProxyMiddleware } = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');
const bundler = new Bundler('index.html');
const app = express();

app.use(
  process.env.REACT_APP_URL_FAKE,
  createProxyMiddleware({
    pathRewrite: () => process.env.REACT_APP_URL_PATH_REWRITE,
    target: process.env.REACT_APP_URL_REDIRECT,
    changeOrigin: true,
    secure: false,
    onProxyReq: (proxyReq) => {
      console.log('ProxyReq:', proxyReq.method, proxyReq.path);
    },
  })
);

app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 3000));
