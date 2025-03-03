import "./styles.css";
export default function FAQ({ id }: { id: string }) {
  return (
    <div id={id} className="w-full flex items-center justify-center my-[10rem]">
      <div className="tilted-container flex items-start gap-6 p-6 marvel-box rounded-lg w-full max-w-3xl">
        {/* <!-- Vertical Marvel-Styled FAQ Heading --> */}
        <div
          className="text-3xl font-bold text-white uppercase tracking-widest bg-black p-6 rounded-lg flex items-center justify-center marvel-title glow"
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            width: "120px",
            height: "320px",
          }}
        >
          F.A.Q.
        </div>

        {/* <!-- Scrollable FAQ Container --> */}
        <div className="w-full max-h-[300px] faq-container scrollbar-hide space-y-6">
          {/* <!-- FAQ Items --> */}
          <div className="text-white p-4 rounded-lg shadow-md marvel-box">
            <h3 className="font-bold text-lg marvel-title glow">
              What types of events do you organize?
            </h3>
            <p>
              We organize hackathons, pitching competitions, tech meetups,
              workshops, and club activities related to AI, ML, cybersecurity,
              and interdisciplinary projects.
            </p>
          </div>

          <div className="text-white p-4 rounded-lg shadow-md marvel-box">
            <h3 className="font-bold text-lg marvel-title glow">
              Who can participate in these events?
            </h3>
            <p>
              Our events are open to students, tech enthusiasts, and
              professionals, depending on the event type. Some may have specific
              eligibility criteria.
            </p>
          </div>

          <div className="text-white p-4 rounded-lg shadow-md marvel-box">
            <h3 className="font-bold text-lg marvel-title glow">
              How can I register for an event?
            </h3>
            <p>
              You can register through our website, official social media pages,
              or the event registration link shared in our community groups.
            </p>
          </div>

          <div className="text-white p-4 rounded-lg shadow-md marvel-box">
            <h3 className="font-bold text-lg marvel-title glow">
              Are there any participation fees?
            </h3>
            <p>
              Most of our events are free, but some may require a nominal fee to
              cover logistics. Check the specific event details for more
              information.
            </p>
          </div>

          <div className="text-white p-4 rounded-lg shadow-md marvel-box">
            <h3 className="font-bold text-lg marvel-title glow">
              Do I need prior experience to participate in hackathons?
            </h3>
            <p>
              Not necessarily! Beginners are welcome. We often have mentorship
              sessions to help participants get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
