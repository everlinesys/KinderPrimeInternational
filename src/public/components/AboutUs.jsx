import { ArrowUpRight, BookOpen, Users, Award, Globe2 } from "lucide-react";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">

        {/* Top content */}
        <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Left */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                About Kinder Prime
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Learning that opens
              <span className="block text-orange-500">
                new possibilities.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-slate-600">
              Kinder Prime International is a dynamic learning hub dedicated
              to empowering learners of all ages through quality education,
              skill development, and career-focused training.
            </p>

            <a
              href="#courses"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              Explore Our Courses
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Right */}
          <div>
            <p className="text-lg leading-8 text-slate-700 lg:text-xl">
              With <strong className="font-semibold text-slate-900">400+ online and offline courses</strong>,
              we provide a wide range of programs designed to help students,
              professionals, homemakers, and aspiring entrepreneurs achieve
              their academic and career goals.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              At Kinder Prime International, we believe education should be
              accessible, affordable, and practical. Our expert trainers,
              industry-relevant curriculum, flexible learning options, and
              recognized certification programs ensure that every learner
              gains valuable knowledge and real-world skills.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
              
              <div className="bg-white p-5">
                <BookOpen className="mb-4 text-orange-500" size={22} />
                <div className="text-2xl font-bold text-slate-900">400+</div>
                <div className="mt-1 text-xs text-slate-500">
                  Courses
                </div>
              </div>

              <div className="bg-white p-5">
                <Users className="mb-4 text-orange-500" size={22} />
                <div className="text-2xl font-bold text-slate-900">All Ages</div>
                <div className="mt-1 text-xs text-slate-500">
                  Learning
                </div>
              </div>

              <div className="bg-white p-5">
                <Award className="mb-4 text-orange-500" size={22} />
                <div className="text-2xl font-bold text-slate-900">
                  Certified
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Programs
                </div>
              </div>

              <div className="bg-white p-5">
                <Globe2 className="mb-4 text-orange-500" size={22} />
                <div className="text-2xl font-bold text-slate-900">
                  Online + Offline
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Learning
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Course categories */}
        <div className="mt-20 border-t border-slate-200 pt-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
                What you can learn
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                400+ courses. One learning destination.
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-500">
              From professional certifications to creative pursuits and
              personal development, our programs are designed around the
              skills that matter in today's world.
            </p>

          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Teacher Training",
              "Veterinary Science",
              "Spoken English",
              "AI & Digital Skills",
              "Computer Courses",
              "Art & Craft",
              "Dance",
              "Music",
              "Yoga",
              "Competitive Exams",
              "Personality Development",
              "Health & Wellness",
              "Professional Certifications",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 rounded-3xl bg-slate-900 px-7 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-400">
                Kinder Prime International
              </p>

              <h3 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Your Gateway to Learning, Skills, and Career Success.
              </h3>
            </div>

            <a
              href="#courses"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-orange-500 hover:text-white"
            >
              View Courses
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}