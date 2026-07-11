interface Props {
  className?: string;
  label?: string;
}

export function BookCallButton({ className = '', label = 'Book a call' }: Props) {
  return (
    <a
      href="https://cal.com/zaman-ishtiyaq-20r7dl/30min?overlayCalendar=true"
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-neo bg-black text-white ${className}`}
    >
      {label}
    </a>
  );
}
