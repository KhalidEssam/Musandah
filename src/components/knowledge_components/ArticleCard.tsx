import { VStack, Box, Text } from "@chakra-ui/react";
import type { articleProbs } from "@/types/types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";
export const ArticleCard = ({ article }: { article: articleProbs }) => {
  const navigate = useNavigate();
  const [isTouched, setIsTouched] = useState(false);
  const lang = useSelector(selectLanguage);
  return (
    <VStack
      role="group" // 👈 allows child to react to hover
      gap="1rem"
      _hover={{ cursor: "pointer" }}
      w={{ base: "90%", md: "40%", lg: "30%" }}
      textAlign={"start"}
      position="relative" // 👈 needed for absolute child
      overflow="hidden"
    >
      {/* Overlay - now starts invisible but present in DOM */}
      <VStack
        w="100%"
        h="100%"
        position="absolute"
        top={0} // 👈 explicit positioning
        left={0} // 👈 explicit positioning
        backdropFilter={isTouched ? "blur(3px)" : "blur(0px)"}
        backgroundColor={isTouched ? "rgba(90, 119, 187, 0.5)" : "transparent"}
        opacity={isTouched ? 1 : 0} // 👈 use opacity instead of display
        _hover={{
          opacity: 1, // 👈 fade in on hover
          boxShadow: "0px 0.5rem 1rem rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          transform: "scale(1.05)",
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(90, 119, 187, 0.5)",
        }}
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)}
        align="center"
        justify="center"
        borderRadius="xl"
        zIndex={2}
        transition="all 0.3s ease" // 👈 smooth transition
      >
        <Box
          as="button"
          bgColor="rgba(90, 119, 187, 1)"
          onClick={() => navigate(`/knowledge-center/${article.id}`)}
          borderRadius={"2rem"}
          color="white"
          fontSize="lg"
          fontWeight="bold"
        >

          {lang === "en" ? "Read More" : " اقرأ المزيد"}        </Box>
      </VStack>

      <Box
        bgImage={`url(${article.image})`}
        bgSize={"cover"}
        w={"100%"}
        h={"300px"}
        borderRadius={"10px"}
      />

      <Text
        color={"rgba(46, 54, 81, 1)"}
        fontWeight={600}
        fontSize={{ base: "1.1rem", lg: "1.25rem" }}
      >
        {" "}
        { lang === "en" ? article.title.en : article.title.ar}
      </Text>
      <Text
        color={"rgba(95, 97, 102, 1)"}
        fontSize={{ base: "0.9rem", lg: "1rem" }}
        fontWeight={400}
      >
        { lang === "en" ? article.subtitle?.en : article.subtitle?.ar}
      </Text>
    </VStack>
  );
};
