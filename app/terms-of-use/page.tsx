"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock } from "lucide-react"
import {
  acknowledgement,
  introParagraphs,
  termsSections,
  type Clause,
} from "@/lib/terms-of-use-content"

const LINKABLE =
  /(akiba@griffin-finance\.com|info@akibatribe\.com|info@griffin-finance\.com|gflcompliance@griffin-finance\.com|02018891816|Privacy Policy)/g

function LinkedText({ text }: { text: string }) {
  const parts = text.split(LINKABLE)

  return (
    <>
      {parts.map((part, index) => {
        if (part === "Privacy Policy") {
          return (
            <Link
              key={index}
              href="/privacy-policy"
              className="text-akiba-pink-600 hover:text-akiba-pink-700 font-jakarta-semibold"
            >
              {part}
            </Link>
          )
        }

        if (part.includes("@")) {
          return (
            <a
              key={index}
              href={`mailto:${part}`}
              className="text-akiba-pink-600 hover:text-akiba-pink-700 font-jakarta-semibold"
            >
              {part}
            </a>
          )
        }

        if (part === "02018891816") {
          return (
            <a
              key={index}
              href="tel:02018891816"
              className="text-akiba-pink-600 hover:text-akiba-pink-700 font-jakarta-semibold"
            >
              {part}
            </a>
          )
        }

        return <span key={index}>{part}</span>
      })}
    </>
  )
}

function ClauseBlock({ clause }: { clause: Clause }) {
  return (
    <div className="mb-5 last:mb-0">
      <p className="text-gray-700 font-jakarta-regular leading-relaxed whitespace-pre-line">
        <span className="font-jakarta-semibold text-gray-900 mr-2">{clause.label}</span>
        {clause.paragraphs?.map((paragraph, index) => (
          <span key={index}>
            {index > 0 && "\n\n"}
            <LinkedText text={paragraph} />
          </span>
        ))}
      </p>
      {clause.bullets && (
        <ul className="mt-3 ml-8 list-disc space-y-1 text-gray-700 font-jakarta-regular leading-relaxed">
          {clause.bullets.map((item) => (
            <li key={item}>
              <LinkedText text={item} />
            </li>
          ))}
        </ul>
      )}
      {clause.letters && (
        <ol className="mt-3 ml-8 list-[lower-alpha] space-y-1 text-gray-700 font-jakarta-regular leading-relaxed pl-1">
          {clause.letters.map((item) => (
            <li key={item} className="pl-1">
              <LinkedText text={item} />
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-gray-50 to-akiba-pink-50 py-10 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-akiba-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-akiba-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-jakarta-extrabold">
                Terms of Use
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed font-jakarta-medium">
                Akiba by Griffin Finance Limited
              </p>
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
                <Clock className="w-4 h-4 text-akiba-pink-500 mr-2" />
                <span className="text-sm font-jakarta-medium text-gray-700">Last Updated: October 30, 2026</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pt-6 pb-16 md:pt-8 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div className="space-y-4 mb-10">
                  {introParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-gray-700 font-jakarta-regular leading-relaxed">
                      <LinkedText text={paragraph} />
                    </p>
                  ))}
                </div>

                <div className="space-y-10">
                  {termsSections.map((section) => (
                    <section key={section.id} id={section.id}>
                      <h2 className="text-xl font-jakarta-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        {section.number}. {section.title}
                      </h2>
                      {section.intro && (
                        <p className="text-gray-700 font-jakarta-regular leading-relaxed mb-4">{section.intro}</p>
                      )}
                      {section.definitions && (
                        <dl className="space-y-3 mb-2">
                          {section.definitions.map((definition) => (
                            <div key={definition.term}>
                              <dt className="inline font-jakarta-semibold text-gray-900">“{definition.term}”</dt>
                              <dd className="inline text-gray-700 font-jakarta-regular leading-relaxed">
                                {" "}
                                {definition.connector !== undefined ? definition.connector : "means"}{" "}
                                {definition.meaning}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      {section.clauses.map((clause) => (
                        <ClauseBlock key={clause.label} clause={clause} />
                      ))}
                    </section>
                  ))}
                </div>

                <section id="acknowledgement" className="mt-10 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <h2 className="text-xl font-jakarta-semibold text-gray-900 mb-3">{acknowledgement.title}</h2>
                  <p className="text-gray-700 font-jakarta-regular leading-relaxed mb-4">
                    <LinkedText text={acknowledgement.intro} />
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-700 font-jakarta-regular leading-relaxed">
                    {acknowledgement.items.map((item) => (
                      <li key={item} className="pl-1">
                        <LinkedText text={item} />
                      </li>
                    ))}
                  </ol>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
