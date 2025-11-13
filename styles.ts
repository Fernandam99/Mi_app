import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b', // fondo 
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
    color: '#ff003c', 
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
    borderColor: '#ff003c', 
    shadowColor: '#ff003c',
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
    color: '#f5f5f5',
  },
  title: {
    fontSize: 16,
    color: '#ff4f81',
  },
});

export const contactStyles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ff003c',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff003c',
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
    color: '#ff4f81',
  },
  infoContainer: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 14,
    color: '#ff4f81',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    color: '#e5e5e5',
  },
});

export const bioStyles = StyleSheet.create({
  card: {
    backgroundColor: '#141414',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#6a0dad',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#bb86fc',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#f1f1f1',
    lineHeight: 20,
  },
});

export const separatorStyles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#6a0dad',
    marginVertical: 15,
    opacity: 0.5,
  },
});

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
  },
  buttonSkills: {
    backgroundColor: '#2b0040',
  },
  buttonExperience: {
    backgroundColor: '#330000',
  },
  buttonProjects: {
    backgroundColor: '#3a0a0a',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f5f5f5',
    letterSpacing: 1,
  },
  buttonIcon: {
    fontSize: 18,
    color: '#ff003c',
  },
  contentContainer: {
    marginTop: 10,
  },
});

export const footerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 40,
  },
  text: {
    fontSize: 16,
    color: '#ff003c',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subtext: {
    fontSize: 12,
    color: '#a8a8a8',
  },
});
