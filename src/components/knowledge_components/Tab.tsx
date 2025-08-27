import { Link, Tabs, } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '@/store/slices/languageSlice';
import { selectDirection } from '@/store/slices/languageSlice';
import { SwiperSlider } from './SwiperSlider';
import { type SingleSlide } from '@/types/types';
export const Tab = ({
  links,
  contents,
}: {
  links: { en: string; ar: string }[];
  contents: SingleSlide[][];
}) => {
  const [activeTab, setActiveTab] = useState(links[0]);
  const Lang = useSelector(selectLanguage);
  const direction = useSelector(selectDirection);

  return (
    <Tabs.Root
      defaultValue={links[0].en}
      mt={'2rem'}
      dir={direction}
    >
      <Tabs.List
        gap="1rem"
        border="none"
        p="1rem"
        justifyContent={'center'}
        px="1rem"
      >
        {links.map((link, index) => (
          <Tabs.Trigger
            value={link.en}
            asChild
            key={index}
          >
            <Link
              href={`#${link}`}
              _hover={{
                color: useColorModeValue('#4d7cb1', 'gray.400'),
              }}
              fontSize="1.1rem"
              fontWeight="700"
              onClick={() => setActiveTab(link)}
              bgColor={
                activeTab === link
                  ? useColorModeValue('#981C20', 'gray.400')
                  : useColorModeValue('white', 'gray.400')
              }
              color={
                activeTab === link
                  ? useColorModeValue('white', 'gray.400')
                  : useColorModeValue('rgba(46, 54, 81, 1)', 'gray.400')
              }
            >
              {Lang === 'ar' ? link.ar : link.en}
            </Link>
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {contents.map((contentItems, index) => (
        <Tabs.Content
          value={links[index].en}
          key={index}
          color={useColorModeValue('black', 'gray.400')}
          display="flex"
          flexDirection="row"
          alignItems="stretch"
          flexWrap="wrap"
          justifyContent="center"
          dir={direction}
        >
          <SwiperSlider slides={contentItems} />
          
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
