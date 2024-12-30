import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const attendanceData = {
  hadir: 20,
  izin: 3,
  terlambat: 2,
  tidakHadir: 1,
};

const AttendanceSummary = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Ringkasan Absensi</Text>
        <Text style={styles.subtitle}>Laporan Kehadiran Karyawan Hari Ini</Text>
      </View>

      {/* Ringkasan Absensi */}
      <View style={styles.summarySection}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Hadir</Text>
          <Text style={styles.cardValue}>{attendanceData.hadir}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Izin</Text>
          <Text style={styles.cardValue}>{attendanceData.izin}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Terlambat</Text>
          <Text style={styles.cardValue}>{attendanceData.terlambat}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tidak Hadir</Text>
          <Text style={styles.cardValue}>{attendanceData.tidakHadir}</Text>
        </View>
      </View>

      {/* Statistik */}
      <View style={styles.statSection}>
        <Text style={styles.statTitle}>Total Kehadiran</Text>
        <Text style={styles.statValue}>{attendanceData.hadir + attendanceData.izin} / {attendanceData.hadir + attendanceData.izin + attendanceData.terlambat + attendanceData.tidakHadir} Karyawan</Text>
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
  summarySection: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 1,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    color: '#555',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    marginTop: 5,
  },
  statSection: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 8,
    elevation: 1,
  },
  statTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statValue: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
});

export default AttendanceSummary;
