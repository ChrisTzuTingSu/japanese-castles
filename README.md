# 日本の城｜Castles of Japan — v0.1

一個可直接部署到 GitHub Pages 的純前端互動網站原型。

## 目前包含

- `index.html`：首頁／日本城概念導覽
- `explore.html`：Leaflet 互動日本城地圖，可依現存／復興／城跡篩選
- `timeline.html`：1450–2026 互動時間軸 prototype
- `kumamoto.html`：以 20 張使用者照片製作的熊本城案例
- `data/castles.json`：城郭點位資料
- `data/events.json`：時間軸事件資料
- `assets/images/kumamoto/`：已壓縮的網站照片

## GitHub Pages 部署

1. 建立新的 GitHub repository，例如 `japanese-castles`。
2. 將此資料夾全部檔案放在 repository 根目錄。
3. 到 **Settings → Pages**。
4. Source 選 **Deploy from a branch**。
5. Branch 選 `main`，Folder 選 `/ (root)`。
6. 儲存後等待 GitHub Pages 發布。

這個版本沒有 build step，不需要 Node.js。

## 外部函式庫

`explore.html` 透過 CDN 載入 Leaflet 1.9.4，底圖使用 OpenStreetMap。

## 資料狀態

- 熊本城年表依熊本城官方網站整理。
- 「現存十二天守」分類依日本政府觀光局（JNTO）所述的 12 座現存原始天守概念建立。
- 其他城的年份與摘要在 v0.1 仍屬 seed data，正式公開前應逐城以官方城郭、地方政府、文化財資料校訂並增加來源欄位。
- 使用者拍攝的博物館／展示空間展板影像目前僅作 prototype；正式公開網站前，建議將展板資訊重新繪製／改寫，並確認照片公開使用與館方規範。

## 下一版建議

- 改成 `castles.json` 自動產生個別城頁面
- 加入城郭類型、城主、曲輪配置、天守型式、現存／復元狀態等欄位
- 將時間軸與地圖連動
- 加入舊國／藩／府縣的時代圖層（GeoJSON）
- 製作多語言（繁中／日文／英文）
- 為照片建立完整 metadata 與授權欄位

## v0.1 參考來源

- 熊本城官方網站（歷史年表）
- Japan National Tourism Organization / Travel Japan（現存十二天守相關介紹）
