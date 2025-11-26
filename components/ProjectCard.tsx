import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProjectCardProps {
  emoji: string;
  title: string;
  description: string;
  tags: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ emoji, title, description, tags }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <Text key={index} style={styles.tag}>#{tag}</Text>
        ))}
      </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  emoji: {
    fontSize: 22,
    marginRight: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#f5f5f5',
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: '#f5f5f5',
    marginTop: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  tag: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 12,
    color: '#ff4f81',
    marginRight: 6,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#444',
  },
});