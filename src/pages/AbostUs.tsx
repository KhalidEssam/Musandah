import { ContactBanner } from "@/components/contact_components/ContactBanner";
import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { VisitsStats } from "@/components/home_components/VisitsStats";
import { useState } from "react";
export const About = () => {

  const [clamped, setClamped] = useState(true);

  const text= `في عالم تتغير فيه القوانين وتتسارع فيه الإجراءات، برز سؤال بسيط لكنه محوري: هل يتمكن الجميع — مواطنين ومقيمين — من الوصول الفعلي إلى الخدمات القانونية؟
من هذا السؤال، بدأت رحلة "مساندة".
خضنا بحثًا ميدانيًا، واستطلعنا آراء الناس، وواجهنا الحقائق:
·        صعوبة الوصول للمعلومة القانونية.
·        تردد وخوف من التعامل مع الجهات الرسمية.
·        عوائق اللغة، التكاليف، والوقت.
·        وغياب الثقة أو الفهم الكامل للإجراءات القانونية.
من هنا، وُلدت "مساندة" — منصة رقمية قانونية وُضعت بعناية، لتكون حلًا واقعيًا ومتاحًا للجميع، بالشراكة مع جهة قانونية مرخصة.
نحن لا نقدّم مجرد استشارات، بل نوفر تجربة قانونية شاملة تقوم على: الوضوح، الشفافية، الخصوصية، وسهولة الوصول.
"مساندة" ليست بديلًا عن القانون، بل وسيلتك لفهمه، التعامل معه، والنجاح من خلاله — أينما كنت، وباللغة التي تفهمها، وبتكلفة تستطيع تحملها.`
  return (
    <VStack gap={8}>
      <ContactBanner
        bgPos="0% /27%"
        img="About.jpg"
        title="من نحن"
        subtitle=""
        description=""
      />
      <Text
        fontSize={{ base: "1.25rem", lg: "1.75rem" }}
        color={"rgba(46, 54, 81, 1)"}
      >
        تجربة قانونية مختلفة… تبدأ من فهمك، وتنتهي براحتك
      </Text>

      <VStack gap={8} w={"90vw"}>
        <HStack flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            bgImage={`url(about1.jpg)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "33.75rem" }}
          />
          <VStack
            align={"start"}
            width={"100%"}
            p={4}
            bgColor={"rgba(237, 241, 255, 1)"}
          >
            <VStack align={"start"}>
              <VStack>
                <Text
                  fontSize={{ base: "1.25rem", lg: "1.75rem" }}
                  color={"rgba(46, 54, 81, 1)"}
                >
                  مساندة
                </Text>
                <svg
                  viewBox="0 0 132 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.89078 10.812C23.4156 3.83051 79.1414 -5.26891 129.846 14.185"
                    stroke="#981C20"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </VStack>
              <Text
                color={"rgba(95, 97, 102, 1)"}
                fontWeight={400}
                fontSize={{ base: "0.9rem", lg: "1rem" }}
                textAlign={"start"}
                lineClamp={ clamped ? 6 : undefined}       
                whiteSpace="pre-line"

              >
           
           {text}
              </Text>
              <Box as ="button" bgColor={"transparent"} onClick={() => setClamped(!clamped)}>
                {clamped ? "قراءة المزيد" :  " اقرأ اقل"}
              </Box>
            </VStack>
          </VStack>
        </HStack>
        <HStack flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            align={"start"}
            width={"100%"}
            p={4}
            bgColor={"rgba(249, 240, 241, 1)"}
          >
            <VStack align={"start"}>
              <VStack>
                <Text
                  fontSize={{ base: "1.25rem", lg: "1.75rem" }}
                  color={"rgba(46, 54, 81, 1)"}
                >
                  رؤيتنا
                </Text>
                <svg
                  viewBox="0 0 132 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.89078 10.812C23.4156 3.83051 79.1414 -5.26891 129.846 14.185"
                    stroke="#981C20"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </VStack>
              <Text
                color={"rgba(95, 97, 102, 1)"}
                fontWeight={400}
                fontSize={{ base: "0.9rem", lg: "1rem" }}
                textAlign={"start"}
              >
                أن نجعل الوصول إلى الخدمات القانونية في المملكة تجربة رقمية
                متكاملة، عادلة، وميسّرة، لجميع الأفراد — دون تمييز، دون تعقيد،
                ودون حواجز.
              </Text>
            </VStack>
          </VStack>
          <VStack
            bgImage={`url(about2.jpg)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "33.75rem" }}
          />
        </HStack>
        <HStack flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            bgImage={`url(about3.png)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "33.75rem" }}
          />
          <VStack
            align={"start"}
            width={"100%"}
            p={4}
            bgColor={"rgba(237, 241, 255, 1)"}
          >
            <VStack align={"start"}>
              <VStack>
                <Text
                  fontSize={{ base: "1.25rem", lg: "1.75rem" }}
                  color={"rgba(46, 54, 81, 1)"}
                >
                  رسالتنا
                </Text>
                <svg
                  viewBox="0 0 132 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.89078 10.812C23.4156 3.83051 79.1414 -5.26891 129.846 14.185"
                    stroke="#981C20"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </VStack>
              <Text
                color={"rgba(95, 97, 102, 1)"}
                fontWeight={400}
                fontSize={{ base: "0.9rem", lg: "1rem" }}
                textAlign={"start"}
              >
                نحن نؤمن أن المعرفة القانونية ليست امتيازًا للنخبة، بل حق لكل
                فرد. لذلك، نعمل على تقديم حلول قانونية رقمية ذكية، بالشراكة مع
                جهة مرخصة، وبأسلوب يفهمه الناس ويثقون به — لنصنع بيئة قانونية
                أكثر عدلًا، وشفافية، وتمكينًا.
              </Text>
            </VStack>
          </VStack>
        </HStack>
        <HStack flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            align={"start"}
            width={"100%"}
            p={4}
            bgColor={"rgba(249, 240, 241, 1)"}
          >
            <VStack align={"start"}>
              <VStack>
                <Text
                  fontSize={{ base: "1.25rem", lg: "1.75rem" }}
                  color={"rgba(46, 54, 81, 1)"}
                >
                  قيمنا
                </Text>
                <svg
                  viewBox="0 0 132 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.89078 10.812C23.4156 3.83051 79.1414 -5.26891 129.846 14.185"
                    stroke="#981C20"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </VStack>

              <Text
                color={"rgba(95, 97, 102, 1)"}
                fontWeight={400}
                fontSize={{ base: "0.9rem", lg: "1rem" }}
                textAlign={"start"}
                lineClamp={7}           whiteSpace="pre-line"

                
              >
                `العدالة: نُعامل الجميع بإنصاف… دون تمييز في النوع، الجنسية، أو
                اللغة. الخصوصية: كل استشارة، كل طلب، كل بياناتك — في أمان تام.
                الشفافية: لا مفاجآت، لا تكاليف مخفية، لا تعقيد لغوي. الوصول:
                خدماتنا في متناول يدك… وقتما احتجت، وبالطريقة التي تناسبك.
                الاحترافية: نعمل مع جهة قانونية مرخصة، ونقدّم فقط ما نستطيع أن
                نلتزم به.`
              </Text>
            </VStack>
          </VStack>
          <VStack
            bgImage={`url(about4.jpg)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "33.75rem" }}
          />
        </HStack>
        <HStack flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            bgImage={`url(about5.png)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "33.75rem" }}
          />
          <VStack
            align={"start"}
            width={"100%"}
            p={4}
            bgColor={"rgba(237, 241, 255, 1)"}
          >
            <VStack align={"start"}>
              <VStack>
                <Text
                  fontSize={{ base: "1.25rem", lg: "1.75rem" }}
                  color={"rgba(46, 54, 81, 1)"}
                >
                  شريكنا القانوني
                </Text>
                <svg
                  viewBox="0 0 132 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.89078 10.812C23.4156 3.83051 79.1414 -5.26891 129.846 14.185"
                    stroke="#981C20"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </VStack>

              <Text
                color={"rgba(95, 97, 102, 1)"}
                fontWeight={400}
                fontSize={{ base: "0.9rem", lg: "1rem" }}
                textAlign={"start"}
                lineClamp={7}           whiteSpace="pre-line"

              >
                `نفتخر بأن نقدم خدماتنا القانونية بالشراكة مع شركة تكامل
                للمحاماة والاستشارات القانونية — وهي جهة مرخصة رسميًا وفق
                الأنظمة المعمول بها في المملكة، وتضم نخبة من المحامين
                والمستشارين المعتمدين في مجالات متعددة.`
              </Text>
            </VStack>
          </VStack>
        </HStack>
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
