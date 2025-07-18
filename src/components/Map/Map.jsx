import "../Map/style/map.css";

const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61684.91821026477!2d86.19918556697051!3d27.61421817385281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ebd8f7c23549fb%3A0xc86362f32a14858!2sJiri%2045500!5e0!3m2!1sen!2snp!4v1748580569594!5m2!1sen!2snp"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
