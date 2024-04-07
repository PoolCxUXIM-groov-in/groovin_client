import Image from 'next/image';
import Link from 'next/link';
export default function SideTab({
  href,
  icon,
  text,
}: {
  href?: string;
  icon: string;
  text: string;
}) {
  return (
    <>
      <Link
        href={href ?? ''}
        className=" gap-3  flex flex-row items-center w-[244px] h-[35px] pl-3 pr-3  rounded-md"
      >
        <div className="flex flex-col justify-center items-center">
          <Image src={icon} width={24} height={24} alt={`${text} buttton`} />
        </div>
        <div>
          <h4 className=" font-bold">{text}</h4>
        </div>
      </Link>
    </>
  );
}
