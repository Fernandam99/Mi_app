import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import {
  globalStyles,
  headerStyles,
  avatarStyles,
  profileStyles,
  contactStyles,
  bioStyles,
  separatorStyles,
  collapsibleStyles,
  footerStyles,
} from './styles';

const avatarImg: any = require('./img/avatar.png');

// ==================== INTERFACES ====================
interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface Skill {
  id: string;
  emoji: string;
  name: string;
  level?: string;
}

interface Project {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
}

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
}

// ==================== DATOS PERSONALES ====================
const personalInfo = {
  name: 'María Fernanda Moreno Acosta',
  title: 'Desarrolladora Backend',
  avatar: avatarImg,
  bio: 'Me considero una desarrolladora backend, aunque también he trabajado en proyectos full stack. Me apasiona crear soluciones funcionales y escalables. He trabajado con Python y JavaScript, usando frameworks como Flask y Prisma, además de librerías como React.',
};

// ==================== CONTACTO ====================
const contacts: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'mm43651@gmail.co' },
  { icon: '📍', label: 'Ubicación', value: 'Bogotá, Colombia' },
];

// ==================== HABILIDADES ====================
const skills: Skill[] = [
  { id: '1', emoji: '🐍', name: 'Python', level: 'Intermedio' },
  { id: '2', emoji: '🔥', name: 'JavaScript', level: 'Avanzado' },
  { id: '3', emoji: '⚡', name: 'Node.js', level: 'Básico' },
  { id: '4', emoji: '🧩', name: 'Prisma', level: 'Intermedio' },
  { id: '5', emoji: '💾', name: 'MySQL', level: 'Intermedio' },
  { id: '6', emoji: '🛠️', name: 'Flask', level: 'Avanzado' },
  { id: '7', emoji: '📊', name: 'Git & GitHub', level: 'Intermedio' },
  { id: '8', emoji: '⚛️', name: 'React', level: 'Básico' },
];

// ==================== PROYECTOS ====================
const projects: Project[] = [
  {
    id: '1',
    emoji: '🧶',
    title: 'E-commerce de venta de amigurumis',
    description:
      'Desarrollo de una tienda en línea para la venta de amigurumis. Incluye gestión de stock, sistema de ventas, carrito de compras y panel administrativo.',
    tags: ['JavaScript', 'Node.js', 'Prisma', 'MySQL', 'React'],
  },
  {
    id: '2',
    emoji: '🎯',
    title: 'Proyecto de Técnicas de Estudio y Concentración',
    description:
      'Proyecto académico para el SENA enfocado en ayudar a mejorar la concentración y los hábitos de estudio mediante recordatorios, herramientas y recursos interactivos.',
    tags: ['Python', 'Flask', 'API REST', 'Frontend Básico'],
  },
];

// ==================== EXPERIENCIA ====================
const experiences: Experience[] = [
  {
    id: '1',
    company: 'Formación SENA',
    position: 'Desarrolladora Backend (Académico)',
    period: '2025 Presente',
    description:
      'Experiencia 100% académica enfocada en el desarrollo de microservicios y APIs REST, aplicando buenas prácticas y uso de tecnologías modernas como Flask, Node.js y Prisma.',
  },
];

// ==================== TIPOS ====================
type SectionType = 'skills' | 'experience' | 'projects';

// ==================== COMPONENTE PRINCIPAL ====================
export default function App() {
  const [expandedSection, setExpandedSection] = useState<SectionType | null>('projects');

  const toggleSection = (section: SectionType) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={globalStyles.scrollView}>
        
        {/* ========== HEADER ========== */}
        <View style={headerStyles.container}>
          <Text style={headerStyles.title}>Mi perfil Personal</Text>
        </View>

        {/* ========== AVATAR ========== */}
        <View style={avatarStyles.container}>
          <Image
            source={personalInfo.avatar} 
            style={avatarStyles.image}
          />
        </View>

        {/* ========== NOMBRE Y TÍTULO ========== */}
        <View style={profileStyles.container}>
          <Text style={profileStyles.name}>{personalInfo.name}</Text>
          <Text style={profileStyles.title}>{personalInfo.title}</Text>
        </View>

        {/* ========== SECCIÓN CONTACTO ========== */}
        <View style={contactStyles.card}>
          <Text style={contactStyles.cardTitle}>📞 Contacto</Text>
          {contacts.map((contact, index) => (
            <View
              key={index}
              style={[
                contactStyles.itemContainer,
                index < contacts.length - 1 && contactStyles.itemWithBorder,
              ]}
            >
              <Text style={contactStyles.icon}>{contact.icon}</Text>
              <View style={contactStyles.infoContainer}>
                <Text style={contactStyles.label}>{contact.label}</Text>
                <Text style={contactStyles.value}>{contact.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* ========== SOBRE MÍ ========== */}
        <View style={bioStyles.card}>
          <Text style={bioStyles.title}>📖 Sobre Mí</Text>
          <Text style={bioStyles.text}>{personalInfo.bio}</Text>
        </View>

        {/* ========== SEPARADOR ========== */}
        <View style={separatorStyles.line} />

        {/* ========== HABILIDADES ========== */}
        <View style={collapsibleStyles.container}>
          <TouchableOpacity
            style={[collapsibleStyles.button, collapsibleStyles.buttonSkills]}
            onPress={() => toggleSection('skills')}
          >
            <Text style={collapsibleStyles.buttonText}>💪 Mis Habilidades</Text>
            <Text style={collapsibleStyles.buttonIcon}>
              {expandedSection === 'skills' ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>

          {expandedSection === 'skills' && (
            <View style={collapsibleStyles.contentContainer}>
              {skills.map((skill) => (
                <SkillCard key={skill.id} {...skill} />
              ))}
            </View>
          )}
        </View>

        <View style={separatorStyles.line} />

        {/* ========== EXPERIENCIA ========== */}
        <View style={collapsibleStyles.container}>
          <TouchableOpacity
            style={[collapsibleStyles.button, collapsibleStyles.buttonExperience]}
            onPress={() => toggleSection('experience')}
          >
            <Text style={collapsibleStyles.buttonText}>💼 Mi Experiencia</Text>
            <Text style={collapsibleStyles.buttonIcon}>
              {expandedSection === 'experience' ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>

          {expandedSection === 'experience' && (
            <View style={collapsibleStyles.contentContainer}>
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} {...exp} />
              ))}
            </View>
          )}
        </View>

        <View style={separatorStyles.line} />

        {/* ========== PROYECTOS ========== */}
        <View style={collapsibleStyles.container}>
          <TouchableOpacity
            style={[collapsibleStyles.button, collapsibleStyles.buttonProjects]}
            onPress={() => toggleSection('projects')}
          >
            <Text style={collapsibleStyles.buttonText}>🚀 Mis Proyectos</Text>
            <Text style={collapsibleStyles.buttonIcon}>
              {expandedSection === 'projects' ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>

          {expandedSection === 'projects' && (
            <View style={collapsibleStyles.contentContainer}>
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </View>
          )}
        </View>

        {/* ========== FOOTER ========== */}
        <View style={footerStyles.container}>
          <Text style={footerStyles.text}>Mi app</Text>
          <Text style={footerStyles.subtext}>© 2025</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
