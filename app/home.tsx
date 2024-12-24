import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Aplikasi Absensi Karyawan</Text>
        <Text style={styles.subtitle}>Pantau Kehadiran Karyawan Anda dengan Mudah</Text>
      </View>

      {/* Informasi Kehadiran */}
      <View style={styles.attendanceInfoSection}>
        <Text style={styles.sectionTitle}>Informasi Kehadiran Hari Ini</Text>
        <View style={styles.infoCardsContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>Karyawan Hadir</Text>
            <Text style={styles.infoCardValue}>45</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>Karyawan Izin</Text>
            <Text style={styles.infoCardValue}>5</Text>
          </View>
        </View>
      </View>

      {/* Tombol Aksi */}
      <View style={styles.actionsSection}>
        <TouchableOpacity style={styles.actionButton} onPress={() => alert('Absensi Karyawan')}>
          <Text style={styles.actionButtonText}>Absensi Karyawan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => alert('Rekap Absensi')}>
          <Text style={styles.actionButtonText}>Rekap Absensi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => alert('Pengaturan')}>
          <Text style={styles.actionButtonText}>Pengaturan</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  attendanceInfoSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    width: '48%',
    alignItems: 'center',
    elevation: 1,
  },
  infoCardTitle: {
    fontSize: 14,
    color: '#555',
  },
  infoCardValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
    marginTop: 5,
  },
  actionsSection: {
    padding: 20,
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;
