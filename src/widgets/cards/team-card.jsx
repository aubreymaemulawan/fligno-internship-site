import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, position, socials }) {
  return (
    <Card color="transparent" shadow={false}>
      <div className="h-[15rem] overflow-hidden rounded-2xl shadow-md shadow-gray-800">
        <Avatar
          src={img}
          alt={name}
          className="h-full w-full object-cover object-center shadow-lg shadow-gray-500/25 transition delay-150 ease-in-out hover:scale-125 "
        />
      </div>
      {/* <Typography variant="h5" color="blue-gray" className="mb-1 mt-6">
        {name}
      </Typography>
      {position && (
        <Typography className="font-normal text-blue-gray-500">
          {position}
        </Typography>
      )}
      {socials && <div className="mx-auto mt-5">{socials}</div>} */}
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
