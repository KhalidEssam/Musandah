import { Text, VStack, HStack, Box, Image } from "@chakra-ui/react";

import { ContactBanner } from "@/components/contact_components/ContactBanner";

export const KnowledgeCenter = () => {
  return (
    <VStack w={"100vw"}>
      <ContactBanner
        bgPos="0% /27%"
        img="About.jpg"
        title="مركز المعرفة"
        subtitle=""
        description=""
      />
      <Text
        mt={"5%"}
        fontWeight={600}
        fontSize={{ base: "1.25rem", lg: "1.75rem" }}
        color={"rgba(46, 54, 81, 1)"}
      >
        في "مساندة"، لا نكتفي بتقديم الحل، بل نحرص أن تفهم خلفيته.
      </Text>
      <VStack align={"start"} w={"100%"} p={"10%"}>
        <HStack w={"100%"} align={"start"} justifyContent={"space-between"}>
          <VStack>
            <Text
              fontSize={{ base: "1.25rem", lg: "1.75rem" }}
              color={"rgba(46, 54, 81, 1)"}
            >
              مقالات قانونية مبسطة
            </Text>
            <svg
              viewBox="0 0 223 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.90641 9.61274C38.5926 3.03096 133.738 -5.02933 220.83 15.3837"
                stroke="#981C20"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </VStack>
          <Box
            as="button"
            color={"rgba(90, 119, 187, 1)"}
            bgColor={"transparent"}
            border={"1px solid rgba(90, 119, 187, 1)"}
            borderRadius={"2xl"}
            px={"1.5rem"}
            py={"0.5rem"}
            fontSize={{ base: "1.25rem", lg: "1.75rem" }}
          >
            عرض الكل
          </Box>
        </HStack>
        <Text
          color={"rgba(95, 97, 102, 1)"}
          fontWeight={400}
          fontSize={{ base: "1rem", lg: "1.1rem" }}
        >
          مقالات قصيرة وواضحة تشرح لك المفاهيم القانونية بلغة سهلة وبأمثلة من
          الحياة اليومية.
        </Text>
        <HStack></HStack>
      </VStack>
      <VStack
        className="contact-hero"
        position="relative" // Changed from absolute to relative
        left={0}
        zIndex={10}
        overflow="hidden" // Prevents image from overflowing
        bgSize="cover"
        bgRepeat="no-repeat"
        w="100%"
        align={"stretch"}
      >
        <Image
          src={`knowledge.jpg`}
          alt={"Home image"}
          loading={"eager"}
          decoding={"async"}
          fetchPriority={"high"}
          top={0}
          left={0}
          w="100%"
          minH={{ base: "25rem", md: "10rem" }}
          h="100%"
          objectFit="cover" // Equivalent to bgSize="cover"
          objectPosition={"center"} // Equivalent to bgPos
        />
        <VStack
          p={8}
          className="overlay"
          textAlign="center"
          color={"white"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={"1.5rem"}
        >
          <Text fontSize={{ base: "1.2rem", md: "2rem" }} fontWeight={500}>
            الوعي ليس رفاهية… بل حماية حقيقية تبدأ من الفهم, تابع مركز المعرفة،
            وكن دائمًا في الجانب الآمن من المعلومة.{" "}
          </Text>
          <Text fontSize={{ base: "1rem", md: "1.25rem" }} fontWeight={400}>
            أن تعرف حقوقك قبل أن تحتاجها. وأن تتخذ قراراتك بثقة، لا بخوف أو
            تردد. من هنا، جاء مركز المعرفة ليكون مكتبتك القانونية اليومية — بلغة
            مبسطة، وأمثلة واقعية، وشرح لا يتطلب خلفية قانونية.{" "}
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};
