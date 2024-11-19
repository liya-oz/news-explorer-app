# 📰 **News Explorer Application**

The **News Explorer Application** is a single-page web app designed to deliver real-time news from around the globe.

Finding credible and up-to-date news articles can be overwhelming in today’s digital landscape. **News Explorer Application** simplifies this process and allows users to stay updated with the latest news from around the world. Browse articles by categories, search for specific topics, and enjoy a user-friendly experience!

## ✨ **Key Features**

- 🔍 **Dynamic Keyword Search**: Quickly find articles by typing relevant keywords.
- 📑 **Section-Based Navigation**: Explore categories such as Politics, Technology, Science, Health, and more.
- 🖼️ **Rich Article Previews**: Display thumbnails, titles, snippets, and metadata for each article.
- ⬆️ **Smooth Scroll to Top**: Navigate back to the top with a handy button.
- ⚡ **Pagination**: Efficiently browse through articles with custom page controls.
- 🚨 **Error Handling**: Informative error messages guide users when API calls fail.

## 📁 **Folder Structure**

Separation of Concerns: The project follows clear modular principles to maintain code readability and reusability:

```plaintext
├── index.html                 
├── style.css     
├── package.json       
├── public/                
│   └── favicon/       
├── src/         
│   ├── app.js                 # Main application logic
│   ├── constants.js           # API configuration and constants
│   ├── features/        
│   │   ├── articleSections.js # Section navigation logic
│   │   └── burger-menu.js     # Responsive navigation menu logic
│   ├── pages/      
│   │   ├── articlesPage.js    # Logic for displaying articles
│   │   └── errorPage.js       # Logic for error handling
│   ├── proxy-server/     
│   │   ├── server.js          # Proxy server implementation
│   │   └──  package.json       # Proxy server dependencies
│   ├── util/         
│   │   ├── fetchData.js       # Fetch API data
│   │   └── loadPage.js        # Dynamic page loading utility
│   └── views/    
│       ├── articleListItemView.js  # UI for individual article previews
│       ├── articlesView.js         # UI for listing articles
│       └── errorView.js            # UI for error handling
```

## 🚀 **Getting Started**

### **Prerequisites**

- **Node.js** and **npm** installed on your system.
- A valid **API_KEY** from **The Guardian API**.  
  > To get an API key, sign up at [The Guardian Open Platform](https://open-platform.theguardian.com/).  

### **Installation**

1. **Clone the Repository**:
   ```
   git clone https://github.com/your-repo/news-explorer-app.git
   cd news-explorer-app
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Create a `.env` File**:
   Navigate to the `src/proxy-server` folder, create a file named `.env`, and add the following:
   ```
   PORT=5000
   API_BASE_URL=https://content.guardianapis.com
   API_KEY=6cff0ae8-a6e5-4597-a67e-f444a36c2351
   ```
   > The sample API key is provided for testing purposes. Replace it with your own API key if needed.

4. **Start the Proxy Server**:
   From the proxy server folder run the server:
   ```
   cd src/proxy-server
   node server.js
   ```

5. **Run the Application**:  
   Open your browser and navigate to:
   ```
   http://localhost:5000
   ```


## 🌐 **API Reference**

The application fetches real-time news articles from **The Guardian API**.

- **Base URL**: `https://content.guardianapis.com/`
- **Proxy**: A proxy server is to allow frontend requests.

## 📜 **Alternate Versions**

- **Direct Browser Access**: The earlier tagged version allows users to view articles directly in the browser without needing a proxy server.
- **Proxy Integration**: The current version uses a secure proxy server for enhanced functionality and secure API key management.

### Note:
Details for both versions are available in the **Releases** section of the repository. Choose the version that fits your use case.


## 🎥 **Demo**

![Demo GIF](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2VoZGRqdHY0MzZucXU5c215eGFlenliMGFqbmVsdGN3ZGdtc3hzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fmjh9ULOiK4kwpbutW/giphy.gif
)
