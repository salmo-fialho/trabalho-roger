import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LabCard from './labCard';
import { styles } from '../Styles/Style';



export default function Home() {
  return (
    <>
  
    <View style={styles.container}>
     
      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Tudo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Hotel Tecnológico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>IF Maker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Eletrotécnica</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Laboratórios */}
      <ScrollView style={styles.scrollContainer}>
        <LabCard title="Nome do Lab" subtitle="Hotel Tecnológico" />
        <LabCard title="Nome do Lab" subtitle="Hotel Tecnológico" />
        <LabCard title="Nome do Lab" subtitle="Hotel Tecnológico" />
        <LabCard title="Nome do Lab" subtitle="Hotel Tecnológico" />
        <LabCard title="Nome do Lab" subtitle="Hotel Tecnológico" />
        <LabCard title="Nome do Lab" subtitle="Hotel Tecnológico" />
      </ScrollView>

      {/* Botão de Adicionar */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}


