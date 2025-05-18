import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Alert, Snackbar, CircularProgress, Box } from '@mui/material';
import StudentForm from '../components/StudentForm';
import { getStudentById, updateStudent } from '../services/studentService';

const EditStudentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await getStudentById(id);
        setStudent(data);
      } catch (err) {
        setError('حدث خطأ أثناء جلب بيانات الطالب');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await updateStudent(id, formData);
      setSnackbar({ open: true, message: 'تم تحديث بيانات الطالب بنجاح' });
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError('حدث خطأ أثناء تحديث بيانات الطالب');
      console.error(err);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Container>
      {student ? (
        <StudentForm student={student} onSubmit={handleSubmit} buttonText="تحديث" />
      ) : (
        <Alert severity="error">لم يتم العثور على الطالب</Alert>
      )}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
      />
    </Container>
  );
};

export default EditStudentPage;