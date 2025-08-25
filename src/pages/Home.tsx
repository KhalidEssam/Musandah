import { ContactSection } from "@/components/contact_components/ContactSection";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Image, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { VisitsStats } from "@/components/home_components/VisitsStats";
export const Home = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const text = `في أرضٍ تؤمن بالعدالة، وتحت قيادةٍ وضعت الإنسان أولاً، وُلدت "منصة مساندة القانونية" لتكون الجسر بين الأفراد وحقوقهم، ولتجعل الوصول إلى الخدمات القانونية أمرًا بسيطًا، آمنًا، ومتاحًا للجميع.
    نحن نعيش اليوم في المملكة العربية السعودية مرحلة استثنائية من التحول، حيث تسير البلاد بخطى واثقة نحو رؤية 2030، التي تؤمن بأن العدالة ليست امتيازًا، بل حق لكل من يعيش على أرض هذا الوطن — مواطنًا كان أم مقيمًا.
    من هنا، تبدأ قصتنا.
    وسط هذا التحول الرقمي الذي تشهده المملكة، نشأت الحاجة إلى حلول قانونية حديثة تتماشى مع سرعة الواقع، وتُراعي تنوّع المجتمع، وتكسر الحواجز التقليدية أمام طالبي الخدمة القانونية.
    من هنا، جاءت "منصة مركز المساندة القانوني" كفكرة، ثم تحولت إلى منصة رقمية مبتكرة تُقدّم حلولًا قانونية شاملة عبر قنوات متعددة، وبتعاون مباشر مع شريك قانوني مرخّص يملك الصلاحية النظامية لتنفيذ وتقديم الخدمات.`;

  const text2 = `
              ابدأ رحلتك القانونية بثقة… من هنا تبدأ مساندتك
              
سواء كنت تبحث عن استشارة قانونية، أو تمثيل في قضية، أو ببساطة تريد أن تشعر بالأمان القانوني على مدار العام — "مساندة" هنا، خطوة بخطوة، وبالطريقة التي تناسبك.

كل ما تحتاجه… أصبح في متناولك.
`;
  return (
    <>
      <Box
        className="contact-hero"
        bgImage={`url(Home.jpg)`}
        bgSize="cover"
        bgRepeat="no-repeat"
        border="1px solid #ddd"
        position="absolute"
        left={0}
        zIndex={10}
        w="100%"
        h="35rem"
        transform="scaleX(-1)" // 👈 flip horizontally
      >
        <VStack
          className="overlay"
          textAlign="center"
          color={useColorModeValue("#ffffffff", "gray.400")}
          display="flex"
          alignItems="center"
          justifyContent="center"
          transform="scaleX(-1)"
          gap={"1.5rem"}
        >
          <Text fontSize="2.5rem" fontWeight={500}>
            خدمات قانونية شاملة… في متناول يدك، خطوة بخطوة
          </Text>
          <Text fontSize="1.2rem" fontWeight={400}>
            استشارات وتمثيل قضائي من شريك قانوني مرخص، بسرعة، أمان، وبالطريقة
            التي تناسبك.
          </Text>
          <Box
            as="button"
            color={"white"}
            borderRadius={"1rem"}
            fontSize={"1.25rem"}
            mt="1rem"
            h={"4rem"}
            bgColor={"rgba(90, 119, 187, 1)"}
          >
            عرض التفاصيل
          </Box>
        </VStack>
      </Box>
      <Box h="36rem"></Box>

      <VStack
        textAlign={"start"}
        align={"start"}
        p={{ base: "4rem 2rem", md: "4rem 6rem" }}
        gap={"1rem"}
        bgColor={"rgba(247, 248, 252, 1)"}
      >
        <Box display="inline-block">
          <Text
            color="rgba(46, 54, 81, 1)"
            fontSize={{ base: "1rem", md: "1.75rem" }}
          >
            قصتنا تبدأ من هنا
          </Text>

          <Box w="100%">
            <svg
              viewBox="0 0 666 25"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              preserveAspectRatio="none" // 👈 stretches line with text width
              //   style={{ width: "100%", height: "auto" }}
            >
              <path
                d="M1.98319 5.27582C112.477 0.639672 399.523 -2.36199 663.753 22.7206"
                stroke="#981C20"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
        {/* Text 1 */}
        <Text
          fontSize="1rem"
          fontWeight={400}
          color="rgba(95, 97, 102, 1)"
          whiteSpace="pre-line"
          lineClamp={expanded === "text1" ? undefined : 3}
        >
          {text}
        </Text>
        <Box
          as="button"
          bg="transparent"
          color="blue.600"
          mt={2}
          onClick={() => setExpanded(expanded === "text1" ? null : "text1")}
        >
          {expanded === "text1" ? "إقرأ أقل" : "إقرأ المزيد"}
        </Box>
        <Box gap={"3rem"}>
          <Text pb={8} color={"rgba(90, 119, 187, 1)"}>
            صُمّمت خدمات "مساندة" لتكون:
          </Text>

          <HStack
            gap={"3rem"}
            align={"center"}
            textAlign={"center"}
            flexWrap={"no-wrap"}
            flexDir={{ base: "column", md: "row" }}
            w={"100%"}
            justifyContent={"space-between"}
          >
            <VStack>
              <HStack>
                <Image src="hamar.png" w={"3rem"} />
                <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                  واضحة
                </Text>
              </HStack>
              <Text fontWeight={400} color={"rgba(95, 97, 102, 1)"}>
                لا تعقيد في الوصول ولا غموض في الخطوات
              </Text>
            </VStack>
            <VStack>
              <HStack>
                <Image src="hamar.png" w={"3rem"} />
                <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                  مرنة
                </Text>
              </HStack>
              <Text fontWeight={400} color={"rgba(95, 97, 102, 1)"}>
                تستقبلك في وقتك، وبالطريقة التي تناسبك (كتابية، هاتفية، مرئية،
                حضورية)
              </Text>
            </VStack>
            <VStack>
              <HStack>
                <Image src="hamar.png" w={"3rem"} />
                <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                  عادلة
                </Text>
              </HStack>
              <Text fontWeight={400} color={"rgba(95, 97, 102, 1)"}>
                بأسعار مدروسة وباقات تغطي احتياجات حقيقية
              </Text>
            </VStack>
            <VStack>
              <HStack>
                <Image src="hamar.png" w={"3rem"} />
                <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                  آمنة
                </Text>
              </HStack>
              <Text fontWeight={400} color={"rgba(95, 97, 102, 1)"}>
                خصوصيتك مصانة، وبياناتك محمية، واتصالاتك مشفّرة
              </Text>
            </VStack>
            <VStack>
              <HStack>
                <Image src="hamar.png" w={"3rem"} />
                <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                  مهنية
                </Text>
              </HStack>
              <Text fontWeight={400} color={"rgba(95, 97, 102, 1)"}>
                جميع الخدمات تُقدّم عبر شريك قانوني معتمد ومرخّص
              </Text>
            </VStack>
          </HStack>
        </Box>
      </VStack>

      <VStack w={"100vw"} h={"25rem"} >
        <HStack p={8} w={"100vw"} h={"25rem"}  justifyContent={"space-between"} >
          <VStack> dasdlaskjdklasdakls</VStack>
          <VStack
            bgImage={`url(WhyUs.jpg)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            h={"100%"}
            w={"45vw"}
            // position="absolute"
          >

dasdasda
            </VStack>
        </HStack>
      </VStack>
      <Box display="flex" w="100%">
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

      <VStack h={"12.5rem"}>
        <HStack>
          <VStack></VStack>
        </HStack>
      </VStack>
      <Box
        className="contact-hero"
        bgImage={`url(Home2.png)`}
        bgSize="cover"
        bgRepeat="no-repeat"
        border="1px solid #ddd"
        position="absolute"
        left={0}
        zIndex={10}
        w="100%"
        h="35rem"
      >
        <VStack
          className="overlay"
          textAlign="center"
          color={useColorModeValue("#ffffffff", "gray.400")}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={"1.5rem"}
        >
          <Text fontSize="1.75rem" fontWeight={500}>
            مساندة" ليست مجرد منصة…بل رفيقك القانوني الرقمي، الذي صُمّم ليكون في
            صفك.{" "}
          </Text>
          {/* Text 2 */}
          <Text
            fontSize="1.25rem"
            fontWeight={400}
            whiteSpace="pre-line"
            lineClamp={expanded === "text2" ? undefined : 3}
          >
            {text2}
          </Text>
          <Box
            as="button"
            bg="transparent"
            color="blue.600"
            mt={2}
            onClick={() => setExpanded(expanded === "text2" ? null : "text2")}
          >
            {expanded === "text2" ? "إقرأ أقل" : "إقرأ المزيد"}
          </Box>
          <Box
            as="button"
            color={"white"}
            borderRadius={"1rem"}
            fontSize={"1.25rem"}
            mt="1rem"
            h={"4rem"}
            bgColor={"rgba(90, 119, 187, 1)"}
          >
            ابدأ الآن{" "}
          </Box>
        </VStack>
      </Box>
      <Box h="36rem"></Box>

      <ContactSection />
    </>
  );
};
