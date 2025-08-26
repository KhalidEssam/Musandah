import { VStack, Image, HStack, Circle, Text } from "@chakra-ui/react";
import { type PlanProbs } from "../../types/types";

type ServiceCardProps = {
  plan: PlanProbs;
};
export const ServiceCard = ({ plan }: ServiceCardProps) => {
  return (
    <VStack
      _hover={{
        boxShadow: "0px 0.5rem 1rem rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        transform: "scale(1.05)",
        backdropFilter: "blur(25px)", // 🔥 blur background
        backgroundColor: "rgba(90, 119, 187, 0.5)", // semi-transparent so blur is visible
        zIndex: "1",
      }}
        gap={"2rem"}
      flex={1}
      maxW={{ base: "90%", md: "40%", lg: "30%" }}
      align="center"
      justifyContent="space-between"
      border="1px solid #ddd"
      p="1rem"
      borderRadius="xl"
      bg="rgba(255,255,255,0.1)" // optional: glassy look even without hover
    >
      <Image src={plan.Image} alt={plan.title.en} w="6rem" h="8.5rem" />
      <Text>{plan.title.ar}</Text>
      <VStack align={"start"}>
        <VStack align={"start"}>
          {plan.description.map((description, index) => (
            <HStack key={index}>
              <Circle size={"10px"} bgColor={"rgba(152, 28, 32, 1)"} />
              <Text fontWeight={300}> {description.ar} </Text>
            </HStack>
          ))}
        </VStack>
        <VStack align={"start"}>
          {plan.features.map((feature, index) => (
            <HStack key={index}>
              <Image w={"1rem"} src="servicescale.png" alt="servicescale" />
              <Text fontWeight={300}> {feature.ar} </Text>
            </HStack>
          ))}
        </VStack>

      </VStack>
              <HStack align={"center"} fontSize={"2rem"}>
          <Text fontSize={"2rem"} color={"rgba(152, 28, 32, 1)"}>
            {plan.price?.ar}{" "}
          </Text>{" "}
          ر.س / سنة
        </HStack>
    </VStack>
  );
};
