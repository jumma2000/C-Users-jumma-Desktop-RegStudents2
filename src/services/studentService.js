import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

// الحصول على جميع الطلاب
export const getAllStudents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('خطأ في الحصول على بيانات الطلاب:', error);
    throw error;
  }
};

// إضافة طالب جديد
export const createStudent = async (studentData) => {
  try {
    const response = await axios.post(API_URL, studentData);
    return response.data;
  } catch (error) {
    console.error('خطأ في إضافة طالب جديد:', error);
    throw error;
  }
};

// الحصول على طالب محدد
export const getStudentById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('خطأ في الحصول على بيانات الطالب:', error);
    throw error;
  }
};

// تحديث بيانات طالب
export const updateStudent = async (id, studentData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, studentData);
    return response.data;
  } catch (error) {
    console.error('خطأ في تحديث بيانات الطالب:', error);
    throw error;
  }
};

// حذف طالب
export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('خطأ في حذف الطالب:', error);
    throw error;
  }
};