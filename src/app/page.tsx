import Featured from '@/components/Featured';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import CategoryList from '@/components/CategoryList';
export default function Home() {
  return (
    <>
      <Featured />
      <CategoryList />
    </>
  );
}
