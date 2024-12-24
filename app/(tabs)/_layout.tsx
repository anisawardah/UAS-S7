import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007BFF', // Warna aktif tab
        tabBarInactiveTintColor: '#8B8B8B', // Warna tidak aktif tab
        tabBarStyle: {
          backgroundColor: '#FAFAFA', // Latar belakang tab bar
        },
      }}
    >
      {/* Tab Home */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} /> // Ikon untuk halaman utama
          ),
          title: 'Home', // Nama tab untuk halaman utama
        }}
      />

      {/* Tab Absensi */}
      <Tabs.Screen
        name="attendance"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox" size={size} color={color} /> // Ikon untuk absensi
          ),
          title: 'Absensi', // Nama tab untuk absensi karyawan
        }}
      />

      {/* Tab Rekap Absensi */}
      <Tabs.Screen
        name="attendance-summary"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics" size={size} color={color} /> // Ikon untuk rekap absensi
          ),
          title: 'Rekap Absensi', // Nama tab untuk melihat rekap absensi
        }}
      />
    </Tabs>
  );
};
