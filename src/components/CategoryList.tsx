import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryList = () => {
  return (
    <div className=" mt-4">
      <h1 className="h2-medium">Popular Categories</h1>
      <div>
        <Link href={'/blog?cat=style'}>
          <Image src={'/style.png'} alt="style" width={32} height={32} />
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
