import React from "react";
import Card from "../components/Card";

const AboutUs = () => {
  const heads = [
    {
      name: "John Doe",
      designation: "Head of Operations",
      photo: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, leo id malesuada malesuada, nisl odio gravida magna, vel dapibus arcu sem vitae eros."
    },
    {
      name: "Jane Doe",
      designation: "Head of Marketing",
      photo: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, leo id malesuada malesuada, nisl odio gravida magna, vel dapibus arcu sem vitae eros."
    }
  ];

  const members = [
    {
      name: "Bob Smith",
      designation: "Marketing Manager",
      photo: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, leo id malesuada malesuada, nisl odio gravida magna, vel dapibus arcu sem vitae eros."
    },
    {
      name: "Alice Johnson",
      designation: "Operations Manager",
      photo: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus, leo id malesuada malesuada, nisl odio gravida magna, vel dapibus arcu sem vitae eros."
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center mr-8">
          <h2 className="text-xl font-bold mb-4">Heads</h2>
          {heads.map((head) => (
            <Card key={head.name} name={head.name} designation={head.designation} photo={head.photo} description={head.description} />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Members</h2>
          {members.map((member) => (
            <Card key={member.name} name={member.name} designation={member.designation} photo={member.photo} description={member.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
