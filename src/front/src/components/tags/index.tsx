import Link from 'next/link'

interface ITags {
  titleTag: string;
  linkTag: string;
}

export default function Tags({titleTag, linkTag}:ITags) {
  return (
    <Link data-testid="tag" className='tag' href={linkTag}>{titleTag}</Link>
  );
}
