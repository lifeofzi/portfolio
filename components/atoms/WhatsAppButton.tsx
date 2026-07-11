interface Props {
  message: string;
  className?: string;
  label?: string;
}

export function WhatsAppButton({ message, className = '', label = 'WhatsApp me' }: Props) {
  const encoded = encodeURIComponent(message);
  return (
    <a
      href={`https://wa.me/918851985235?text=${encoded}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-neo bg-[#25D366] text-black ${className}`}
    >
      {label}
    </a>
  );
}
