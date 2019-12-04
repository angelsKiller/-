const proxy = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(proxy("/api", {
            target: "http://localhost:8080/",
            changeOrigin: true,
            
            pathRewrite: {
                "^/api": "/"
               }
        }),
        proxy("/note", {
            target: "http://localhost:8080/",
            changeOrigin: true,
            
           
        }),
        proxy("/isTrue", {
            target: "http://localhost:8080/",
            changeOrigin: true,
            
            pathRewrite: {
                "^isTrue": "/"
               }
        })
        
    );
};