

const Hero = () => {
  return (
    <div className="w-full flex bg-black flex-col md:flex-row items-center justify-center md:justify-between p-24">
      <div className=" px-4">
        <img src={heroImage} alt="Hero" className=" h-[500px]" />
      </div>
      <div className="md:w-1/2 px-4">
        <h1 className="text-[50px] font-bold text-red-500 mb-4">TCAP</h1>
        <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum augue ut magna fringilla blandit. Donec in semper massa, sit amet sodales nunc.</p>
        <a href="#" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">Learn More</a>
      </div>
    </div>
  );
};

export default Hero;
