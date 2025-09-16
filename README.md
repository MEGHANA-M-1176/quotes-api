
# ✨ Quotes API

A simple **REST API** built with **Node.js** and **Express** that serves random motivational quotes.

---

## 🚀 Features

* ✅ Returns a **single random quote**
* ✅ Returns a **list of quotes**
* ✅ Simple and lightweight API for practice or inspiration

---

## 📡 Endpoints

| Method | Endpoint  | Description                  |
| ------ | --------- | ---------------------------- |
| `GET`  | `/quote`  | Returns **one random quote** |
| `GET`  | `/quotes` | Returns **multiple quotes**  |

Example:

```
GET /quote
→ { "quote": "Believe in yourself!" }
```

---

## 🛠️ Setup & Usage

 **Clone the repository**

```bash
git clone https://github.com/MEGHANA-M-1176/quotes-api.git
cd quotes-api
```

**Install dependencies**

```bash
npm install
```

 **Run the server**

```bash
node server.js
```

 **Test in browser or Postman**

* Visit 👉 `http://localhost:3000/quote`
* Or 👉 `http://localhost:3000/quotes`

---

## 💻 Technologies Used

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)

---

## 🌎 Deployment (Optional)

You can deploy to **Render**, **Railway**, or **Vercel** to make it live.

---

### ✅ Next Git Commands

After adding this README to your folder:

```bash
git add README.md
git commit -m "Add README with API details"
git push origin main
```
