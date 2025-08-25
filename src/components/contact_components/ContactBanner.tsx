import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
interface ContactBannerProps {
  title: string;
  subtitle: string;
  description: string
  img: string; // Example: "banner.jpg"
  bgPos: string;
}

export const ContactBanner = ({ title, img,bgPos }: ContactBannerProps) => {
  return (
<Box
  className="contact-hero"
  bgImage={`url(${img})`}
  bgSize="cover"                  // fills box
  bgRepeat="no-repeat"
  bgPos={ bgPos }     // 🔹 change this to pick part of the image
  border="1px solid #ddd"
  position="absolute"
  left={0}
  zIndex={10}
  w="100%"
  h="12.5rem"                       // fixed height
>
  <Box
    className="overlay"
    textAlign="center"
    color={useColorModeValue("#ffffffff", "gray.400")}
    display="flex"
    alignItems="center"
    justifyContent="center"
    fontWeight="600"
  >
    <Text fontSize="2rem">
      {title}
    </Text>
  </Box>
</Box>

  );
};
