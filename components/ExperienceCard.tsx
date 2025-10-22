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
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.position}>{position}</Text>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  company: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  position: {
    fontSize: 15,
    color: '#444',
    marginTop: 3,
  },
  period: {
    fontSize: 13,
    color: '#777',
    marginTop: 3,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});
