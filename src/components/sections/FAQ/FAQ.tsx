import "./styles.css";
export default function FAQ({ id }: { id: string }) {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div id={id} className="w-[95%] flex items-center justify-center my-10">
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
                What is SYNAPSE?
              </h3>
              <p>
                <b>SYNAPSE</b> is the flagship event of MIBCS, featuring a mix
                of technical, creative, and innovation-driven competitions. It's
                a platform where participants can showcase their skills,
                collaborate with peers, and gain recognition in various domains.
              </p>
            </div>

            <div className="text-white p-4 rounded-lg shadow-md marvel-box">
              <h3 className="font-bold text-lg marvel-title glow">
                When are the event dates?
              </h3>
              <p>
                The MIBCS SYNAPSE event will be held on{" "}
                <b>7th and 8th April 2025</b>.
              </p>
            </div>

            <div className="text-white p-4 rounded-lg shadow-md marvel-box">
              <h3 className="font-bold text-lg marvel-title glow">
                What is the registration fee?
              </h3>
              <p>
                The registration fee is <b>₹50</b> per member, and teams can
                consist of
                <b> up to 3 members</b>.
              </p>
            </div>

            <div className="text-white p-4 rounded-lg shadow-md marvel-box">
              <h3 className="font-bold text-lg marvel-title glow">
                Can I participate in multiple events?
              </h3>
              <p>
                Yes, It is encouraged to participate in multiple events!
                Additionally, if you participate in <b>4</b> events, you will
                get
                <b> one extra event for free</b>.
              </p>
            </div>

            <div className="text-white p-4 rounded-lg shadow-md marvel-box">
              <h3 className="font-bold text-lg marvel-title glow">
                How can I stay updated with MIBCS news and updates?
              </h3>
              <p>
                To stay updated with all MIBCS events and announcements, join
                our <b>WhatsApp community</b> and follow us on <b>Instagram</b>.
                We continuously share updates and event details there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
