import { HStack } from "@chakra-ui/react";
import { ServiceCard } from "./ServiceCard";
import { type PlanProbs } from "../../types/types";
export const ServicesList = () => {
  return (
    <HStack
      w={"100%"}
      align={"stretch"}
      flexDir={{ base: "column", md: "row" }}
      justifyContent={"space-around"}
    >
      {plans.map((plan: PlanProbs, index: number) => (
        <ServiceCard key={index} plan={plan} />
      ))}
    </HStack>
  );
};

export const plans: PlanProbs[] = [
  {
    ref: "gold-plan",
    text:{
ar:"أعلى درجات التغطية القانونية للأفراد والعائلات",
en:" The highest levels of legal coverage for individuals and families"
    },
    title: {
      en: "Gold Plan",
      ar: "الباقة الذهبية",
    },
    subtitle: {
      en: "The Gold Plan provides a full, integrated, and flexible legal experience — covering your needs in consultations, representation, and follow-ups, without worrying about cost or complexity.",
      ar: "صُممت الباقة الذهبية لتمنحك تجربة قانونية شاملة، متكاملة، ومرنة — تغطي احتياجاتك في الاستشارات، التمثيل، والمتابعة القضائية، دون الحاجة للقلق من التكاليف أو تعقيد الإجراءات.",
    },

    description: [
      {
        en: "15 remote + 3 in-person consultations.",
        ar: "عدد 15 استشارة عن بعد + 3 استشارات حضورية،.",
      },
      {
        en: " Legal representation in 3 cases (labor or personal status only)",
        ar: " تمثيل قانوني في 3 قضايا.",
      },
      {
        en: "SAR 2499/month",
        ar: "2499 ريال/سنويًا",
      },
    ],
    price: {
      en: "2499",
      ar: "2499",
    },
    whofor: [
      {
        en: "Ideal for Families needing ongoing legal support",
        ar: "العائلات التي تحتاج إلى دعم قانوني مستمر",
      },
      {
        en: "Residents with more than one legal case",
        ar: "المقيمين الذين يحتاجون تمثيلًا في أكثر من قضية",
      },
      {
        en: "Individuals preferring in-person alongside remote consultations",
        ar: "الأفراد الذين يفضلون الاستشارات الحضورية إلى جانب الرقمية",
      },
      {
        en: "Those seeking the highest level of legal safety and privacy",
        ar: "من يبحث عن أقصى قدر من الأمان القانوني والخصوصية",
      },
    ],
    features: [
      {
        en: "	Personal status cases",
        ar: "	قضايا الأحوال الشخصية",
      },
      {
        en: "	Labor disputes",
        ar: "	القضايا العمالية",
      },
      {
        en: " Criminal law (consultation only, no representation)",
        ar: "	القضايا الجنائية (استشارة فقط، دون تمثيل)",
      },
      {
        en: "Contract review and legal inquiries",
        ar: "مراجعة العقود والاستفسارات القانونيه",
      },
    ],
    info: {
      en: "The Gold Plan is your all-in-one digital legal insurance — no surprises, no middlemen, no stress.",
      ar: " الباقة الذهبية هي تأمينك القانوني الرقمي الشامل طوال العام — دون مفاجآت، دون قلق، ودون وسيط",
    },
    Image: "goldshield.png",
  },
  {
    ref: "silver-plan",
        text:{
ar:"حل قانوني متوازن لمن يبحث عن احترافية بتكلفة مدروسة",
en:" A balanced legal solution for those seeking professionalism at a reasonable cost"
    },
    title: {
      en: "Silver Plan",
      ar: "الباقة الفضية",
    },
    subtitle: {
      en: "The Silver Plan offers flexible coverage that combines consultations and limited representation — with access to a licensed lawyer when needed, remotely or in person.",
      ar: "الباقة الفضية تمنحك تغطية قانونية مرنة تجمع بين الاستشارات والتمثيل في القضايا الأساسية، مع إمكانية الوصول لمحامٍ مرخص عند الحاجة، سواء عن بُعد أو بشكل حضوري.",
    },
    description: [
      {
        en: "6 remote + 1 in-person consultations. ",
        ar: "عدد 6 استشارات عن بعد + 1 حضورية.",
      },
      {
        en: "2 case representations. Annual SAR 999.",
        ar: " تمثيل في قضيتين. سنويًا 999 ريال",
      },
    ],
    price: {
      en: "999",
      ar: "999",
    },
    whofor: [
      {
        en: "Individuals or small families facing moderate legal challenges",
        ar: "الأفراد أو الأسر الصغيرة الذين يواجهون تحديات قانونية متوسطة",
      },
      {
        en: "Residents seeking periodic advice and limited representation",
        ar: "المقيمين الراغبين في استشارات دورية وتمثيل محدود",
      },
      {
        en: "Those who value balance between service and cost",
        ar: "من يفضل التوازن بين الخدمة والتكلفة",
      },
    ],

    info: {
      en: "The Silver Plan offers year-long legal peace of mind, with smart pricing and professional delivery.",
      ar: "الباقة الفضية تمنحك الطمأنينة القانونية طوال العام، بسعر مناسب وبأسلوب محترف.",
    },
    features: [
      {
        en: "Personal status cases",
        ar: "قضايا الأحوال الشخصية ",
      },
      {
        en: "Labor cases",
        ar: "القضايا العمالية",
      },
      {
        en: "(Some exclusions apply – see full coverage details)",
        ar: "(تطبق بعض الاستثناءات – راجع شبكة التغطية الكاملة)",
      },
    ],
    Image: "silvershield.png",
  },
  {
    ref: "bronze-plan",
        text:{
ar:"حماية قانونية أساسية… لمن يحتاج دعمًا سريعًا وفعّالًا",
en:"core legal protection... for those needing quick and effective support"
    },
    title: {
      en: "Bronze Plan",
      ar: "الباقة البرونزية",
    },
    subtitle: {
      en: "The Bronze Plan is your smart choice for minimal but sufficient legal coverage. Perfect for anyone facing a single legal question or case — with access to a licensed lawyer at symbolic pricing, and no commitment to expensive plans.",
      ar: "الباقة البرونزية هي خيارك الذكي إذا كنت تبحث عن الحد الأدنى من التغطية القانونية، مع إمكانية الوصول لمحامٍ مختص دون الالتزام بباقات مرتفعة. مناسبة لمن يواجه استفسارًا قانونيًا محددًا أو قضية واحدة فقط.",
    },
    info: {
      en: "The Bronze Plan gives you a safe entry point into the legal world — with simple costs and approved protection.",
      ar: "الباقة البرونزية تمنحك بداية آمنة في عالم القانون، بتكلفة بسيطة وحماية معتمدة.",
    },
    description: [
      {
        en: "3 remote consultations.",
        ar: "عدد 3 استشارات عن بعد.",
      },
      {
        en: " 1 case representation. Annual SAR 499.",
        ar: "تمثيل في قضية واحدة. سنويًا 499 ريال",
      },
    ],
    whofor: [
      {
        en: "Individuals with one legal case during the year",
        ar: "الأفراد الذين يواجهون قضية قانونية واحدة خلال السنة",
      },
      {
        en: "Residents seeking language-appropriate, limited advice",
        ar: "المقيمين الذين يحتاجون استشارات قانونية محددة باللغة المناسبة",
      },
      {
        en: "Those looking for affordable, reliable legal help",
        ar: "من يبحث عن خدمة قانونية معتمدة بأسعار رمزية",
      },
    ],
    price: {
      en: "499",
      ar: "499",
    },
    features: [
      {
        en: "Personal status cases",
        ar: "قضايا الأحوال الشخصية",
      },
      {
        en: "Labor cases",
        ar: "القضايا العمالية",
      },
    ],
    Image: "bronzeshield.png",
  },
];
