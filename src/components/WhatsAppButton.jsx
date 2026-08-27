import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

  const phoneNumber = "34643147805";

  const message =
    "Hola Aura Ibiza, me gustaría recibir información sobre villas y experiencias VIP.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;