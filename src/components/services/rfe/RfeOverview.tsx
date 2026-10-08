import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function RfeOverview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is an RFE, and What Should I Do First?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            An <strong>RFE (Request for Evidence)</strong> is a USCIS notice
            asking for more proof before it decides your case. You generally
            get <strong>up to 12 weeks, or the shorter date printed on the
            notice</strong>, to send <strong>one complete response</strong>.
            A <strong>NOID</strong> gives <strong>30 days</strong>.
            Extensions aren&apos;t granted. If a case is{" "}
            <strong>denied</strong>, you may refile, or file a{" "}
            <strong>motion or appeal</strong> on{" "}
            <strong>Form I-290B</strong>, usually within{" "}
            <strong>30 days</strong>.
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
