type IconProps = {
  className?: string;
};

export function ProblemEnvelopeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 120 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M12 28c0-6.627 5.373-12 12-12h72c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H24c-6.627 0-12-5.373-12-12V28z"
        fill="#EF4444"
      />
      <path
        d="M12 32 60 58 108 32"
        stroke="#B91C1C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 20h32l8 12H36l8-12z"
        fill="#FCA5A5"
      />
      <rect x="52" y="44" width="16" height="20" rx="2" fill="white" opacity="0.95" />
      <path d="M78 52h14v4H78v-4z" fill="#FECACA" />
    </svg>
  );
}

export function SolutionRocketIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <ellipse cx="60" cy="98" rx="28" ry="8" fill="#10B981" opacity="0.35" />
      <path
        d="M48 88c4-14 8-28 12-42 4 14 8 28 12 42H48z"
        fill="#34D399"
      />
      <path
        d="M60 18 78 72H42L60 18z"
        fill="url(#rocket-body)"
      />
      <path d="M42 72h36l-6 14H48l-6-14z" fill="#7C3AED" />
      <circle cx="60" cy="48" r="8" fill="#E9D5FF" />
      <path d="M36 58 24 72l12 4 6-18zM84 58l12 14-12 4-6-18z" fill="#A855F7" />
      <defs>
        <linearGradient id="rocket-body" x1="60" y1="18" x2="60" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C084FC" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
}
