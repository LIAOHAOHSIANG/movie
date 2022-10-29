# 電影前台

展示網址: https://movie-5gtzde7vuq-de.a.run.app
(部署於GCP Cloud Run)

## 使用技術

- Vue
- Nuxt SSR
- Docker:用於部屬 Google Cloud Run
- SCSS

## 主要功能

- 查看/管理電影與其評論
- 搜尋電影
- 會員功能
- 電影聊天室

## 部署

1. 建立Docker映像檔案
   ```
   docker build --build-arg TMDB_API_BASE_URL={url} --build-arg TMDB_API_KEY={key}  .
   ```
2. 建立並運行container
   ```
   docker run  -d -p 80:8080 {image_name}
   ```
