import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<HomeHeader />
			<div className="flex flex-col items-center mt-24">
				<Image
					src="https://blog.hubspot.com/hs-fs/hubfs/The%20Secret%20History%20of%20the%20Google%20Logo-7.jpeg?width=297&name=The%20Secret%20History%20of%20the%20Google%20Logo-7.jpeg"
					alt="Google logo"
					width={300}
					height={100}
					priority
					style={{ width: 'auto' }}
				/>

				<HomeSearch />
			</div>
		</>
	);
}
