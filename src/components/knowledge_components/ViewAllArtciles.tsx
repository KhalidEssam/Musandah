// import { HStack } from "@chakra-ui/react";
import { ArticleList } from "./ArticleList";
import { articles } from "@/pages/KnowledgeCenter";
import { VStack, Text } from "@chakra-ui/react";

export const ViewAllArtciles = () => {
  return (
    <VStack align={"start"} w={"100%"} gap={"2rem"}>

        <VStack >
            <Text fontSize={{ base: "1.25rem", lg: "1.75rem" }} color={"rgba(46, 54, 81, 1)"}> مقالات قانونية مبسطة </Text>
          <svg
            viewBox="0 0 371 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.9318 7.66254C63.2761 1.73077 222.533 -4.6395 368.804 17.3336"
              stroke="#981C20"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </VStack>
        <Text fontSize={{ base: "1rem", lg: "1.25rem" }} color={"rgba(95, 97, 102, 1)"} fontWeight={400} >
            في "مساندة"، لا نكتفي بتقديم الحل، بل نحرص أن تفهم خلفيته, أن تعرف حقوقك قبل أن تحتاجها. وأن تتخذ قراراتك بثقة، لا بخوف أو تردد.
        </Text>
      <ArticleList articles={articles} />
    </VStack>
  );
};
