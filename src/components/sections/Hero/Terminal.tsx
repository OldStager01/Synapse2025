import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export default function TerminalDemo({ className }: { className?: string }) {
  return (
    <Terminal className={`${className} `}>
      <TypingAnimation>
        &gt; git commit -m &quot;Fixed all bugs&quot;
      </TypingAnimation>

      <AnimatedSpan delay={1500} className="text-red-500">
        <span>🚨 ERROR: Web detected a bug!</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-yellow-500">
        <span>🕷️ PeterParker: Uh... guys?</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-blue-500">
        <span>🦾 TonyStark: Kid, it’s a feature.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-purple-500">
        <span>🔮 DrStrange: 14,000,605 futures…</span>
      </AnimatedSpan>
      <AnimatedSpan delay={3000} className="text-purple-500">
        <span>🔮 DrStrange:Only one works.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>💥 Hulk: HULK SMASH BUGS!</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-red-500">
        <span>⚠ ERROR: Thanos snapped half the code!</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Fix applied. Multiverse stable.</span>
      </AnimatedSpan>

      <TypingAnimation delay={5000} className="text-muted-foreground">
        Success! Code deployed.
      </TypingAnimation>

      <TypingAnimation delay={5500} className="text-muted-foreground">
        Ready to assemble? [Y/N]_
      </TypingAnimation>
    </Terminal>
  );
}
