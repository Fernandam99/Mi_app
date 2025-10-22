import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SkillCardProps {
  emoji: string;
  name: string;
  level?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ emoji, name, level }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        {level && <Text style={styles.level}>{level}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  emoji: {
    fontSize: 24,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  level: {
    fontSize: 14,
    color: '#666',
  },
});
