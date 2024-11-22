import Image from "next/image"
import userImage from '@/public/userPic.svg'

export default function ProfilePic() {
  return (
    <Image
      src={userImage}
      alt="picture of Jonathan"
      title="picture of Jonathan"
    />
  )
}