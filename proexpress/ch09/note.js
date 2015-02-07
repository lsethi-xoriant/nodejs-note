/**
 app.locals:
    the app.locals object is similar to the res.locals object in the sense that it exposes data to templates.
    However, there's a main difference: app.locals makes its properties available in all templates rendered by
    app, while res.locals restricts them only to that request.

    The best use case for this is app-wide settings such as location, urls, contact info, and so forth.

    ```
    app.locals.lang = 'en',
    app.locals.appName = 'tsq'
    ```

    The app.locals object can also be invoked like a function
    app.locals([author: 'Azat Mardan', email: 'hi@a.co', website: 'http://1.com']);
 */