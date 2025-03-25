import Link from 'next/link'

interface ITags {
  titleTag: string;
  linkTag: string;
}

export default function Tags({titleTag, linkTag}:ITags) {
  return (
    <Link className='tag' href={linkTag}>{titleTag}</Link>
  );
}
