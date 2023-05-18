const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express()
app.use(cors());
app.use(express.json())


const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Vamsi@#9432",
    database : "clicksdb"
})

app.get("/" , (req,res) => {
    return res.json("app is running");
})

app.get("/data", (req,res) => {
    const sql = "SELECT * from linkstable";
    db.query(sql, (error, data) => {
        if (error) return res.json(error)
        return res.json(data)
    })
})

app.post("/update", (req,res) => {
     const {linktype} = req.body;
     db.query('INSERT INTO linkstable (linktype,date) VALUES (?, now())', [linktype] , (error,data) => {
            if (error) {
                console.log("backend error",error)
            }
            res.send(200)
     })
})

app.get("/barchat", (req,res) => {
    const qry = "SELECT CONCAT(DATE_FORMAT(date, '%h:00'), '-', DATE_FORMAT(DATE_ADD(date, INTERVAL 1 HOUR), '%h:00')) AS Time_between, SUM(CASE WHEN linktype = 'link1' THEN 1 ELSE 0 END) AS link1, SUM(CASE WHEN linktype = 'link2' THEN 1 ELSE 0 END) AS link2 FROM clicksdb.linkstable WHERE DATE(date) = '2023-05-17' GROUP BY Time_between ORDER BY Time_between LIMIT 0, 1000";
    db.query(qry, (error,data) => {
        if (error) return res.json(error)
        return res.json(data)
    })
})

app.get("/piechat" , (req,res) => {
    const qry = "select linktype, count(linktype) as count from linkstable group by linktype"
    db.query(qry, (error,data) => {
        if (error) return res.json(error)
        return res.json(data)
    })
})

app.get("/radialchart", (req,res) => {
    const qry = "SELECT linktype, COUNT(*) AS count, CASE WHEN linktype = 'link1' THEN 'Link 1' WHEN linktype = 'link2' THEN 'Link 2' ELSE NULL END AS name FROM linkstable GROUP BY linktype"
    db.query(qry, (error,data) => {
        if (error) return res.json(error)
        return res.json(data)
    })
})

app.listen(8001 , () => {
    console.log("server running at http://localhost:8001")
})