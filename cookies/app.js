const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {

    let visits = req.cookies.visits;

    if (visits) {
        visits = parseInt(visits) + 1;
    } else {
        visits = 1;
    }

    res.cookie('visits', visits, { maxAge: 60 * 60 * 1000 });

    if (req.session.views) {
        req.session.views++;
    } else {
        req.session.views = 1;
    }

    res.send(`
        <h2>Session Tracking Demo</h2>
        <p><b>Cookie Visits:</b> ${visits}</p>
        <p><b>Session Visits:</b> ${req.session.views}</p>

        <br>
        <a href="/">Refresh Page</a><br><br>
        <a href="/clear">Clear Cookie</a><br><br>
        <a href="/logout">Destroy Session</a>
    `);
});

app.get('/clear', (req, res) => {
    res.clearCookie('visits');
    res.send("Cookie cleared! <a href='/'>Go Home</a>");
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send("Session destroyed! <a href='/'>Go Home</a>");
    });
});

app.listen(3002, () => {
    console.log("Server running at http://localhost:3002");
});