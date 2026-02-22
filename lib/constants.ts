import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiKeras,
  SiTensorflow,
  SiCplusplus,
  SiBun,
  SiC,
  SiPython,
  SiHtml5,
  SiMongodb,
  SiZod,
  SiFramer,
  SiShadcnui,
  SiDart,
  SiFlutter,
  SiPrisma,
  SiDrizzle,
  SiRedis,
  SiDocker,
  SiFastapi,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbBrandRadixUi } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";

export type stacksProps = Record<
  string,
  {
    Icon: IconType;
    className: string;
  }
>;

export const FRONTEND_STACKS: stacksProps = {
  JavaScript: { Icon: SiJavascript, className: "" },
  TypeScript: { Icon: SiTypescript, className: "" },
  "Next.js": { Icon: SiNextdotjs, className: "" },
  "React.js": { Icon: SiReact, className: "" },
  TailwindCSS: { Icon: SiTailwindcss, className: "" },
  "C++": { Icon: SiCplusplus, className: "" },
  CSS: { Icon: SiCss3, className: "" },
  C: { Icon: SiC, className: "" },
  Python: { Icon: SiPython, className: "" },
  HTML: { Icon: SiHtml5, className: "" },
  Zod: { Icon: SiZod, className: "" },
  Framer: { Icon: SiFramer, className: "" },
  ShadcnUI: { Icon: SiShadcnui, className: "" },
  RadixUI: { Icon: TbBrandRadixUi, className: "" },
  Dart: { Icon: SiDart, className: "" },
  Flutter: { Icon: SiFlutter, className: "" },
};

export const BACKEND_STACKS = {
  PostgreSql: { Icon: BiLogoPostgresql, className: "" },
  "Node.js": { Icon: SiNodedotjs, className: "" },
  Firebase: { Icon: SiFirebase, className: "" },
  Express: { Icon: SiExpress, className: "" },
  TensorFlow: { Icon: SiTensorflow, className: "" },
  Keras: { Icon: SiKeras, className: "" },
  Bun: { Icon: SiBun, className: "" },
  MongoDB: { Icon: SiMongodb, className: "" },
  Supabase: { Icon: RiSupabaseFill, className: "" },
  Prisma: { Icon: SiPrisma, className: "" },
  Drizzle: { Icon: SiDrizzle, className: "" },
  Redis: { Icon: SiRedis, className: "" },
  Docker: { Icon: SiDocker, className: "" },
  FastAPI: { Icon: SiFastapi, className: "" },
  JWT: { Icon: SiJsonwebtokens, className: "" },
};
