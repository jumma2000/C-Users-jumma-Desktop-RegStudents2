import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Alert, Snackbar } from '@mui/material';
import StudentForm from '../components/StudentForm';
import { createStudent } from '../services/studentService';

const AddStudentPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const handleSubmit = async (formData) => {
    try {
      await createStudent(formData);
      setSnackbar({ open: true, message: 'تمت إضافة الطالب بنجاح' });
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError('حدث خطأ أثناء إضافة الطالب');
      console.error(err);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <StudentForm onSubmit={handleSubmit} buttonText="إضافة" />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
      />
    </Container>
  );
};

export default AddStudentPage;