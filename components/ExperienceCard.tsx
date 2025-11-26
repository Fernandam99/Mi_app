import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  period,
  description,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.position}>{position}</Text>
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ff003c',
  },
  position: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f5f5f5',
  },
  company: {
    fontSize: 14,
    color: '#ff4f81',
    marginTop: 2,
  },
  period: {
    fontSize: 13,
    color: '#a8a8a8',
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    color: '#f5f5f5',
    marginTop: 6,
  },
});