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
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.title}>{title}</Text>
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
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  emoji: {
    fontSize: 22,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  tag: {
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 12,
    color: '#444',
    marginRight: 6,
    marginBottom: 4,
  },
});
