import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { team } from "@/data/team";

const highlights = [
  { icon: Users, text: "Consultants, document specialists & an advisory board" },
  { icon: Globe2, text: "U.S. and India chapters working in step on every case" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TeamSection() {
  const countries = new Set(team.map((member) => member.chapter)).size;

  return (
    <section className="bg-cream py-24">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Our Team
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            A team built across two continents
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-body">
            <p>
              Our expert team of reliable immigration consultants and legal
              document assistants spans a U.S. chapter and an India chapter,
              working together to get you fast, effective, and affordable
              service.
            </p>
            <p>
              From leadership and HR to community outreach and case
              coordination, every member plays a part in moving your case
              forward.
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item.text} className="flex items-center gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-maroon shadow-sm shadow-ink/5">
                  <item.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-ink">{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {team.slice(0, 5).map((member) => (
                <span
                  key={member.name}
                  title={`${member.name} — ${member.title}`}
                  className="flex size-11 items-center justify-center rounded-full border-2 border-cream bg-ink text-xs font-bold text-white"
                >
                  {initials(member.name)}
                </span>
              ))}
            </div>
            <p className="text-sm font-semibold text-ink">
              {team.length}+ team members
              <span className="block text-xs font-normal text-body/60">
                Across the U.S. &amp; India
              </span>
            </p>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
          >
            Meet the full team
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <FadeIn className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-maroon/15 via-accent/10 to-transparent blur-2xl"
            aria-hidden="true"
          />

          <div className="relative aspect-[4/5] w-4/5 overflow-hidden rounded-[1.75rem] shadow-2xl shadow-ink/15 sm:w-3/4">
            <Image
              src="/images/blog-meeting-room.jpg"
              alt="Our team collaborating in a meeting room"
              fill
              sizes="(min-width: 1024px) 35vw, 60vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-10 -right-2 aspect-[4/3] w-1/2 overflow-hidden rounded-2xl border-4 border-cream shadow-xl shadow-ink/15 sm:-right-6">
            <Image
              src="/images/blog-workspace.jpg"
              alt="Our team working at their desks"
              fill
              sizes="(min-width: 1024px) 20vw, 35vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -left-4 top-8 rounded-xl bg-white px-5 py-4 shadow-lg shadow-ink/10 sm:top-12">
            <p className="text-2xl font-bold text-maroon">{countries}</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-body/60">
              Countries
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
