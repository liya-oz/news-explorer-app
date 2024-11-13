# Newsfeed App

This application, **Newsfeed App**, is created using The Guardian's API and and presents them in an easy-to-use, responsive layout. It’s currently in development, with plans to add more features soon. You can check out what’s coming by looking at the GitHub Issues.

This project follows Separation of Concerns principles.

## Key Features

1. **Single Page Application**
2. **Responsive Design**
3. **API Integration**
4. **Error Handling and Loading Indicator**

### API Documentation**: 
[The Guardian API Documentation](https://open-platform.theguardian.com/documentation/)  

## Folder Structure

The application’s files are organized as follows:

```text
public\
src\
└── pages\
└── util\
└── views\
└── app.js
└── constants.js
index.html
```

## Application State Object

The app maintains a `state` object that track of all the data and flags needed. This includes current page data, loading status, error messages, and article content.

Example of the `state` object:

```js
const state = {
    data: null,
    error: null,
    loading: false,
    page: 1,
    totalResults: 0,
    pageSize: 10,
    orderBy: 'newest',
    thumbnail: '',
    trailText: '',
  };
```


## Must-Have Features

1. **Add Favicon**  
2. **Responsive Layout**  
3. **Single Page**  
4. **Error and Loading Feedback**  
5. **API Interaction**  
6. **User Interaction**

---

## Good-to-Have Features

1. **Back to Top Button**  
2. **Display Additional Article Information**  
3. **Order by Criteria**  
4. **Enhanced Pagination Controls**  
5. **Filter by Section**  
6. **Search by Keywords**  
7. **Filter by Tag**  
8. **Date Range Filter**
