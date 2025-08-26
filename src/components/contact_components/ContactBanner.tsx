import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/react";

interface ContactBannerProps {
  title: string;
  subtitle: string;
  description: string;
  img: string; // Example: "banner.jpg"
  bgPos: string;
  loading?: "eager" | "lazy";
  decoding?: "sync" | "async" | "auto";
  fetchpriority?: "high" | "low" | "auto";
}

export const ContactBanner = ({
  title,
  img,
  bgPos,
  loading = "lazy",
  decoding = "async",
  fetchpriority = "auto",
}: ContactBannerProps) => {
  return (
    <Box
      className="contact-hero"
      position="relative" // Changed from absolute to relative
      left={0}
      zIndex={10}
      w="100%"
      h="12.5rem"
      border="1px solid #ddd"
      overflow="hidden" // Prevents image from overflowing
    >
      {/* Background Image */}

      <Image
        src={img}
        alt={title}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchpriority}
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        objectFit="cover" // Equivalent to bgSize="cover"
        objectPosition={bgPos} // Equivalent to bgPos
        zIndex={-1} // Behind the text
      />

      {/* Text Overlay */}
      <Box
        className="overlay"
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        textAlign="center"
        color={useColorModeValue("#ffffffff", "gray.400")}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight="600"
        zIndex={1} // Above the image
      >
        <Text fontSize="2rem">{title}</Text>
      </Box>
    </Box>
  );
};
