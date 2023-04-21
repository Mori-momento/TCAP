
const Card = ({ name, designation, photo, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
      <img src={photo} alt={name} className="rounded-full h-20 w-20 mr-4" />
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-gray-600">{designation}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
