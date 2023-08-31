const app = require("./app");

app.listen(app.get("port"), function ()
{
    console.log("server listen on Port" + app.get("port"));
});