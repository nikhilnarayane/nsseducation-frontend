'use client';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
  Tabs,
  Tab,
  Chip,
  Paper,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CollectionsIcon from '@mui/icons-material/Collections';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  category: 'campus' | 'events' | 'students' | 'achievements';
  src: string;
  date: string;
}

// const galleryImages: GalleryImage[] = [
//   {
//     id: 1,
//     title: 'Main Campus Building',
//     description: 'Our state-of-the-art campus building with modern architecture',
//     category: 'campus',
//     src: '/gallery/01.png',
//     date: '2024-01-15',
//   },
//   {
//     id: 2,
//     title: 'Annual Sports Day',
//     description: 'Students participating in various sports activities',
//     category: 'events',
//     src: '/gallery/02.png',
//     date: '2023-12-20',
//   },
//   {
//     id: 3,
//     title: 'Science Lab Session',
//     description: 'Students conducting experiments in our modern laboratory',
//     category: 'campus',
//     src: '/gallery/03.png',
//     date: '2024-01-10',
//   },
//   {
//     id: 4,
//     title: 'Graduation Ceremony',
//     description: 'Annual graduation ceremony for successful students',
//     category: 'achievements',
//     src: '/gallery/04.png',
//     date: '2023-11-25',
//   },
//   {
//     id: 5,
//     title: 'Library Reading Room',
//     description: 'Students studying in our well-stocked library',
//     category: 'campus',
//     src: '/gallery/05.png',
//     date: '2024-01-05',
//   },
//   {
//     id: 6,
//     title: 'Cultural Festival',
//     description: 'Annual cultural festival showcasing student talents',
//     category: 'events',
//     src: '/gallery/06.png',
//     date: '2023-10-15',
//   },
//   {
//     id: 7,
//     title: 'Placement Drive',
//     description: 'Leading companies recruiting our students',
//     category: 'achievements',
//     src: '/gallery/07.png',
//     date: '2023-09-20',
//   },
//   {
//     id: 8,
//     title: 'Student Workshop',
//     description: 'Interactive workshop on emerging technologies',
//     category: 'events',
//     src: '/gallery/08.png',
//     date: '2024-01-18',
//   },
//   {
//     id: 9,
//     title: 'Computer Lab',
//     description: 'Modern computer lab with latest technology',
//     category: 'campus',
//     src: '/gallery/09.png',
//     date: '2024-01-12',
//   },
//   {
//     id: 10,
//     title: 'Group Study Session',
//     description: 'Students collaborating in group study sessions',
//     category: 'students',
//     src: '/gallery/10.png',
//     date: '2024-01-08',
//   },
//   {
//     id: 11,
//     title: 'Award Ceremony',
//     description: 'Students receiving awards for academic excellence',
//     category: 'achievements',
//     src: '/gallery/11.png',
//     date: '2023-12-05',
//   },
//   {
//     id: 12,
//     title: 'Outdoor Activity',
//     description: 'Students participating in outdoor team-building activities',
//     category: 'students',
//     src: '/gallery/12.png',
//     date: '2023-11-30',
//   },
//   {
//     id: 13,
//     title: 'Auditorium',
//     description: 'Our spacious auditorium for seminars and events',
//     category: 'campus',
//     src: '/gallery/13.png',
//     date: '2024-01-20',
//   },
//   {
//     id: 14,
//     title: 'Industrial Visit',
//     description: 'Students visiting industries for practical exposure',
//     category: 'events',
//     src: '/gallery/14.png',
//     date: '2023-10-25',
//   },
//   {
//     id: 15,
//     title: 'Sports Trophy',
//     description: 'Our sports team winning inter-college championship',
//     category: 'achievements',
//     src: '/gallery/15.png',
//     date: '2023-12-18',
//   },
//   {
//     id: 16,
//     title: 'Cafeteria',
//     description: 'Modern cafeteria serving healthy food options',
//     category: 'campus',
//     src: '/gallery/16.png',
//     date: '2024-01-14',
//   },
//   {
//     id: 17,
//     title: 'Freshers Party',
//     description: 'Welcome party for new students',
//     category: 'events',
//     src: '/gallery/17.png',
//     date: '2023-08-20',
//   },
//   {
//     id: 18,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/18.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 19,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/19.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 20,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/20.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 21,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/21.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 22,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/22.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 23,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/23.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 24,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/24.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 25,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/25.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 26,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/26.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 27,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/27.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 28,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/28.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 29,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/29.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 30,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/30.png',
//     date: '2023-11-15',
//   },
//     {
//     id: 31,
//     title: 'Research Project',
//     description: 'Students presenting their research projects',
//     category: 'students',
//     src: '/gallery/31.png',
//     date: '2023-11-15',
//   },
// ];

const galleryImages: GalleryImage[] = [
  // ===== CAMPUS (8) =====
  { id: 1, title: 'Campus Main Entrance', description: 'Welcoming entrance of our vibrant educational campus.', category: 'campus', src: '/gallery/01.png', date: '2024-01-15' },
  { id: 3, title: 'Advanced Laboratory', description: 'Well-equipped laboratory for practical learning sessions.', category: 'campus', src: '/gallery/03.png', date: '2024-01-10' },
  { id: 5, title: 'Central Library Hall', description: 'Quiet and spacious library for focused academic study.', category: 'campus', src: '/gallery/05.png', date: '2024-01-05' },
  { id: 9, title: 'Computer Lab Facility', description: 'Modern computer lab with high-speed systems and internet.', category: 'campus', src: '/gallery/09.png', date: '2024-01-12' },
  { id: 13, title: 'Seminar Auditorium', description: 'Auditorium hosting seminars, workshops, and conferences.', category: 'campus', src: '/gallery/13.png', date: '2024-01-20' },
  { id: 16, title: 'Student Cafeteria', description: 'Clean and modern cafeteria serving nutritious meals.', category: 'campus', src: '/gallery/16.png', date: '2024-01-14' },
  { id: 22, title: 'Campus Garden Area', description: 'Green landscaped area providing a peaceful environment.', category: 'campus', src: '/gallery/22.png', date: '2023-11-01' },
  { id: 30, title: 'Campus Infrastructure', description: 'Modern infrastructure supporting quality education.', category: 'campus', src: '/gallery/30.png', date: '2023-09-28' },

  // ===== EVENTS (9) =====
  { id: 2, title: 'Inter-College Sports Meet', description: 'Students competing enthusiastically in sports activities.', category: 'events', src: '/gallery/02.png', date: '2023-12-20' },
  { id: 6, title: 'Annual Cultural Festival', description: 'Celebration filled with music, dance, and cultural programs.', category: 'events', src: '/gallery/06.png', date: '2023-10-15' },
  { id: 8, title: 'Technical Workshop Session', description: 'Interactive workshop on emerging technologies.', category: 'events', src: '/gallery/08.png', date: '2024-01-18' },
  { id: 14, title: 'Industrial Visit', description: 'Students gaining practical exposure through industry visits.', category: 'events', src: '/gallery/14.png', date: '2023-10-25' },
  { id: 17, title: 'Freshers Welcome Party', description: 'Fun and energetic welcome event for new students.', category: 'events', src: '/gallery/17.png', date: '2023-08-20' },
  { id: 20, title: 'Innovation Exhibition', description: 'Showcase of student innovations and prototypes.', category: 'events', src: '/gallery/20.png', date: '2023-11-08' },
  { id: 23, title: 'Leadership Development Program', description: 'Leadership training session for aspiring student leaders.', category: 'events', src: '/gallery/23.png', date: '2023-10-28' },
  { id: 25, title: 'Science Exhibition Fair', description: 'Creative science projects displayed by students.', category: 'events', src: '/gallery/25.png', date: '2023-10-18' },
  { id: 31, title: 'Alumni Meet Gathering', description: 'Alumni reconnecting and inspiring current students.', category: 'events', src: '/gallery/31.png', date: '2023-09-25' },

  // ===== STUDENTS (8) =====
  { id: 10, title: 'Collaborative Learning', description: 'Students engaged in group study discussions.', category: 'students', src: '/gallery/10.png', date: '2024-01-08' },
  { id: 12, title: 'Outdoor Team Building', description: 'Students participating in team-building activities.', category: 'students', src: '/gallery/12.png', date: '2023-11-30' },
  { id: 18, title: 'Project Presentation Day', description: 'Students presenting academic and research projects.', category: 'students', src: '/gallery/18.png', date: '2023-11-15' },
  { id: 19, title: 'Interactive Classroom Session', description: 'Active classroom learning guided by experienced faculty.', category: 'students', src: '/gallery/19.png', date: '2023-11-10' },
  { id: 21, title: 'Faculty Mentorship Program', description: 'One-on-one mentorship interaction between faculty and students.', category: 'students', src: '/gallery/21.png', date: '2023-11-05' },
  { id: 26, title: 'Cultural Performance', description: 'Students showcasing talents in music and dance.', category: 'students', src: '/gallery/26.png', date: '2023-10-15' },
  { id: 27, title: 'Career Guidance Session', description: 'Professional guidance session for career development.', category: 'students', src: '/gallery/27.png', date: '2023-10-10' },
  { id: 29, title: 'Library Discussion Group', description: 'Academic discussion group session inside library.', category: 'students', src: '/gallery/29.png', date: '2023-10-02' },

  // ===== ACHIEVEMENTS (6) =====
  { id: 4, title: 'Convocation Ceremony', description: 'Celebrating graduation and academic success.', category: 'achievements', src: '/gallery/04.png', date: '2023-11-25' },
  { id: 7, title: 'Campus Placement Success', description: 'Students selected by leading companies.', category: 'achievements', src: '/gallery/07.png', date: '2023-09-20' },
  { id: 11, title: 'Academic Excellence Awards', description: 'Recognition for outstanding academic performance.', category: 'achievements', src: '/gallery/11.png', date: '2023-12-05' },
  { id: 15, title: 'Sports Championship Victory', description: 'Winning moments from inter-college sports competitions.', category: 'achievements', src: '/gallery/15.png', date: '2023-12-18' },
  { id: 24, title: 'Merit Scholarship Awards', description: 'Scholarships awarded to meritorious students.', category: 'achievements', src: '/gallery/24.png', date: '2023-10-22' },
  { id: 28, title: 'Best Student Recognition', description: 'Special award for exceptional academic excellence.', category: 'achievements', src: '/gallery/28.png', date: '2023-10-05' },
];


const categoryIcons = {
  campus: <SchoolIcon />,
  events: <EventIcon />,
  students: <GroupsIcon />,
  achievements: <EmojiEventsIcon />,
};

const categoryLabels = {
  campus: 'Campus Facilities',
  events: 'Events',
  students: 'Student Life',
  achievements: 'Achievements',
};

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const handleImageClick = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const filteredImages = selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
    
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    const nextImage = filteredImages[nextIndex];
    const originalIndex = galleryImages.findIndex(img => img.id === nextImage.id);
    
    setSelectedImage(nextImage);
    setCurrentImageIndex(originalIndex);
  };

  const handlePreviousImage = () => {
    const filteredImages = selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
    
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    const prevImage = filteredImages[prevIndex];
    const originalIndex = galleryImages.findIndex(img => img.id === prevImage.id);
    
    setSelectedImage(prevImage);
    setCurrentImageIndex(originalIndex);
  };

  const getCategoryColor = (category: GalleryImage['category']) => {
    switch (category) {
      case 'campus': return 'primary';
      case 'events': return 'secondary';
      case 'students': return 'success';
      case 'achievements': return 'warning';
      default: return 'default';
    }
  };

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const categories = ['all', 'campus', 'events', 'students', 'achievements'];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <CollectionsIcon sx={{ fontSize: 80, mb: 3, opacity: 0.2 }} />
          <Typography variant="h2" gutterBottom>
            Gallery
          </Typography>
          <Typography variant="h5">
            Explore our campus, events, student life, and achievements
          </Typography>
        </Container>
      </Box>

      {/* Category Tabs */}
      <Container sx={{ py: 4 }}>
        <Paper elevation={2} sx={{ mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab 
              label="All Photos" 
              value="all" 
              icon={<CollectionsIcon />} 
              iconPosition="start"
            />
            {categories.slice(1).map((category) => (
              <Tab
                key={category}
                label={categoryLabels[category as keyof typeof categoryLabels]}
                value={category}
                icon={categoryIcons[category as keyof typeof categoryIcons]}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Paper>

        {/* Gallery Stats */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Showing {filteredImages.length} photos
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {categories.map((category) => {
              if (category === 'all') return null;
              const count = galleryImages.filter(img => img.category === category).length;
              return (
                <Chip key={category}
                  label={`${categoryLabels[category as keyof typeof categoryLabels]}: ${count}`}
                  onClick={() => setSelectedCategory(category)}
                  color={selectedCategory === category ? getCategoryColor(category as GalleryImage['category']) : 'default'}
                  variant={selectedCategory === category ? 'filled' : 'outlined'}
                  icon={categoryIcons[category as keyof typeof categoryIcons]}
                />
              );
            })}
          </Box>
        </Box>

        {/* Gallery Grid */}
        <Grid container spacing={3}>
          {filteredImages.map((image, index) => (
            <Grid item key={image.id} xs={12} sm={6} md={4} lg={3}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: 6,
                  },
                }}
                onClick={() => handleImageClick(image, index)}
              >
                <Box sx={{ position: 'relative', pt: '75%' }}>
                  <CardMedia
                    component="img"
                    image={image.src}
                    alt={image.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Chip
                    label={categoryLabels[image.category]}
                    color={getCategoryColor(image.category)}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                     height: '21px',color: '#424040', fontSize: '0.7rem',
                      bgcolor: 'background.paper',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {image.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {image.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(image.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      {categoryIcons[image.category]}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <CollectionsIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">
              No photos found in this category
            </Typography>
            <Button 
              variant="outlined" 
              onClick={() => setSelectedCategory('all')}
              sx={{ mt: 2 }}
            >
              View All Photos
            </Button>
          </Box>
        )}
      </Container>

      {/* Image Preview Dialog */}
      <Dialog
        open={!!selectedImage}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
      >
        {selectedImage && (
          <>
            <DialogContent sx={{ p: 0, position: 'relative' }}>
              {/* Navigation Arrows */}
              <IconButton
                onClick={handlePreviousImage}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>

              <IconButton
                onClick={handleNextImage}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <ChevronRightIcon />
              </IconButton>

              {/* Close Button */}
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: 16,
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Image */}
              <Box sx={{ position: 'relative', pt: '56.25%' }}>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* Image Info */}
              <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      {selectedImage.title}
                    </Typography>
                    <Chip
                      label={categoryLabels[selectedImage.category]}
                      color={getCategoryColor(selectedImage.category)}
                      icon={categoryIcons[selectedImage.category]}
                      sx={{ mb: 1 }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(selectedImage.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Typography>
                </Box>
                <Typography variant="body1">
                  {selectedImage.description}
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 2 }}>
                  Photo {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                </Typography>
              </Paper>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* Gallery Info Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8, mt: 4 }}>
        <Container>
          <Typography variant="h5" align="center" gutterBottom>
            Capture Your Memories
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Share your photos with us to be featured in our gallery
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                <EventIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Share Events
                </Typography>
                <Typography>
                  Submit photos from campus events, festivals, and celebrations
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                <EmojiEventsIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Showcase Achievements
                </Typography>
                <Typography>
                  Share your academic and extracurricular achievements with us
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                <GroupsIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Campus Life
                </Typography>
                <Typography>
                  Capture daily campus life, study sessions, and student activities
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="contained" size="large">
              Submit Your Photos
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Gallery;