import React from 'react'
import LeftImageCard from '../components/LeftImageCard'
import RightImageCard from '../components/RightImageCard'
import ImageCard from '../components/ImageCard'

const Tracks = () => {
  return (
    <main className="flex-grow overflow-x-clip bg-gray-50 pt-14">
        <div className="min-h-full bg-gradient-to-r from-white to-indigo-50">
          <div className="relative flex-grow items-start justify-start space-x-2 px-4 md:flex md:flex-row md:px-8 xl:px-10">
            <main className="w-full pt-4 md:flex-grow">
              <div className="flex flex-col items-center justify-center px-4 py-2 sm:p-6">
                <h1 className=" text-center text-black text-4xl sm:text-6xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3">Campus</h1>
                {/* <div className="mt-1 sm:mt-4 h-1 w-12 sm:w-20 bg-blue-600 rounded"></div> */}
              </div>
              <div id="Classrooms">
              <LeftImageCard id = "Classroom" title="Classrooms" description="Our classrooms are designed to foster creativity, collaboration, and critical thinking. With spacious layouts, abundant natural light, and ergonomic furniture, our students experience a comfortable and inspiring environment conducive to academic excellence. Each classroom is equipped with state-of-the-art technology to enhance the learning experience, including interactive whiteboards and multimedia resources." image="/infra1.png" />
              </div>
              <div id="Playground">
              <RightImageCard id = "Playground" title="Play Ground" description="Our expansive play area is designed to encourage physical activity, social interaction, and imaginative play. Equipped with age-appropriate structures, colorful playsets, and safety-conscious surfaces, our playground ensures that every child can explore, discover, and have fun in a secure environment. The space is not only a hub for physical well-being but also a place where friendships blossom and teamwork flourishes. Supervised by caring staff, our playground provides a safe haven for students to unwind, recharge, and build lasting memories. At our school, we understand the importance of play in a child's development, and our vibrant playground reflects our commitment to fostering both physical and social growth." image="/play.png" />
              </div>
              <div id="complab">
              <LeftImageCard id = "complab"  title="Computer Lab" description="Our state-of-the-art facility is equipped with the latest technology to empower students on their digital journey. Each computer station is outfitted with high-performance hardware and up-to-date software, providing students with a hands-on experience in a dynamic learning environment. Our dedicated IT staff ensures that the lab is always at the forefront of technological advancements, preparing students for the challenges of the digital age. Whether it's coding, multimedia production, or research, our computer lab is a hub for creativity and skill development. The lab is not just a space for learning; it's a launchpad for the future." image="/clab.png" />
              </div>
              <RightImageCard title="Science & Tinkering Labs" description="This dynamic space is designed to ignite a passion for scientific inquiry and hands-on exploration. Equipped with cutting-edge tools, interactive experiments, and a myriad of materials, our lab encourages students to unleash their creativity and problem-solving skills. Here, learning transcends textbooks as students engage in exciting projects, fostering a love for science and a spirit of tinkering. Our experienced instructors guide students through immersive experiences, allowing them to grasp complex concepts through practical application. The Science and Tinkering Lab is more than just a room; it's a haven for budding scientists and inventors to dream, experiment, and bring their ideas to life." image="/labs2.png" />
              <ImageCard title="Labs" image1="/labs1.png" image2="/labs2.png" image3="/labs3.png" />


            </main>
          </div>
      
        </div>

      </main>
  )
}

export default Tracks