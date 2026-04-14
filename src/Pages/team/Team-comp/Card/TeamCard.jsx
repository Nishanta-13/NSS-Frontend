import { Icon } from "@iconify/react";

const TeamCard = ({ imageUrl, name, designation, email, instagram, linkedin, facebook }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-80 mx-auto">
      {/* Image */}
      <div className="w-full h-80 overflow-hidden">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg"
          }
          alt={name || "Team Member"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 text-base mt-1">{designation}</p>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-5">
          {email && (
            <a
              href={`mailto:${email}`}
              className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              <Icon icon="mdi:email-outline" width="22" height="22" />
            </a>
          )}

          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              <Icon icon="mdi:instagram" width="22" height="22" />
            </a>
          )}

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              <Icon icon="mdi:linkedin" width="22" height="22" />
            </a>
          )}

          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              <Icon icon="mdi:facebook" width="22" height="22" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
