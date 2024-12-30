import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const employees = [
  { id: 1, name: 'Budi', status: 'Hadir' },
  { id: 2, name: 'Siti', status: 'Hadir' },
  { id: 3, name: 'Joko', status: 'Izin' },
  { id: 4, name: 'Andi', status: 'Terlambat' },
  { id: 5, name: 'Ayu', status: 'Hadir' },
];

const getButtonColor = (status) => {
  switch (status) {
    case 'Hadir':
      return '#28a745'; // Hijau untuk Hadir
    case 'Izin':
      return '#007BFF'; // Biru untuk Izin
    case 'Terlambat':
      return '#ffc107'; // Kuning untuk Terlambat
    default:
      return '#007BFF'; // Default warna biru
  }
};

const Attendance = () => {
  const handleMarkAttendance = (id, status) => {
    alert(`Absensi untuk Karyawan ID: ${id} telah diubah menjadi ${status}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Absensi Karyawan</Text>
        <Text style={styles.subtitle}>Catat Kehadiran Karyawan Hari Ini</Text>
      </View>

      {/* Daftar Karyawan */}
      <View style={styles.employeeList}>
        {employees.map((employee) => (
          <View key={employee.id} style={styles.employeeCard}>
            <Text style={styles.employeeName}>{employee.name}</Text>
            <Text style={styles.employeeStatus}>Status: {employee.status}</Text>

            {/* Tombol untuk mengubah status kehadiran */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: getButtonColor('Hadir') }]}
                onPress={() => handleMarkAttendance(employee.id, 'Hadir')}
              >
                <Text style={styles.buttonText}>Hadir</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: getButtonColor('Izin') }]}
                onPress={() => handleMarkAttendance(employee.id, 'Izin')}
              >
                <Text style={styles.buttonText}>Izin</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: getButtonColor('Terlambat') }]}
                onPress={() => handleMarkAttendance(employee.id, 'Terlambat')}
              >
                <Text style={styles.buttonText}>Terlambat</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#007BFF',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  employeeList: {
    padding: 20,
  },
  employeeCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 1,
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  employeeStatus: {
    fontSize: 14,
    color: '#555',
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Attendance;
