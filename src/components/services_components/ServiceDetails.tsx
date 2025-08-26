import { VStack, Text, Box, HStack, Image, Circle } from "@chakra-ui/react";
import { plans } from "./ServicesList";
import { useEffect } from "react";

export const ServiceDetails = () => {
  const filteredPlan = plans.find(
    (plan) => plan.ref === window.location.pathname.split("/")[2]
  );
  useEffect(() => {});

  return (
    <VStack w={"80vw"} m={"5rem"} align={"start"}>
      <VStack>
        <Text>{filteredPlan?.title?.ar}</Text>
        <svg
          viewBox="0 0 201 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.9025 9.90278C34.9233 3.22437 120.539 -5.08714 198.834 15.094"
            stroke="#981C20"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </VStack>
      <Text
        fontWeight={400}
        color={"rgba(95, 97, 102, 1)"}
        fontSize={{ base: "1rem", lg: "1.2rem" }}
      >
        {filteredPlan?.subtitle?.ar}
      </Text>

      <VStack gap={"1rem"} justifyContent={"space-between"} w={"100%"}>
        <VStack
          w={"80%"}
          mt={"2rem"}
          borderRadius={"2xl"}
          shadow={"md"}
          p={"2rem"}
          gap={"1rem"}
        >
          <Image
            src={`/${filteredPlan?.Image}`}
            alt={filteredPlan?.title.en}
            w="6rem"
            h="8.5rem"
          />
          <VStack w={"100%"} align={"start"}>
            <HStack w={"100%"}>
              <VStack
                p={"1rem"}
                align="start"
                w={"50%"}
                bgColor={"rgba(247, 248, 252, 1)"}
              >
                {filteredPlan?.description.map((description, index) => (
                  <HStack key={index}>
                    <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
                    <Text fontWeight={300}>{description.ar}</Text>
                  </HStack>
                ))}
              </VStack>
              <VStack
                p={"1rem"}
                align="start"
                bgColor={"rgba(247, 248, 252, 1)"}
                w={"50%"}
              >
                {filteredPlan?.description.map((description, index) => (
                  <HStack key={index}>
                    <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
                    <Text fontWeight={300}>{description.ar}</Text>
                  </HStack>
                ))}
              </VStack>
            </HStack>
            <VStack>
              <VStack align="start">
                {filteredPlan?.features.map((feature, index) => (
                  <HStack key={index}>
                    <Image
                      w="1rem"
                      src="/servicescale.png"
                      alt="servicescale"
                    />
                    <Text fontWeight={300}>{feature.ar}</Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </VStack>
          <Box display={"flex"} justifyContent={"space-between"}>
            {" "}
            <Text color={"rgba(176, 13, 13, 1)"} paddingInlineEnd={4}>
              {filteredPlan?.price?.ar}
            </Text>{" "}
            ر.س / سنة
          </Box>
          <Box
            as="button"
            bgColor={"rgba(90, 119, 187, 1)"}
            color={"white"}
            borderRadius={"2xl"}
            width={"100%"}
            onClick={() => window.open("https://portal.lsc-sa.net/", "_blank")}
          >
            {" "}
            اشترك الان
          </Box>
        </VStack>
      </VStack>
    </VStack>
  );
};
