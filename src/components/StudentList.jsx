import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  IconButton, 
  Typography,
  Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const StudentList = ({ students, onDelete }) => {
  if (!students || students.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h6">لا يوجد طلاب مسجلين حالياً</Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell align="right"><strong>اسم الطالب</strong></TableCell>
            <TableCell align="right"><strong>الرقم الجامعي</strong></TableCell>
            <TableCell align="right"><strong>البريد الإلكتروني</strong></TableCell>
            <TableCell align="right"><strong>رقم الهاتف</strong></TableCell>
            <TableCell align="right"><strong>القسم</strong></TableCell>
            <TableCell align="center"><strong>الإجراءات</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student._id}>
              <TableCell align="right">{student.name}</TableCell>
              <TableCell align="right">{student.studentId}</TableCell>
              <TableCell align="right">{student.email}</TableCell>
              <TableCell align="right">{student.phone || 'غير متوفر'}</TableCell>
              <TableCell align="right">{student.department || 'غير متوفر'}</TableCell>
              <TableCell align="center">
                <IconButton 
                  component={Link} 
                  to={`/edit/${student._id}`} 
                  color="primary"
                >
                  <EditIcon />
                </IconButton>
                <IconButton 
                  color="error" 
                  onClick={() => onDelete(student._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;