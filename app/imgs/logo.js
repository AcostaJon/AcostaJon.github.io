// react component
import Image from 'next/image'
// image source
import mylogo from '@/public/jIcon.svg'
 
export default function Logo() {
  return (
    <Image
      src={mylogo}
      alt="logo"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}