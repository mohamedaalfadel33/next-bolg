import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Featured = () => {
  return (
    <div className=" mt-8">
      <h1 className=" text-7xl">
        <strong>Hey,lama dev here!</strong> Discover my stories and creative
        ideas.
      </h1>
      <div className="flex mt-16 items-center gap-14">
        <div className=" flex-[1] h-96 relative">
          <Image className=" object-cover" src="/p1.jpeg" alt="" fill />
        </div>
        <div className="flex-[1] flex flex-col gap-5">
          <h1 className=" text-2xl font-bold ">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className=" text-xl font-light">
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
