// app.ts
import express from 'express';
import assignmentController from './AssignmentController';

const app = express();
const PORT = 9090;

// Use the AssignmentController routes
app.use('/assignments', assignmentController);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
