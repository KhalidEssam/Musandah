import { Box, Text, Button } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useSelector } from 'react-redux';
import { selectLanguage } from '@/store/slices/languageSlice';
import useSwiperDirectionFix from '@/hooks/useSwiperDirectionFix';
import type { SingleSlide, SwiperSliderProps } from '@/types/types';

const SlideCard = ({
  slide,
}: {
  slide: SingleSlide;
  onLoginClick?: () => void;
}) => {
  const lang = useSelector(selectLanguage);
  return (
    <Box
    textAlign="start"
      w="90%" // Fixed width to fill the slide container
      bgSize={{ base: 'cover', lg: 'contain' }}
      border="1px solid #ddd"
      borderRadius="lg"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden"
      mx="auto" // Center the card horizontally
      _hover={{
        '& .slide-button': {
          opacity: 1,
          transform: 'translateY(0)',
        },
      }}
    >
      <Box position="relative" zIndex={1} maxW="90%" p={4}>
        <Box
          fontSize={'1.25rem'}
          fontWeight={800}
          mb={8}
        >
          {lang === 'ar' ? slide.title.ar : slide.title.en}
        </Box>
        <Text color={'black'} fontSize="md" mb={4}>
          {lang === 'ar' ? slide.description.ar : slide.description.en}
        </Text>
        <Text color={'black'} fontSize="md" mb={4}>
          {slide.date}
        </Text>
        <Button
          onClick={() => window.open('https://portal.lsc-sa.net', '_blank')}
          className="slide-button"
          size="sm"
          color={'white'}
          bg="whiteAlpha.800"
          bgColor='rgba(90, 119, 187, 1)'
          opacity={0} // Start hidden
          transform="translateY(10px)"
          transition="all 0.3s ease"
          pointerEvents="auto"
        >
          {lang === 'ar' ? 'اكتشف التفاصيل' : 'Discover Details'}
        </Button>
      </Box>
    </Box>
  );
};

export const SwiperSlider = ({
  slides,
}: SwiperSliderProps) => {
  const { swiperRef, direction, key } = useSwiperDirectionFix();
  
  return (
    <Box
      width="100vw" // Full width container
      maxWidth={{ base: '90%', md: '80%', lg: '70%' }} // Limit maximum width
      mx="auto" // Center the slider
      px={{ base: '1rem', md: '2rem' }} // Better padding
      mb={8}
    >
      <Swiper
        key={key}
        ref={swiperRef}
        direction="horizontal"
        dir={direction}
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ 
          clickable: true,
          dynamicBullets: true // Better pagination for multiple slides
        }}
        autoplay={{ 
          delay:2000,
          disableOnInteraction: false // Continue autoplay after interaction
        }}
        loop
        spaceBetween={0} // Increased spacing between slides
        centeredSlides={false} // Don't center slides
        watchOverflow={true} // Handle overflow properly
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 2,
          },
        }}
        style={{
          paddingBottom: '2rem', // Space for pagination
          margin: '2rem',
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideCard slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};