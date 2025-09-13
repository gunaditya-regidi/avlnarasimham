import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/">
            <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={280}
                height={125}
                style={{ width: '1000', height: '1000' }}
                quality={100}
                priority={true}
                className='dark:hidden'
            />
            <Image
                src="/images/logo/DarkModeLogo.svg"
                alt="logo"
                width={160}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                className='dark:block hidden'
            />
        </Link>
    );
};

export default Logo;
