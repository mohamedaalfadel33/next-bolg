import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Featured = () => {
  return (
    <div className=" mt-8">
      <h1 className=" text-4xl md:text-7xl  font-sans">
        <strong>Hey, lama Dev Here! </strong> Discover my stories and creative
        ideas.
      </h1>
      <div className="md:flex mt-16 items-center md:gap-14">
        <div className="flex-[1] h-96 relative">
          <Image className=" object-cover" src="/p1.jpeg" alt="" fill />
        </div>
        <div className="flex-[1] flex flex-col gap-2">
          <h1 className=" md:text-2xl font-bold ">
            Lorem ipsum dolor sit amet consectetur dasd.
          </h1>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            nostrum, distinctio, facere cum necessitatibus molestiae doloribus
            voluptate ipsam natus laborum dolor aliquid dignissimos molestias
            deserunt perferendis quam quasi corporis magni!
          </p>
          <Button className=" w-max" variant={'secondary'}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
