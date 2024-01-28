import Featured from '@/components/featured/Featured';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import CategoryList from '@/components/categoryList/CategoryList';
export default function Home() {
  return (
    <>
      <Featured />
      <CategoryList />
    </>
  );
}
