const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
];

// GET
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3]);
});

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
        res.status(404).send("The course with the given ID was not found...");
    res.send(course);
});

// POST
app.post("/api/courses", (req, res) => {
    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
});

// PUT
app.put("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) {
        return res
            .status(404)
            .send("The course with the given ID was not found...");
    }

    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    // Update course
    course.name = req.body.name;
    // Return the updated course
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required(),
    };
    return Joi.validate(course, schema);
}

// DELETE
app.delete("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) {
        return res
            .status(404)
            .send("The course with the given ID was not found...");
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
