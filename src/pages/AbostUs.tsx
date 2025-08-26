import { ContactBanner } from "@/components/contact_components/ContactBanner";
import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { VisitsStats } from "@/components/home_components/VisitsStats";
export const About = () => {
  return (
    <VStack gap={8}>
      <ContactBanner
        bgPos="0% /27%"
        img="About.jpg"
        title="تواصل معنا"
        subtitle=""
        description=""
      />
      <Box h="12.5rem"></Box>

      <Text
        fontSize={{ base: "1.25rem", lg: "1.75rem" }}
        color={"rgba(46, 54, 81, 1)"}
      >
        تجربة قانونية مختلفة… تبدأ من فهمك، وتنتهي براحتك
      </Text>

      <VStack>
        <HStack></HStack>
        <HStack></HStack>
        <HStack></HStack>
        <HStack></HStack>
        <HStack></HStack>
      </VStack>

      <Box display="flex" w="100vw">
        {/* Left / Hero Box */}
        <Box
          className="contact-hero"
          bgImage={`url(Home3.jpg)`}
          bgSize="cover"
          bgRepeat="no-repeat"
          border="1px solid #ddd"
          flex="1" // 👈 makes it stretch
          display="flex" // 👈 so VStack can center properly
          alignItems="center" // 👈 vertical center
          justifyContent="center" // 👈 horizontal center
        >
          <VStack color={useColorModeValue("#ffffffff", "gray.400")}>
            <VisitsStats />
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
};
