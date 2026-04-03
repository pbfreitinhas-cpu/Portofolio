import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "About": "About",
      "Resume": "Resume",
      "Home": "Home",
      "Back": "Back",
      "Language": "Language",
      "heroText": "Hey, I'm Pedro — a designer based in São Paulo, passionate about surf, soccer, cognitive bias, behavior-driven interfaces, and the intersection of design and artificial intelligence.",
      "viewCaseStudies": "View Case Studies",
      "moreAboutMe": "More About Me",
      "caseStudies": "Case Studies",
      "aboutMe": "About Me",
      "aboutMeText1": "I'm a UX/UI designer with a deep interest in cognitive psychology and artificial intelligence. My work focuses on understanding how users think, behave, and make decisions.",
      "aboutMeText2": "By combining behavioral science with design thinking, I create interfaces that align with natural cognitive patterns and reduce decision fatigue.",
      "aboutMeText3": "Currently exploring how AI can augment the design process while maintaining human-centered principles.",
      "getInTouch": "Get in touch",
      "getInTouchDesc": "Interested in collaborating or learning more? Let's connect.",
      "Email": "Email",
      "LinkedIn": "LinkedIn",
      "copyright": "© 2025 Pedro. UX/UI Designer specializing in AI and cognitive bias.",
      "backgroundProblem": "Background & Problem",
      "backgroundProblemText1": "Spotify's mobile interface was not designed for drivers, yet many users rely on it while commuting. The current UI requires too many taps, displays dense content, and has small touch targets — all of which increase distraction risk behind the wheel. Without a dedicated experience for driving scenarios, users feel frustrated trying to control playback safely.",
      "backgroundProblemText2": "Reports and user feedback reveal that this issue not only impacts user satisfaction, but also creates a serious usability gap that could lead to churn or even safety concerns. This case explores how to adapt Spotify for safer on-road use through intentional UX and cognitive design."
    }
  },
  pt: {
    translation: {
      "About": "Sobre",
      "Resume": "Currículo",
      "Home": "Início",
      "Back": "Voltar",
      "Language": "Idioma",
      "heroText": "Oi, eu sou Pedro — um designer baseado em São Paulo, apaixonado por surf, futebol, viés cognitivo, interfaces orientadas por comportamento e a interseção entre design e inteligência artificial.",
      "viewCaseStudies": "Ver Estudos de Caso",
      "moreAboutMe": "Mais Sobre Mim",
      "caseStudies": "Estudos de Caso",
      "aboutMe": "Sobre Mim",
      "aboutMeText1": "Sou um designer UX/UI com profundo interesse em psicologia cognitiva e inteligência artificial. Meu trabalho se concentra em entender como os usuários pensam, se comportam e tomam decisões.",
      "aboutMeText2": "Combinando ciência comportamental com pensamento de design, crio interfaces que se alinham com padrões cognitivos naturais e reduzem a fadiga de decisão.",
      "aboutMeText3": "Atualmente explorando como a IA pode aumentar o processo de design enquanto mantém princípios centrados no humano.",
      "getInTouch": "Entre em contato",
      "getInTouchDesc": "Interessado em colaborar ou saber mais? Vamos nos conectar.",
      "Email": "Email",
      "LinkedIn": "LinkedIn",
      "copyright": "© 2025 Pedro. Designer UX/UI especializado em IA e viés cognitivo.",
      "backgroundProblem": "Contexto & Problema",
      "backgroundProblemText1": "A interface móvel do Spotify não foi projetada para motoristas, mas muitos usuários dependem dela durante o deslocamento. A UI atual requer muitos toques, exibe conteúdo denso e tem alvos de toque pequenos — tudo isso aumenta o risco de distração ao volante. Sem uma experiência dedicada para cenários de direção, os usuários se sentem frustrados ao tentar controlar a reprodução com segurança.",
      "backgroundProblemText2": "Relatórios e feedback dos usuários revelam que esse problema não apenas impacta a satisfação do usuário, mas também cria uma lacuna séria de usabilidade que pode levar à rotatividade ou até mesmo preocupações de segurança. Este caso explora como adaptar o Spotify para uso mais seguro na estrada por meio de design UX e cognitivo intencional."
    }
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'en', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;