let students = [
    {id: '1', name: 'Joe joe'},
    {id: '2', name: 'Tong Tong'},
    {id: '4', name: 'Jack Lock'},
    {id: '3', name: 'Rodrigo Sancho'},
]


const getStudent = (req, res) => {
    res.json(students);
}

const getStudentById = (req, res) => {
    let sid = req.params.id;
    for (let student of students) {
        if(student.id == sid) {
            res.json(student)
        }   
    }
    res.json({message: 'Not found!'})
}



exports.getStudent = getStudent;
exports.getStudentById = getStudentById;