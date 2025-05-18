import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import StudentList from '../components/StudentList';
import { getAllStudents, deleteStudent } from '../services/studentService';

const HomePage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, studentId: null });

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const data = await getAllStudents();
      setStudents(data);
      setError(null);
    } catch (err) {
      setError('حدث خطأ أثناء جلب بيانات الطلاب');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDeleteClick = (id) => {
    setDeleteDialog({ open: true, studentId: id });
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteStudent(deleteDialog.studentId);
      setStudents(students.filter(student => student._id !== deleteDialog.studentId));
      setDeleteDialog({ open: false, studentId: null });
    } catch (err) {
      console.error('خطأ في حذف الطالب:', err);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialog({ open: false, studentId: null });
  };

  return (
    <Container>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          قائمة الطلاب المسجلين
        </Typography>
      </Box>

      {loading ? (
        <Typography align="center">جاري تحميل البيانات...</Typography>
      ) : error ? (
        <Typography color="error" align="center">{error}</Typography>
      ) : (
        <StudentList students={students} onDelete={handleDeleteClick} />
      )}

      <Dialog
        open={deleteDialog.open}
        onClose={handleDeleteCancel}
      >
        <DialogTitle>تأكيد الحذف</DialogTitle>
        <DialogContent>
          <DialogContentText>
            هل أنت متأكد من رغبتك في حذف هذا الطالب؟ لا يمكن التراجع عن هذا الإجراء.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            إلغاء
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            حذف
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ mt: 4, p: 2, bgcolor: '#f5f5f5', textAlign: 'center' }}>
        <Typography variant="body1">جمعة على عبد الرحمن</Typography>
        <Typography variant="body1">رقم الهاتف: 911313949</Typography>
      </Box>
    </Container>
  );
};

export default HomePage;