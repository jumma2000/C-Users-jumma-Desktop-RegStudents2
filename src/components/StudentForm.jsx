import React, { useState, useEffect } from 'react';
import { 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  Typography, 
  Container 
} from '@mui/material';

const StudentForm = ({ student, onSubmit, buttonText }) => {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    phone: '',
    department: ''
  });

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name || '',
        studentId: student.studentId || '',
        email: student.email || '',
        phone: student.phone || '',
        department: student.department || ''
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom align="center">
          {buttonText === 'إضافة' ? 'إضافة طالب جديد' : 'تعديل بيانات الطالب'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="اسم الطالب"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="الرقم الجامعي"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="البريد الإلكتروني"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="رقم الهاتف"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="القسم"
                name="department"
                value={formData.department}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth
                size="large"
              >
                {buttonText}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default StudentForm;