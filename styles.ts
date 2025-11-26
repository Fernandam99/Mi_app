import { StyleSheet } from 'react-native';

// === Colores base ===
const darkBg = '#0b0b0b';         
const cardBg = '#1a1a1a';         
const borderColor = '#ff003c';     
const textColor = '#f5f5f5';       
const textColorSecondary = '#ff4f81'; 
const textColorMuted = '#a8a8a8';  

// === Estilo base para tarjetas ===
const baseCard = {
  backgroundColor: cardBg,
  borderRadius: 12,
  padding: 16,
  marginBottom: 16,
  borderWidth: 1,
  borderColor: borderColor,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkBg,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: borderColor,
    textShadowColor: '#910027',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    letterSpacing: 2,
  },
});

export const avatarStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: borderColor,
    shadowColor: borderColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
});

export const profileStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: textColor,
  },
  title: {
    fontSize: 16,
    color: textColorSecondary,
  },
});

// === Redes sociales ===
export const socialStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginVertical: 12,
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: borderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: textColorSecondary,
  },
  buttonSecondary: { backgroundColor: '#330000' },
  buttonSuccess: { backgroundColor: '#2b002b' },
  buttonWarning: { backgroundColor: '#3a0a0a' },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
});

// === Contacto ===
export const contactStyles = StyleSheet.create({
  card: {
    ...baseCard,
    padding: 14,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: textColorSecondary,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  itemWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#292929',
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
    color: textColorSecondary,
  },
  infoContainer: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 14,
    color: textColorSecondary,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    color: textColor,
  },
});

// === Sobre mí ===
export const bioStyles = StyleSheet.create({
  card: {
    ...baseCard,
    padding: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: textColorSecondary,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: textColor,
    lineHeight: 20,
  },
});

// === Educación ===
export const educationStyles = StyleSheet.create({
  card: {
    ...baseCard,
    padding: 14,
    marginBottom: 12,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
    color: textColorSecondary,
  },
  schoolName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
  },
  degree: {
    fontSize: 14,
    color: textColorSecondary,
    marginTop: 2,
  },
  year: {
    fontSize: 13,
    color: textColorMuted,
    marginTop: 2,
  },
});

// === Experiencia ===
export const experienceCardStyles = StyleSheet.create({
  card: {
    ...baseCard,
    padding: 14,
    marginBottom: 12,
  },
  position: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
  },
  company: {
    fontSize: 14,
    color: textColorSecondary,
    marginTop: 2,
  },
  period: {
    fontSize: 13,
    color: textColorMuted,
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    color: textColor,
    lineHeight: 20,
    marginTop: 6,
  },
});

// === Habilidades ===
export const skillCardStyles = StyleSheet.create({
  card: {
    ...baseCard,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 24,
    marginRight: 12,
    color: textColorSecondary,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
  },
  level: {
    fontSize: 13,
    color: textColorMuted,
    marginTop: 2,
  },
});

// === Proyectos ===
export const projectCardStyles = StyleSheet.create({
  card: {
    ...baseCard,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  emoji: {
    fontSize: 26,
    marginRight: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: textColor,
    flex: 1,
  },
  badge: {
    backgroundColor: textColorSecondary,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: textColor,
    lineHeight: 20,
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: '#444',
  },
  tagText: {
    fontSize: 12,
    color: textColorSecondary,
    fontWeight: '600',
  },
});

// === Separador ===
export const separatorStyles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    marginVertical: 15,
    opacity: 0.5,
  },
});

// === Botones colapsables (todos iguales) ===
export const collapsibleStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#330000', 
  },
  buttonSkills: { backgroundColor: '#330000' },
  buttonExperience: { backgroundColor: '#330000' },
  buttonProjects: { backgroundColor: '#330000' },
  buttonEducation: { backgroundColor: '#330000' },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
    letterSpacing: 1,
  },
  buttonSubtext: {
    fontSize: 12,
    color: textColorMuted,
    marginTop: 4,
  },
  buttonIcon: {
    fontSize: 18,
    color: borderColor,
  },
  contentContainer: {
    marginTop: 10,
  },
});

// === Filtros ===
export const filterStyles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    marginRight: 8,
    backgroundColor: '#2a2a2a',
    borderWidth: 1,
    borderColor: '#444',
  },
  filterButtonActive: {
    backgroundColor: borderColor,
    borderColor: borderColor,
  },
  filterText: {
    color: '#ccc',
    fontSize: 13,
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#fff',
  },
});

// === Footer ===
export const footerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 40,
  },
  text: {
    fontSize: 16,
    color: borderColor,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subtext: {
    fontSize: 12,
    color: textColorMuted,
  },
});