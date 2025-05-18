const Student = require('../models/Student');

// الحصول على جميع الطلاب
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// إنشاء طالب جديد
exports.createStudent = async (req, res) => {
  const student = new Student(req.body);
  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// الحصول على طالب محدد
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'لم يتم العثور على الطالب' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// تحديث طالب
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!student) return res.status(404).json({ message: 'لم يتم العثور على الطالب' });
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// حذف طالب
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'لم يتم العثور على الطالب' });
    res.json({ message: 'تم حذف الطالب بنجاح' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};