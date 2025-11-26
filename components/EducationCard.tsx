import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EducationCardProps {
    school: string;
    degree: string;
    year: string;
    icon?: string;
}

export const EducationCard: React.FC<EducationCardProps> = ({
    school,
    degree,
    year,
    icon = '🎓',
}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.icon}>{icon}</Text>
            <View style={styles.info}>
                <Text style={styles.school}>{school}</Text>
                <Text style={styles.degree}>{degree}</Text>
                <Text style={styles.year}>{year}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        padding: 12,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#ff003c', 
    },
    icon: {
        fontSize: 20,
        marginRight: 10,
        color: '#ff4f81', 
    },
    info: {
        flex: 1,
    },
    school: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f5f5f5',
    },
    degree: {
        fontSize: 14,
        color: '#ff4f81', 
        marginTop: 2,
    },
    year: {
        fontSize: 13,
        color: '#a8a8a8',
        marginTop: 2,
    },
});