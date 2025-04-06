import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

type Lesson = {
  id: string;
  title: string;
  description: string;
  progress: number;
};

export const LearningScreen: React.FC = () => {
  const [lessons] = useState<Lesson[]>([
    {
      id: '1',
      title: 'Temel Kelimeler',
      description: 'Günlük hayatta sık kullanılan temel kelimeler',
      progress: 75,
    },
    {
      id: '2',
      title: 'Temel Gramer',
      description: 'Basit cümle yapıları ve gramer kuralları',
      progress: 50,
    },
    {
      id: '3',
      title: 'Konuşma Pratiği',
      description: 'Günlük diyaloglar ve konuşma alıştırmaları',
      progress: 25,
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Öğrenme</Text>
      </View>
      <View style={styles.content}>
        {lessons.map((lesson) => (
          <TouchableOpacity key={lesson.id} style={styles.lessonCard}>
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
              <Text style={styles.progressText}>%{lesson.progress}</Text>
            </View>
            <Text style={styles.lessonDescription}>{lesson.description}</Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${lesson.progress}%` },
                ]}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  lessonCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressText: {
    fontSize: 16,
    color: '#007AFF',
  },
  lessonDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
}); 