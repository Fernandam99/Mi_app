import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { collapsibleStyles } from '../styles';

interface CollapsibleSectionProps {
    title: string;
    icon: string;
    children: React.ReactNode;
    buttonStyle?: 'skills' | 'experience' | 'projects';
}

export function CollapsibleSection({
    title,
    icon,
    children,
    buttonStyle = 'skills',
}: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(true);

    // Mapeo de estilos según el tipo
    const getButtonStyle = () => {
        switch (buttonStyle) {
            case 'experience':
                return collapsibleStyles.buttonExperience;
            case 'projects':
                return collapsibleStyles.buttonProjects;
            case 'skills':
            default:
                return collapsibleStyles.buttonSkills;
        }
    };

    return (
        <View style={collapsibleStyles.container}>
            <TouchableOpacity
                style={[collapsibleStyles.button, getButtonStyle()]}
                onPress={() => setIsOpen(!isOpen)}
            >
                <Text style={collapsibleStyles.buttonText}>
                    {icon} {title}
                </Text>
                <Text style={collapsibleStyles.buttonIcon}>
                    {isOpen ? '▼' : '▶'}
                </Text>
            </TouchableOpacity>

            {isOpen && (
                <View style={collapsibleStyles.contentContainer}>
                    {children}
                </View>
            )}
        </View>
    );
}