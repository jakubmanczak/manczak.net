import { IconCPU } from "@/components/icons/IconCPU";
import { Lexend } from "next/font/google";
import Link from "next/link";

const lexend = Lexend({ subsets: ["latin"] });

type projectlang = "C" | "React" | "Svelte";
type project = {
  name: string;
  desc?: string;
  lang?: projectlang;
  href?: string;
  repo?: string;
  styles?: string;
};

const projects: project[] = [
  {
    name: "Debate Tools",
    desc: "Utilities to aid in conducting of oxford format debates.",
    href: "https://debates.manczak.net/",
    repo: "https://github.com/jakubmanczak/debates",
    lang: "React",
    styles: "sm:col-span-2",
  },
  {
    name: "Katakanize",
    desc: "Latin to Katakana transliteration.",
    lang: "Svelte",
    href: "https://katakanize.vercel.app",
    repo: "https://github.com/jakubmanczak/katakanize",
  },
  {
    name: "PESEL",
    desc: "Verification and decoding of pesel numbers.",
    lang: "Svelte",
    href: "https://numerpesel.vercel.app",
    repo: "https://github.com/jakubmanczak/pesel",
  },
];

export default function Projectspage() {
  return (
    <>
      <div className="mt-8 px-4 max-w-4xl w-full">
        <h1 className={`${lexend.className} flex flex-row gap-2 mb-2`}>
          <IconCPU />
          projects
        </h1>
        <p className="text-neutral-500 mb-8">
          {"Things I've made I'm proud of."}
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((el: project) => {
            return (
              <div
                className={`rounded bg-neutral-800 border-neutral-700 border-[1px] flex flex-col ${el.styles}`}
                key={`${el.name}${el.href}${el.desc}`}
              >
                <div className="p-4">
                  <p className={lexend.className}>{el.name}</p>
                  <p className="text-neutral-400">{el.desc}</p>
                </div>
                {el.href || el.repo ? (
                  <hr className="border-neutral-700 mt-auto" />
                ) : (
                  ""
                )}
                <div className="flex flex-row text-center divide-solid divide-x-[1px] divide-neutral-700">
                  {el.href ? (
                    <Link
                      href={el.href}
                      target="_blank"
                      className={`w-full p-2 transition ${
                        el.repo ? "rounded-bl" : "rounded-b"
                      } hover:bg-neutral-900`}
                    >
                      <p>Project link</p>
                    </Link>
                  ) : (
                    ""
                  )}
                  {el.repo ? (
                    <Link
                      href={el.repo}
                      target="_blank"
                      className={`w-full p-2 transition ${
                        el.href ? "rounded-br" : "rounded-b"
                      } hover:bg-neutral-900`}
                    >
                      <p>Source code</p>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
