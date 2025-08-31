import { ContactBanner } from "@/components/contact_components/ContactBanner";
import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { VisitsStats } from "@/components/home_components/VisitsStats";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";
export const About = () => {
  const [clamped, setClamped ] = useState(true);
  const lang = useSelector(selectLanguage);

  const text = `في عالم تتغير فيه القوانين وتتسارع فيه الإجراءات، برز سؤال بسيط لكنه محوري: هل يتمكن الجميع — مواطنين ومقيمين — من الوصول الفعلي إلى الخدمات القانونية؟
من هذا السؤال، بدأت رحلة "مساندة".
خضنا بحثًا ميدانيًا، واستطلعنا آراء الناس، وواجهنا الحقائق:
·        صعوبة الوصول للمعلومة القانونية.
·        تردد وخوف من التعامل مع الجهات الرسمية.
·        عوائق اللغة، التكاليف، والوقت.
·        وغياب الثقة أو الفهم الكامل للإجراءات القانونية.
من هنا، وُلدت "مساندة" — منصة رقمية قانونية وُضعت بعناية، لتكون حلًا واقعيًا ومتاحًا للجميع، بالشراكة مع جهة قانونية مرخصة.
نحن لا نقدّم مجرد استشارات، بل نوفر تجربة قانونية شاملة تقوم على: الوضوح، الشفافية، الخصوصية، وسهولة الوصول.
"مساندة" ليست بديلًا عن القانون، بل وسيلتك لفهمه، التعامل معه، والنجاح من خلاله — أينما كنت، وباللغة التي تفهمها، وبتكلفة تستطيع تحملها.`;
  return (
    <VStack gap={8}>
      <ContactBanner
        bgPos="0% /27%"
        img="About.jpg"
        title= {lang === "en" ? "About Us" : "من نحن"}
        subtitle=""
        description=""
      />
      <Text
        fontSize={{ base: "1.5rem", lg: "2rem" }}
        color={"rgba(46, 54, 81, 1)"}
      >
        تجربة قانونية مختلفة… تبدأ من فهمك، وتنتهي براحتك
      </Text>

      <VStack gap={8} w={"90vw"}>
        <HStack align={"stretch"} flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            bgImage={`url(about1.jpg)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "63.75rem" }}
          />
          <VStack
            align={"start"}
            width={"100%"}
            p={ "5%" }
            bgColor={"rgba(237, 241, 255, 1)"}
          >
            <VStack align={"start"}>
              <VStack >
                <Text
                  fontSize={{ base: "1.5rem", lg: "2rem" }}
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
     fontSize={{ base: "1.2rem", lg: "1.5rem" }}                textAlign={"start"}
                lineClamp={clamped ? 6 : undefined}
                whiteSpace="pre-line"
              >
                {text}
              </Text>
              <Box
                as="button"
                bgColor={"transparent"}
                onClick={() => setClamped(!clamped)}
              >
                {clamped ? "قراءة المزيد" : " اقرأ اقل"}
              </Box>
            </VStack>
          </VStack>
        </HStack>
        <HStack align={"stretch"} flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            align={"start"}
            width={"100%"}
             p={ "5%" }
            bgColor={"rgba(249, 240, 241, 1)"}
          >
            <VStack align={"start"}>
              <VStack>
                <Text
                  fontSize={{ base: "1.5rem", lg: "2rem" }}
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
                    fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                textAlign={"start"}
              >
                  
أن نصنع تحولًا جذريًا في مفهوم الوصول إلى العدالة داخل المملكة، من خلال بناء تجربة قانونية رقمية شاملة تُراعي احتياجات الجميع — مواطنين، مقيمين، وزائرين — وتكسر الحواجز التقليدية المتمثلة في اللغة، أو التكاليف، أو محدودية الوصول.
رؤيتنا أن تتحول الخدمة القانونية من عبء إلى طمأنينة… ومن إجراء معقد إلى تجربة ذكية، سريعة، ومنصفة، تصل للجميع دون تمييز، وفي أي وقت.
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
            w={{ base: "90%", md: "63.75rem" }}
          />
        </HStack>
        <HStack align={"stretch"} flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            bgImage={`url(about3.png)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            
            w={{ base: "90%", md: "63.75rem" }}
          />
          <VStack
            align={"start"}
            width={"100%"}
             p={ "5%" }
            bgColor={"rgba(237, 241, 255, 1)"}
          >
            <VStack align={"start"}>
              <VStack>
                <Text
                  fontSize={{ base: "1.5rem", lg: "2rem" }}
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
                 fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                textAlign={"start"}
              >  
في مركز المساندة، نؤمن أن الوصول إلى الحق لا يجب أن يكون صعبًا… وأن الفهم القانوني ليس حكرًا على المختصين.
لذلك، صممنا منصتنا لتكون بوابة ذكية لكل من يبحث عن الأمان القانوني:

بأسلوب بسيط وواضح يفهمه الجميع.

وبأسعار معروفة ومعلنة دون مفاجآت.

وبشراكة مع جهة قانونية معتمدة تضمن الموثوقية.
نحن هنا لنجعل كل فرد يشعر أن لديه من يحمي حقوقه، يرشده، ويمثّله بثقة.
              </Text>
            </VStack>
          </VStack>
        </HStack>
        <HStack align={"stretch"} flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            align={"start"}
            width={"100%"}
            p={ "5%" }
            bgColor={"rgba(249, 240, 241, 1)"}
          >
            <VStack align={"start"}>
              <VStack>
                <Text
                  fontSize={{ base: "1.5rem", lg: "2rem" }}
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
                 fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                textAlign={"start"}
                lineClamp={7}
                whiteSpace="pre-line"
              >
نؤمن أن العمل في المجال القانوني لا يكتمل إلا بمنظومة قيم واضحة، نعيشها في كل خدمة نقدمها:

العدالة: نُعامل الجميع بإنصاف، دون تمييز في الجنس، الجنسية، أو اللغة.

الخصوصية: جميع بياناتك، استفساراتك، ومعلوماتك محفوظة بسرية تامة في بيئة آمنة.

الشفافية: لا رسوم خفية، لا شروط مبهمة — كل شيء واضح ومفهوم.

الوصول: أينما كنت، ومتى ما احتجت، تجدنا معك… عبر تطبيق أو موقع، وباللغة التي تناسبك.

الاحترافية: نعمل فقط مع جهات قانونية مرخصة، ونعد بما نستطيع تقديمه بكفاءة واستحقاق.              </Text>
            </VStack>
          </VStack>
          <VStack
            bgImage={`url(about4.jpg)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "63.75rem" }}
          />
        </HStack>
        <HStack align={"stretch"} flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            bgImage={`url(about5.png)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "63.75rem" }}
          />
          <VStack
            align={"start"}
            width={"100%"}
            p={ "5%" }
            bgColor={"rgba(237, 241, 255, 1)"}
          >
            <VStack align={"start"}>
              <VStack>
                <Text
                  fontSize={{ base: "1.5rem", lg: "2rem" }}
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
                 fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                textAlign={"start"}
                lineClamp={7}
                whiteSpace="pre-line"
              >

مصداقيتنا تنطلق من قوة شراكاتنا، ونحن فخورون بأن خدماتنا القانونية تُقدّم بالشراكة مع شركة تكامل للمحاماة والاستشارات القانونية، وهي شركة مرخصة رسميًا في المملكة، وتضم فريقًا متميزًا من المحامين، والمستشارين القانونيين، أصحاب خبرة واسعة في المجالات الجنائية، العمالية، التجارية، الأسرية، والعديد من التخصصات الأخرى.
هذه الشراكة تمثل العمود الفقري لكل خدمة قانونية نقدمها، وتضمن للعملاء الجودة، الموثوقية، والامتثال الكامل للأنظمة المعمول بها.              </Text>
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
