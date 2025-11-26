import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, Alert, Linking } from 'react-native';
import { useState, useMemo } from 'react';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import { EducationCard } from './components/EducationCard';
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
  socialStyles,
  filterStyles,
} from './styles';

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
  completed?: boolean;
  link?: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
  icon?: string;
}

interface SocialLink {
  icon: string;
  label: string;
  url: string;
  variant: 'primary' | 'secondary' | 'success' | 'warning';
}

// ==================== DATOS PERSONALES ====================
const personalInfo = {
  name: 'María Fernanda Moreno Acosta',
  title: 'Desarrolladora Backend',
  avatar: require('./img/avatar.png'),
  bio: 'Me considero una desarrolladora backend, aunque también he trabajado en proyectos full stack. Me apasiona crear soluciones funcionales y escalables. He trabajado con Python y JavaScript, usando frameworks como Flask y Prisma, además de librerías como React.',
};

// ==================== CONTACTO ====================
const contacts: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'mm43651@gmail.co' },
  { icon: '📍', label: 'Ubicación', value: 'Bogotá, Colombia' },
];

// ==================== REDES SOCIALES ====================
const socialLinks: SocialLink[] = [
  { icon: '🐱', label: 'GitHub', url: 'https://github.com/fernandam99', variant: 'primary' },
  { icon: '✉️', label: 'Email', url: 'mailto:mm43651@gmail.co', variant: 'secondary' },
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
    emoji: '✅',
    title: 'To-Do List React',
    description: 'Aplicación interactiva de lista de tareas desarrollada con React y Tailwind CSS. Permite agregar, editar, marcar como completadas y eliminar tareas.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Frontend'],
    completed: true,
    link: 'https://github.com/fernandam99/todo-list-react',
  },
  {
    id: '2',
    emoji: '🏡',
    title: 'Inmobiliaria API',
    description: 'API RESTful desarrollada con Express.js para gestionar propiedades, agentes y compradores. Incluye CRUD completo, filtros por query params y middlewares de validación.',
    tags: ['JavaScript', 'Express.js', 'Node.js', 'API REST', 'Bruno'],
    completed: true,
    link: 'https://github.com/Fernandam99/inmobiliaria-express',
  },
  {
    id: '3',
    emoji: '🧶',
    title: 'E-commerce de venta de amigurumis',
    description: 'Desarrollo de una tienda en línea para la venta de amigurumis. Incluye gestión de stock, sistema de ventas, carrito de compras y panel administrativo.',
    tags: ['JavaScript', 'Node.js', 'Prisma', 'MySQL', 'React'],
    completed: true,
    link: 'https://github.com/fernandam99/amigurumi-ecommerce',
  },
  {
    id: '4',
    emoji: '🎯',
    title: 'Plataforma de Técnicas de Estudio',
    description: 'Plataforma colaborativa de SENA con herramientas de concentración y temporizadores.',
    tags: ['Python', 'Flask', 'API REST', 'JavaScript'],
    completed: false,
    link: 'https://github.com/Fernandam99/proyectoSynapse.git',
  },
];

// ==================== EXPERIENCIA ====================
const experiences: Experience[] = [
  {
    id: '1',
    company: 'Formación SENA',
    position: 'Desarrolladora Backend (Académico)',
    period: '2025 – Presente',
    description: 'Experiencia 100% académica enfocada en el desarrollo de microservicios y APIs REST, aplicando buenas prácticas y uso de tecnologías modernas como Flask, Node.js y Prisma.',
  },
  {
    id: '2',
    company: 'SENA – Proyecto Técnico',
    position: 'Desarrolladora Full Stack',
    period: '2023 – 2024',
    description: 'Desarrollo de un e-commerce para la venta de amigurumis. Implementé gestión de stock, carrito de compras, sistema de ventas y panel administrativo usando JavaScript, Node.js, Prisma, MySQL y React.',
  },
];

// ==================== EDUCACIÓN ====================
const education: Education[] = [
  {
    id: '1',
    school: 'SENA',
    degree: 'Técnico en Desarrollo de Software',
    year: '2024',
    icon: '🎓',
  },
  {
    id: '2',
    school: 'Colegio Diego Montaña Cuellar I.E.D',
    degree: 'Bachillerato',
    year: '2024',
    icon: '📚',
  },
];

// ==================== TIPOS ====================
type SectionType = 'skills' | 'experience' | 'projects' | 'education';
type FilterType = 'all' | string;

// ==================== COMPONENTE PRINCIPAL ====================
export default function App() {
  const [expandedSection, setExpandedSection] = useState<SectionType | null>('projects');
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  const toggleSection = (section: SectionType) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Contador de proyectos completados
  const completedProjects = useMemo(
    () => projects.filter((p) => p.completed).length,
    []
  );

  // Filtra proyectos por tecnología
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return projects;
    return projects.filter((p) => p.tags.includes(selectedFilter));
  }, [selectedFilter]);

  // Obtener todas las tecnologías únicas
  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((p) => p.tags.forEach((tag) => techs.add(tag)));
    return Array.from(techs).sort();
  }, []);

  // Abrir enlaces
  const openSocialLink = async (url: string, label: string) => {
    try {
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', `No se pudo abrir ${label}`);
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al abrir el enlace');
    }
  };

  // Alert en proyectos
  const handleProjectPress = (project: Project) => {
    Alert.alert(
      project.title,
      `${project.description}\n\n${project.completed ? '✅ Completado' : '🚧 En desarrollo'}`,
      [
        { text: 'Ver en GitHub', onPress: () => project.link && openSocialLink(project.link, 'GitHub') },
        { text: 'Cerrar', style: 'cancel' },
      ]
    );
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
          <Image source={personalInfo.avatar} style={avatarStyles.image} />
        </View>

        {/* ========== NOMBRE Y TÍTULO ========== */}
        <View style={profileStyles.container}>
          <Text style={profileStyles.name}>{personalInfo.name}</Text>
          <Text style={profileStyles.title}>{personalInfo.title}</Text>
        </View>

        {/* ========== REDES SOCIALES ========== */}
        <View style={socialStyles.container}>
          {socialLinks.map((social) => {
            const variantStyle =
              social.variant === 'secondary' ? socialStyles.buttonSecondary :
                social.variant === 'success' ? socialStyles.buttonSuccess :
                  social.variant === 'warning' ? socialStyles.buttonWarning : {};
            return (
              <TouchableOpacity
                key={social.label}
                style={[socialStyles.button, variantStyle]}
                onPress={() => openSocialLink(social.url, social.label)}
                activeOpacity={0.7}
              >
                <Text style={socialStyles.icon}>{social.icon}</Text>
              </TouchableOpacity>
            );
          })}
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

        {/* ========== EDUCACIÓN ========== */}
        <View style={collapsibleStyles.container}>
          <TouchableOpacity
            style={[collapsibleStyles.button, collapsibleStyles.buttonEducation]}
            onPress={() => toggleSection('education')}
          >
            <Text style={collapsibleStyles.buttonText}>🎓 Mi Educación</Text>
            <Text style={collapsibleStyles.buttonIcon}>
              {expandedSection === 'education' ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>
          {expandedSection === 'education' && (
            <View style={collapsibleStyles.contentContainer}>
              {education.map((edu) => (
                <EducationCard key={edu.id} {...edu} />
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

        {/* ========== PROYECTOS CON FILTROS ========== */}
        <View style={collapsibleStyles.container}>
          <TouchableOpacity
            style={[collapsibleStyles.button, collapsibleStyles.buttonProjects]}
            onPress={() => toggleSection('projects')}
          >
            <View>
              <Text style={collapsibleStyles.buttonText}>🚀 Mis Proyectos</Text>
              <Text style={collapsibleStyles.buttonSubtext}>
                {completedProjects} completados • {projects.length} total
              </Text>
            </View>
            <Text style={collapsibleStyles.buttonIcon}>
              {expandedSection === 'projects' ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>

          {expandedSection === 'projects' && (
            <View style={collapsibleStyles.contentContainer}>
              {/* Filtros */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={filterStyles.container}
              >
                <TouchableOpacity
                  style={[
                    filterStyles.filterButton,
                    selectedFilter === 'all' && filterStyles.filterButtonActive,
                  ]}
                  onPress={() => setSelectedFilter('all')}
                >
                  <Text
                    style={[
                      filterStyles.filterText,
                      selectedFilter === 'all' && filterStyles.filterTextActive,
                    ]}
                  >
                    Todos ({projects.length})
                  </Text>
                </TouchableOpacity>
                {allTechs.map((tech) => {
                  const count = projects.filter((p) => p.tags.includes(tech)).length;
                  return (
                    <TouchableOpacity
                      key={tech}
                      style={[
                        filterStyles.filterButton,
                        selectedFilter === tech && filterStyles.filterButtonActive,
                      ]}
                      onPress={() => setSelectedFilter(tech)}
                    >
                      <Text
                        style={[
                          filterStyles.filterText,
                          selectedFilter === tech && filterStyles.filterTextActive,
                        ]}
                      >
                        {tech} ({count})
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>

              {/* Proyectos */}
              {filteredProjects.map((project) => (
                <TouchableOpacity
                  key={project.id}
                  onPress={() => handleProjectPress(project)}
                  activeOpacity={0.7}
                >
                  <ProjectCard {...project} />
                </TouchableOpacity>
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