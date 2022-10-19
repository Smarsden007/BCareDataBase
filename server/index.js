const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json()); //req.body



//create a todo

app.post("/todos", async (req, res) => {
    try {
      const { description } = req.body;
      const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]
      );
  
      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get all facilities
  
  app.get("/facilities", async (req, res) => {
    try {
      const allFacilities = await pool.query("SELECT * FROM facilities");
      res.json(allFacilities.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a todo
  
  app.get("/facilities/:id", async (req, res) => {
    try {
        console.log("##########")
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM facilities WHERE facility_id:100", [
        id
      ]);
  
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //update a todo
  
  app.put("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updateTodo = await pool.query(
        "UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, id]
      );
  
      res.json("Todo was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete a todo
  
  app.delete("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
        id
      ]);
      res.json("Todo was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });



app.listen(5000, () => {
    console.log("server has started on port 5000")
})










//test queries below


// pool.query(`Select * from clinician_work_history`, (err, res)=> {
//     if(!err){
//       console.log(res.rows);
//     }else{
//       console.log(err.message)
//     }
//     pool.end
//   })
  
  
//   pool.query(`Select * from jobs`, (err, res)=> {
//     if(!err){
//       console.log(res.rows);
//     }else{
//       console.log(err.message)
//     }
//     pool.end
//   })
  
//   pool.query(`Select * from facilities`, (err, res)=> {
//     if(!err){
//       console.log(res.rows);
//     }else{
//       console.log(err.message)
//     }
//     pool.end
//   })
  
//   pool.query(`Select * from nurses`, (err, res)=> {
//     if(!err){
//       console.log(res.rows);
//     }else{
//       console.log(err.message)
//     }
//     pool.end
//   })
  
//   pool.query(`Select * from nurse_hired_jobs`, (err, res)=> {
//     if(!err){
//       console.log(res.rows);
//     }else{
//       console.log(err.message)
//     }
//     pool.end
//   })
