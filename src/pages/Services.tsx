import { ContactBanner } from "@/components/contact_components/ContactBanner";
import { Box, VStack, Text, HStack, Circle } from "@chakra-ui/react";
import { ServicesList } from "@/components/services_components/ServicesList";
import { useState, useRef, useEffect } from "react";
export const Services = () => {
  const [clamping, setClamping] = useState(true);
  const [isClamped, setIsClamped] = useState(true);
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      // If scrollHeight > clientHeight, text is overflowing (clamped)
      setIsClamped(el.scrollHeight < el.clientHeight);
    }
  }, [clamping]);
  const text = `الباقات عندنا ليست مجرد "عروض قانونية"
  ؛ بل هي وسيلة لتقديم تجربة قانونية حقيقية، تبدأ بالتوجيه، وقد تنتهي بالتمثيل القضائي — ضمن باقة واضحة الشروط، معروفة المدى، ومناسبة للتكرار.
كل باقة تم تصميمها بناءً على نماذج حقيقية من احتياجات الأفراد: من لديه قضية واحدة فقط، من يتوقع مشكلات عمالية، أو من يحتاج متابعة قانونية طوال العام`;
  return (
    <VStack gap={"5rem"} w={"100vw"}>
      <ContactBanner
        bgPos="0% /27%"
        img="Services.jpg"
        title="خدماتنا"
        subtitle=""
        description=""
      />
      <VStack
        mt={"5%"}
        left={0}
        bgImage="url('/mask.svg')"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
        position="absolute"
        align={"start"}
        rotateX={"180deg"}
        width={{ base: "60vw", md: "40vw" }}
        height={{ base: "70vw", md: "50vw" }}
      />
      <Box zIndex={1} w={"90%"}>
        <Text
          color={"rgba(46, 54, 81, 1)"}
          fontWeight={600}
          fontSize={{ base: "1.25rem", lg: "1.75rem" }}
          mb={"2rem"}
        >
          خدماتنا عبارة عن باقات تواكب احتياجك، لا تُجزّئه
        </Text>

        <HStack
          flexDir={{ base: "column", lg: "row" }}
          align={"stretch"}
          gap={4}
        >
          <VStack w={{ base: "90%", lg: "50%" }} minH="25rem">
            <VStack
              w={{ base: "70%", lg: "90%" }}
              minH="25rem"
              position="relative"
              overflow="hidden"
            >
              {/* Background image 1 */}
              <Box
                bgImage={`url(service2.jpg)`}
                bgSize="cover"
                bgRepeat="no-repeat"
                borderRadius="2xl"
                position="absolute"
                top={0}
                left={0}
                w="60%"
                h="70%"
                bgPos="center"
              />

              {/* Background image 2 */}
              <Box
                bgImage={`url(service1.jpg)`}
                bgRepeat="no-repeat"
                bgSize="cover"
                borderRadius="2xl"
                position="absolute"
                bottom={0}
                left="40%"
                w="60%"
                h="70%"
                bgPos="center"
              />

              {/* Logo anchored bottom-left */}
              <Box
                bgImage={`url(logo-ar.png)`}
                bgRepeat="no-repeat"
                bgSize="contain"
                position="absolute"
                w="80%"
                h="70%"
                bottom={0}
                left={0}
                transform="scale(0.4) translate(-0%, 0%)" // 👈 scale + keep anchored
                transformOrigin="bottom left" // 👈 pivot stays at bottom-left corner
                bgPos="bottom left"
              />
            </VStack>
          </VStack>

          <VStack
            width={"fill"}
            overflow={"hidden"}
            borderRadius={"2xl"}
            gap={0}
          >
            <HStack align={"stretch"} gap={0}>
              <VStack w={"50%"} p={4} bgColor={"rgba(247, 248, 252, 1)"}>
                <Text
                  color={"rgba(46, 54, 81, 1)"}
                  fontWeight={500}
                  fontSize={{ base: "1.25rem", lg: "1.5rem" }}
                >
                  في "مساندة"، لا نبيع الخدمة القانونية بشكل مجزأ.
                </Text>
                <Text
                  color={"rgba(95, 97, 102, 1)"}
                  fontWeight={400}
                  fontSize={{ base: "0.9rem", lg: "1rem" }}
                >
                  نحن نؤمن أن المستفيد لا يحتاج إلى "استشارة واحدة"، بل إلى غطاء
                  قانوني شامل يرافقه في مختلف المواقف, لهذا صممنا باقات متنوعة.
                </Text>
              </VStack>

              <VStack w={"50%"} p={4} bgColor={"rgba(237, 241, 255, 1)"}>
                <Text
                  color={"rgba(46, 54, 81, 1)"}
                  fontWeight={500}
                  fontSize={{ base: "1.25rem", lg: "1.5rem" }}
                >
                  محمي قانونيًا طوال فترة اشتراكك.
                </Text>
                <Text
                  color={"rgba(95, 97, 102, 1)"}
                  fontWeight={400}
                  fontSize={{ base: "0.9rem", lg: "1rem" }}
                >
                  الباقات لا تمنحك عددًا من الخدمات فقط، بل توفر لك راحة البال
                  بأنك محمي قانونيًا طوال فترة اشتراكك.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"stretch"} borderRadius={"2xl"} gap={0}>
              <VStack w={"50%"} p={4} bgColor={"rgba(237, 241, 255, 1)"}>
                <Text
                  color={"rgba(46, 54, 81, 1)"}
                  fontWeight={500}
                  fontSize={{ base: "1.25rem", lg: "1.5rem" }}
                >
                  الباقات عندنا ليست مجرد "عروض قانونية"
                </Text>
                <Text
                  color={"rgba(95, 97, 102, 1)"}
                  fontWeight={400}
                  fontSize={{ base: "0.9rem", lg: "1rem" }}
                >
                  بل هي وسيلة لتقديم تجربة قانونية حقيقية، تبدأ بالتوجيه، وقد
                  تنتهي بالتمثيل القضائي, ضمن باقة واضحة الشروط، معروفة المدى،
                  ومناسبة للتكرار.
                </Text>
              </VStack>

              <VStack w={"50%"} p={4} bgColor={"rgba(247, 248, 252, 1)"}>
                <Text
                  color={"rgba(46, 54, 81, 1)"}
                  fontWeight={500}
                  fontSize={{ base: "1.25rem", lg: "1.5rem" }}
                >
                  كل باقة مصممة وفق احتياجات الأفراد الحقيقية.
                </Text>
                <Text
                  color={"rgba(95, 97, 102, 1)"}
                  fontWeight={400}
                  fontSize={{ base: "0.9rem", lg: "1rem" }}
                >
                  من لديه قضية واحدة فقط، من يتوقع مشكلات عمالية، أو من يحتاج
                  متابعة قانونية طوال العام
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
      </Box>

      <VStack
        className="contact-hero"
        bgImage={`url(servicebanner.jpg)`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
        border="1px solid #ddd"
        position="relative"
        left={0}
        zIndex={10}
        w="100%"
        minH="25rem" // 👈 now flexible, expands with text
        p={4}
      >
        <VStack
          p={4}
          className="overlay"
          textAlign="center"
          color="white"
          alignItems="center"
          justifyContent="center"
          gap="1.5rem"
          pl={4}
          pr={4}
        >
          <Text fontSize={{ base: "1.25rem", md: "1.75rem" }} fontWeight={600}>
            فلسفتنا في الباقات... لأن القانون ليس سلعة تُشترى عند الحاجة
          </Text>

          <Text
            // ref={textRef}
            fontSize={{ base: "1rem", md: "1.25rem" }}
            fontWeight={400}
            whiteSpace="pre-line"
            lineClamp={clamping ? 3 : undefined}
          >
            {text}
          </Text>
          {isClamped && (
            <Box
              as="button"
              bgColor="rgba(90, 119, 187, 1)"
              color="white"
              px="1rem"
              py="0.5rem"
              borderRadius="md"
              onClick={() => setClamping(!clamping)}
            >
              {clamping ? "قراءة المزيد" : "قراءة أقل"}
            </Box>
          )}
        </VStack>
      </VStack>

      <VStack w={"80vw"} m={8} align={"start"} gap={8}>
        <VStack align={"start"}>
          <Text
            color={"rgba(46, 54, 81, 1)"}
            fontSize={{ base: "1.25rem", lg: "1.75rem" }}
          >
            {" "}
            اعرف حقوقك قبل أن تحتاجها{" "}
          </Text>
          <svg
            viewBox="0 0 371 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.9318 7.66254C63.2761 1.73077 222.533 -4.6395 368.804 17.3336"
              stroke="#981C20"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </VStack>{" "}
        <Text
          textAlign={"start"}
          fontWeight={400}
          color={"rgba(95, 97, 102, 1)"}
          fontSize={{ base: "0.9rem", lg: "1.2rem" }}
        >
          في مساندة، صممنا باقات قانونية تغطي احتياجاتك المختلفة — من دعم أساسي
          إلى تغطية شاملة. اختر الباقة التي تناسبك، وكن دائمًا في أمان قانوني
        </Text>
        <ServicesList />
      </VStack>

      <VStack w={"100vw"} bgColor={"rgba(247, 248, 252, 1)"} p={{base:"1rem", md:"3rem"}} m={8} align={"start"} gap={8}>
        <VStack align={"start"}>
          <Text
            color={"rgba(46, 54, 81, 1)"}
            fontSize={{ base: "1.25rem", lg: "1.75rem" }}
          >
            {" "}
            باقاتنا تتوسع... خطوة بخطوة{" "}
          </Text>
          <svg
            viewBox="0 0 371 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.9318 7.66254C63.2761 1.73077 222.533 -4.6395 368.804 17.3336"
              stroke="#981C20"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </VStack>{" "}
        <Text
          lineHeight={"2.5rem"}
          whiteSpace={"pre-line"}
          textAlign={"start"}
          color={"rgba(95, 97, 102, 1)"}
          fontWeight={400}
          fontSize={{ base: "0.9rem", lg: "1.2rem" }}
        >
          {`نحن في "مساندة" لا نؤمن بالإطلاق الكلي العشوائي، بل نعمل وفق خطة نمو تدريجية مدروسة — تبدأ بالأهم والأكثر شيوعًا، وتتوسع لتشمل مختلف فئات المجتمع واحتياجاته.
بدأنا بالباقات الأساسية التي تغطي القضايا العمالية والأحوال الشخصية، لكونها الأكثر حضورًا في واقع الأفراد.  `}{" "}
        </Text>
        <HStack w={"80%"} align={"stretch"} flexDir={{ base: "column", md: "row" }} justifyContent={"space-between"}>
          <VStack w={{ base: "100%", md: "45%" }} align={"start"}>
            <Text
              color={"rgba(90, 119, 187, 1)"}
              fontWeight={400}
              fontSize={{ base: "0.9rem", lg: "1.25rem" }}
            >
              نعمل حاليًا على تطوير باقات جديدة تخدم:{" "}
            </Text>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > أصحاب الأعمال والمشاريع الناشئة</Text>
            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > المستقلين والمهنيين</Text>
            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > المؤسسات والجمعيات غير الربحية</Text>
            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > الفئات الضعيفة قانونيًا أو محدودي الدخل</Text>
            </HStack>
          </VStack>
          <VStack w={{ base: "100%", md: "45%" }} align={"start"}>
            <Text
              color={"rgba(90, 119, 187, 1)"}
              fontWeight={400}
              fontSize={{ base: "0.9rem", lg: "1.25rem" }}
            >
              كما سنطلق قريبًا خدمات متخصصة تشمل:{" "}
            </Text>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > مراجعة وصياغة العقود التجارية</Text>
            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > خدمات التحكيم والتسوية</Text>
            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > التمثيل في القضايا العقارية والمالية والجنائية</Text>
            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > حماية الملكية الفكرية</Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
