<div>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js">
  <img alt="Express" src="https://img.shields.io/badge/Express-4.21.1-lightgrey?logo=express">
  <img alt="Axios" src="https://img.shields.io/badge/Axios-1.7.7-blue?logo=axios">
  <img alt="dotenv" src="https://img.shields.io/badge/dotenv-16.4.5-green?logo=dotenv">
  <img alt="morgan" src="https://img.shields.io/badge/morgan-1.10.0-lightgrey">
  <img alt="CORS" src="https://img.shields.io/badge/CORS-enabled-blue">
  <img alt="API" src="https://img.shields.io/badge/API-The%20Guardian-lightgrey?logo=theguardian">
</div>

# News Explorer Application

**News Explorer** is a fast, single-page web app designed to deliver real-time, topic-based news from around the world—straight from **The Guardian API**.

In an age of content overload, finding trustworthy, up-to-date information can be frustrating. News Explorer cuts through the noise. Whether you're browsing by category or searching by keyword, the app helps you quickly find what matters.

<div align="center">
  <img src="https://github.com/user-attachments/assets/c8d1c0f8-5d30-435d-a04c-e6ef09d74ec5" width="700">
</div>

## Table of Contents

* [Quick Start](#quick-start)
* [Features](#features)
* [Folder Structure](#folder-structure)
* [Tech Stack](#tech-stack)
* [API Reference](#api-reference)
* [Alternate Versions](#alternate-versions)
* [Contributing](#contributing)
* [Demo](#demo)
* [License](#license)

---

## Quick Start

### Prerequisites

* `Node.js (v18.x or later)`
* A registered API key from [The Guardian Open Platform](https://open-platform.theguardian.com/)

### Setup Guide

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-repo/news-explorer-app.git
   cd news-explorer-app

2. **Set Up the Proxy Server**

   ```bash
  cd src/proxy-server
  npm install

3. **Configure environment**

   Create a `.env` file inside `src/proxy-server/`:

```env
   PORT=5000
   API_BASE_URL=https://content.guardianapis.com
   API_KEY=your-api-key-here
```

4. **Start the proxy server**

   ```bash
   cd src/proxy-server
   node server.js

5. **Launch the app**

   Once the proxy is running, open your browser:

   ```
   http://localhost:5000
   
6. **Run the Frontend**

   If you're using Visual Studio Code, make sure you have the Live Server extension installed. :

- Go to `index.html`.
- Click the **"Go Live"** button (bottom-right corner), or right-click the file and select **"Open with Live Server"**.
- This will launch your frontend at address like`http://127.0.0.1:5500/`.

> Make sure your proxy server is also running at `http://localhost:5000/` so API calls work properly.
---

## Features

* **Quickly search for articles on any topic**
* **Category Navigation**
* **Article Cards with titles, snippets, thumbnails, and metadata previews**
* **Pagination Controls**
* **Scroll-to-Top Button**
* **Fail-Safe UI**

---

## Folder Structure

```plaintext
├── index.html                  
├── style.css                    
├── package.json                 
├── public/
│   └── favicon/                 
├── src/
│   ├── app.js                   
│   ├── constants.js            
│   ├── features/
│   │   ├── articleSections.js   # Logic for category navigation
│   │   └── burger-menu.js       # Responsive menu logic
│   ├── pages/
│   │   ├── articlesPage.js      # Renders articles to page
│   │   └── errorPage.js         # Renders fallback UI
│   ├── proxy-server/
│   │   ├── server.js            # Node proxy server (API security layer)
│   │   └── package.json         # Server-side dependencies
│   ├── util/
│   │   ├── fetchData.js         # Wrapper around fetch + error handling
│   │   └── loadPage.js          # Page loader for SPA behavior
│   └── views/
│       ├── articleListItemView.js  # View for single article item
│       ├── articlesView.js         # View to render article list
│       └── errorView.js            # View for error rendering
```

---

## Tech Stack

* **Frontend**: Vanilla JavaScript, HTML5, CSS3
* **Backend**: Node.js (proxy server)
* **API**: The Guardian Open Platform

---

## API Reference

* **Base URL**: `https://content.guardianapis.com`
* **Endpoint (via proxy)**:

  ```bash
  GET http://localhost:5000/api/search?q=climate

Query parameters:

* `q`: Keyword
* `section`: e.g. `politics`, `technology`, `science`
* `page`: Page number

---

## Alternate Versions

### 1. Direct Browser Access (Legacy)

* Early versions directly query the API in the browser (API key exposed)

### 2. Proxy Integration (Current)

* Secure routing through Node proxy
* Protects API key and supports better scalability

See the [Releases](https://github.com/your-repo/news-explorer-app/releases) section for version history.

---

## Contributing

Interested in improving the project?
Open an issue, fork the repository, or submit a pull request—we’d love to hear from you!

---

## Demo

![News Explorer Demo](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2VoZGRqdHY0MzZucXU5c215eGFlenliMGFqbmVsdGN3ZGdtc3hzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fmjh9ULOiK4kwpbutW/giphy.gif)

---

## License

This project is licensed under the **ISC License**. See the [LICENSE](./LICENSE) file for full details.
